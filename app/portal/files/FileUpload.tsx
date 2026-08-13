"use client";

import { useRef, useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { registerFile } from "./actions";

const field = "rounded-xl bg-[#382F24] p-3";
const categories = ["brand_asset", "website", "document", "report", "invoice", "contract", "photo", "video", "other"];
const allowed = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "png", "jpg", "jpeg", "zip", "txt"];
const maxBytes = 10 * 1024 * 1024;

function withTimeout<T>(operation: PromiseLike<T>, milliseconds: number, label: string): Promise<T> {
  return Promise.race([
    Promise.resolve(operation),
    new Promise<never>((_, reject) => window.setTimeout(() => reject(new Error(`${label} timed out after ${milliseconds / 1000} seconds.`)), milliseconds)),
  ]);
}

export default function FileUpload({ clients, projects }: { clients: { id: string; name: string }[]; projects: { id: string; client_id: string; name: string }[] }) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [clientId, setClientId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("document");
  const [progress, setProgress] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const busy = progress !== null;

  function fail(message: string) {
    setProgress(null);
    setIsError(true);
    setMessage(message);
  }

  async function upload() {
    if (busy) return;
    setMessage("Checking file…");
    setIsError(false);

    if (!clientId) return fail("Choose the client that should receive this file.");
    if (!file) return fail("Choose a local file to upload.");
    if (name.trim().length < 2) return fail("Enter a display name with at least two characters.");
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowed.includes(extension)) return fail(`.${extension || "unknown"} files are not supported.`);
    if (file.size <= 0) return fail("The selected file is empty.");
    if (file.size > maxBytes) return fail(`The selected file is ${(file.size / 1_048_576).toFixed(1)} MB. The current upload limit is 10 MB.`);

    const supabase = createClient();
    let storagePath = "";
    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const folder = projectId ? `projects/${projectId}` : "general";
      storagePath = `clients/${clientId}/${folder}/${crypto.randomUUID()}-${safeName}`;
      setProgress(15);
      setMessage("Uploading to secure storage…");

      const { error: storageError } = await withTimeout(
        supabase.storage.from("client-files").upload(storagePath, file, {
          contentType: file.type || "application/octet-stream",
          upsert: false,
        }),
        20_000,
        "Supabase Storage upload",
      );
      if (storageError) {
        console.error("Storage upload failed", { message: storageError.message, name: storageError.name, status: "status" in storageError ? storageError.status : undefined });
        return fail(storageError.message.includes("row-level security")
          ? "Supabase denied the Storage upload. Confirm this account has profiles.role = 'admin' and the kg_client_files_admin_write policy is installed."
          : `Storage upload failed: ${storageError.message}`);
      }

      setProgress(75);
      setMessage("Storage upload complete. Saving file details…");
      const result = await withTimeout(
        registerFile({ clientId, projectId: projectId || null, fileName: name, storagePath, fileSize: file.size, mimeType: file.type || null, category, description }),
        20_000,
        "File metadata registration",
      );
      if (result.error) return fail(result.error);

      setProgress(null);
      setMessage("File uploaded and registered successfully.");
      setFile(null);
      setName("");
      setDescription("");
      if (fileInput.current) fileInput.current.value = "";
      window.setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      console.error("Unexpected file upload failure", error);
      if (storagePath) await supabase.storage.from("client-files").remove([storagePath]);
      fail(error instanceof Error ? `Upload failed: ${error.message}` : "A network error interrupted the upload. Try again.");
    }
  }

  return <section className="grid gap-4 rounded-[2rem] border border-[#E7DCC1]/10 bg-[#211C16] p-7">
    <h2 className="text-2xl font-semibold">Upload file</h2>
    {!clients.length && <p role="alert" className="text-sm text-red-200">Create a client before uploading a file.</p>}
    <label className="grid gap-2 text-sm">Client<select value={clientId} onChange={(event) => { setClientId(event.target.value); setProjectId(""); }} className={field}><option value="">Choose client</option>{clients.map((client) => <option key={client.id} value={client.id}>{client.name}</option>)}</select></label>
    <select value={projectId} onChange={(event) => setProjectId(event.target.value)} className={field}><option value="">General client file</option>{projects.filter((project) => project.client_id === clientId).map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select>
    <label className="grid gap-2 text-sm">Display name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Display name" className={field} /></label>
    <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" className={field} />
    <select value={category} onChange={(event) => setCategory(event.target.value)} className={field}>{categories.map((item) => <option key={item}>{item}</option>)}</select>
    <label className="grid gap-2 text-sm">Local file<input ref={fileInput} type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.jpeg,.zip,.txt" onChange={(event) => { const selected = event.target.files?.[0] ?? null; setFile(selected); if (selected && !name) setName(selected.name); }} /></label>
    {busy && <><div className="h-1 bg-[#382F24]"><div className="h-full bg-[#C6A972] transition-[width]" style={{ width: `${progress}%` }} /></div><p className="text-xs text-[#E7DCC1]/50">{progress! < 75 ? "Uploading to secure storage…" : "Saving file details…"}</p></>}
    {message && <p role={isError ? "alert" : "status"} className={`text-sm ${isError ? "text-red-200" : "text-[#C6A972]"}`}>{message}</p>}
    <button type="button" onClick={() => void upload()} disabled={busy} className="relative z-10 cursor-pointer rounded-full bg-[#C6A972] px-5 py-3 text-xs font-semibold text-[#17130E] disabled:cursor-wait disabled:opacity-50">{busy ? "Uploading…" : "Upload file"}</button>
  </section>;
}
