"use server";

import { revalidatePath } from "next/cache";
import { requirePortalUser } from "../../../lib/portal-auth";

const allowedExtensions = new Set([
  "pdf", "png", "jpg", "jpeg", "svg", "ai", "psd", "zip", "docx", "pptx", "xlsx",
]);

export type UploadRegistration = {
  projectId: string;
  folderId: string | null;
  fileId: string;
  name: string;
  path: string;
  mime: string;
  size: number;
};

export async function registerUpload(input: UploadRegistration) {
  const { supabase, profile } = await requirePortalUser();
  const extension = input.name.split(".").pop()?.toLowerCase() ?? "";
  const maxBytes = Number(process.env.PORTAL_MAX_UPLOAD_BYTES ?? 52_428_800);

  if (
    !allowedExtensions.has(extension) ||
    input.size <= 0 ||
    input.size > maxBytes ||
    !input.path.startsWith(`${input.projectId}/${input.fileId}/`)
  ) {
    return { error: "That file type or size is not permitted." };
  }

  const { error } = await supabase.from("files").insert({
    id: input.fileId,
    project_id: input.projectId,
    folder_id: input.folderId,
    display_name: input.name,
    mime_type: input.mime,
    size_bytes: input.size,
    uploaded_by: profile.id,
  });

  if (error) {
    await supabase.storage.from("project-files").remove([input.path]);
    return { error: "The upload could not be registered." };
  }

  const { error: versionError } = await supabase.from("file_versions").insert({
    file_id: input.fileId,
    version: 1,
    storage_path: input.path,
    size_bytes: input.size,
    mime_type: input.mime,
    uploaded_by: profile.id,
  });

  if (versionError) {
    await supabase.storage.from("project-files").remove([input.path]);
    await supabase.from("files").delete().eq("id", input.fileId);
    return { error: "The upload could not be finalized." };
  }

  await supabase.from("activity_log").insert({
    project_id: input.projectId,
    actor_id: profile.id,
    action: `Uploaded ${input.name}`,
  });
  revalidatePath(`/portal/projects/${input.projectId}`);
  return { ok: true };
}

export async function createFolder(formData: FormData) {
  const { supabase, profile } = await requirePortalUser();
  const projectId = String(formData.get("projectId") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  if (!projectId || name.length < 1 || name.length > 80) return;
  await supabase.from("folders").insert({
    project_id: projectId,
    name,
    created_by: profile.id,
  });
  revalidatePath(`/portal/projects/${projectId}`);
}

export async function renameFile(formData: FormData) {
  const { supabase, profile } = await requirePortalUser();
  const id = String(formData.get("id") ?? "");
  const projectId = String(formData.get("projectId") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const extension = name.split(".").pop()?.toLowerCase() ?? "";
  if (!id || !projectId || name.length < 1 || name.length > 180 || !allowedExtensions.has(extension)) return;
  const { data: versions } = await supabase.from("file_versions").select("id,storage_path,version").eq("file_id", id).order("version", { ascending: false }).limit(1);
  const latest = versions?.[0];
  if (!latest) return;
  const safeName = name.replace(/[^a-zA-Z0-9_.(),'!&$@=;:+? -]/g, "_");
  const targetPath = `${latest.storage_path.slice(0, latest.storage_path.lastIndexOf("/") + 1)}${safeName}`;
  const { error: moveError } = await supabase.storage.from("project-files").move(latest.storage_path, targetPath);
  if (moveError) return;
  await supabase.from("file_versions").update({ storage_path: targetPath }).eq("id", latest.id);
  await supabase.from("files").update({ display_name: name, updated_at: new Date().toISOString() }).eq("id", id);
  await supabase.from("activity_log").insert({ project_id: projectId, actor_id: profile.id, action: `Renamed a file to ${name}` });
  revalidatePath(`/portal/projects/${projectId}`);
}

export async function deleteFile(formData: FormData) {
  const { supabase, profile } = await requirePortalUser();
  const id = String(formData.get("id") ?? "");
  const projectId = String(formData.get("projectId") ?? "");
  const { data: versions } = await supabase.from("file_versions").select("storage_path").eq("file_id", id);
  if (versions?.length) {
    const { error } = await supabase.storage.from("project-files").remove(versions.map((version) => version.storage_path));
    if (error) return;
  }
  await supabase.from("files").delete().eq("id", id);
  await supabase.from("activity_log").insert({ project_id: projectId, actor_id: profile.id, action: "Deleted a shared file" });
  revalidatePath(`/portal/projects/${projectId}`);
}
