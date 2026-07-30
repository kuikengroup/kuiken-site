"use client";

import { useMemo, useState } from "react";
import { createClient } from "../../../lib/supabase/client";
import { createFolder, deleteFile, registerUpload, renameFile } from "./actions";

type FileRow = {
  id: string; display_name: string; mime_type: string; size_bytes: number;
  updated_at: string; folder_id: string | null;
};
type FolderRow = { id: string; name: string };

export default function FileManager({
  projectId, initialFiles, folders, maxBytes,
}: {
  projectId: string; initialFiles: FileRow[]; folders: FolderRow[]; maxBytes: number;
}) {
  const [folder, setFolder] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"new" | "name">("new");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState("");

  const visibleFiles = useMemo(() => initialFiles
    .filter((file) => file.folder_id === folder && file.display_name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sort === "name"
      ? a.display_name.localeCompare(b.display_name)
      : Date.parse(b.updated_at) - Date.parse(a.updated_at)),
  [folder, initialFiles, query, sort]);

  async function upload(file: File) {
    setError("");
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    const accepted = ["pdf","png","jpg","jpeg","svg","ai","psd","zip","docx","pptx","xlsx"];
    if (!accepted.includes(extension) || file.size > maxBytes || file.size === 0) {
      setError("Choose a supported file within the configured size limit.");
      return;
    }

    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) { setError("Your session expired. Sign in again."); return; }

    const fileId = crypto.randomUUID();
    const safeName = file.name.replace(/[^a-zA-Z0-9_.(),'!&$@=;:+? -]/g, "_");
    const path = `${projectId}/${fileId}/1/${safeName}`;
    const fallbackMime: Record<string, string> = {
      ai: "application/postscript",
      psd: "image/vnd.adobe.photoshop",
      zip: "application/zip",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };
    const mime = file.type || fallbackMime[extension];
    if (!mime) { setProgress(null); setError("The file type could not be verified."); return; }
    const endpoint = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/project-files/${path.split("/").map(encodeURIComponent).join("/")}`;
    setProgress(0);

    const uploadResult = await new Promise<boolean>((resolve) => {
      const request = new XMLHttpRequest();
      request.open("POST", endpoint);
      request.setRequestHeader("Authorization", `Bearer ${token}`);
      request.setRequestHeader("apikey", process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);
      request.setRequestHeader("Content-Type", mime);
      request.setRequestHeader("x-upsert", "false");
      request.upload.onprogress = (event) => event.lengthComputable && setProgress(Math.round((event.loaded / event.total) * 85));
      request.onload = () => resolve(request.status >= 200 && request.status < 300);
      request.onerror = () => resolve(false);
      request.send(file);
    });

    if (!uploadResult) { setProgress(null); setError("Upload failed. Check the file and try again."); return; }
    setProgress(90);
    const result = await registerUpload({
      projectId, folderId: folder, fileId, name: file.name, path,
      mime, size: file.size,
    });
    if (result.error) { setProgress(null); setError(result.error); return; }
    setProgress(100);
    window.setTimeout(() => window.location.reload(), 300);
  }

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div><div className="case-meta-label">File manager</div><h2 className="text-3xl font-semibold tracking-[-.04em]">Shared files</h2></div>
        <label className="cursor-pointer rounded-full bg-[#C6A972] px-5 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[#12140F]">
          Upload file<input type="file" className="sr-only" onChange={(event) => event.target.files?.[0] && upload(event.target.files[0])} />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
        <button onClick={() => setFolder(null)} className={folder === null ? "text-[#C6A972]" : "text-[#E7DCC1]/50"}>All files</button>
        {folders.map((item) => <button key={item.id} onClick={() => setFolder(item.id)} className={folder === item.id ? "text-[#C6A972]" : "text-[#E7DCC1]/50"}><span className="mx-2">/</span>{item.name}</button>)}
      </div>

      <div onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); const file = event.dataTransfer.files[0]; if (file) upload(file); }} className="mt-6 rounded-2xl border border-dashed border-[#E7DCC1]/15 p-6 text-center text-xs text-[#E7DCC1]/40">
        Drag and drop a supported file here
      </div>
      {progress !== null && <div aria-label={`Upload ${progress}% complete`} className="mt-4 h-1 overflow-hidden rounded bg-[#30332A]"><div className="h-full bg-[#C6A972] transition-[width]" style={{ width: `${progress}%` }} /></div>}
      {error && <p role="alert" className="mt-4 text-sm text-red-200">{error}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search files" aria-label="Search files" className="rounded-xl border border-[#E7DCC1]/10 bg-[#24271F] px-4 py-3 text-sm" />
        <select value={sort} onChange={(event) => setSort(event.target.value as "new" | "name")} aria-label="Sort files" className="rounded-xl border border-[#E7DCC1]/10 bg-[#24271F] px-4"><option value="new">Newest</option><option value="name">Name</option></select>
        <button onClick={() => setView(view === "grid" ? "list" : "grid")} className="rounded-xl border border-[#E7DCC1]/10 px-4 text-xs">{view === "grid" ? "List" : "Grid"} view</button>
        <form action={createFolder} className="flex gap-2">
          <input type="hidden" name="projectId" value={projectId} />
          <input name="name" required maxLength={80} placeholder="Folder name" aria-label="New folder name" className="w-32 rounded-xl bg-[#24271F] px-3 text-sm" />
          <button className="rounded-xl border border-[#E7DCC1]/10 px-3 text-xs">New folder</button>
        </form>
      </div>

      <div className={`mt-6 grid gap-3 ${view === "grid" ? "sm:grid-cols-2" : ""}`}>
        {visibleFiles.map((file) => (
          <article key={file.id} className="rounded-2xl border border-[#E7DCC1]/10 bg-[#22251E] p-5">
            <div className="text-[10px] uppercase tracking-[.2em] text-[#C6A972]">{file.mime_type.split("/").pop()}</div>
            <div className="mt-3 break-words font-medium">{file.display_name}</div>
            <div className="mt-2 text-xs text-[#E7DCC1]/40">{(file.size_bytes / 1_048_576).toFixed(1)} MB · v1</div>
            <div className="mt-5 flex flex-wrap gap-4 text-xs">
              <a href={`/portal/files/${file.id}`} target="_blank" rel="noreferrer">Preview</a>
              <a href={`/portal/files/${file.id}?download=1`}>Download</a>
              <form action={renameFile} className="flex gap-2">
                <input type="hidden" name="id" value={file.id} /><input type="hidden" name="projectId" value={projectId} />
                <input name="name" aria-label={`Rename ${file.display_name}`} required placeholder="New name" className="w-24 bg-[#30332A] px-2" /><button>Rename</button>
              </form>
              <form action={deleteFile}><input type="hidden" name="id" value={file.id} /><input type="hidden" name="projectId" value={projectId} /><button className="text-red-200">Delete</button></form>
            </div>
          </article>
        ))}
      </div>
      {!visibleFiles.length && <p className="mt-8 text-sm text-[#E7DCC1]/40">No files in this location.</p>}
    </section>
  );
}
