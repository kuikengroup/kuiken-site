import { notFound } from "next/navigation";
import { requirePortalUser } from "../../../lib/portal-auth";
import FileManager from "./FileManager";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase } = await requirePortalUser();
  const [{ data: project }, { data: deliverables }, { data: notes }, { data: files }, { data: folders }] = await Promise.all([
    supabase.from("projects").select("*").eq("id", id).single(),
    supabase.from("deliverables").select("*").eq("project_id", id).order("position"),
    supabase.from("project_notes").select("*").eq("project_id", id).order("created_at", { ascending: false }),
    supabase.from("files").select("*").eq("project_id", id).order("updated_at", { ascending: false }),
    supabase.from("folders").select("id,name").eq("project_id", id).order("name"),
  ]);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12">
      <div className="section-label">{project.status.replace("_", " ")}</div>
      <h1 className="mt-5 text-[clamp(3.75rem,8vw,8rem)] font-semibold leading-[.85] tracking-[-.07em]">{project.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#E7DCC1]/60">{project.description}</p>
      <div className="mt-16 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="space-y-7 lg:sticky lg:top-28 lg:self-start">
          <Meta label="Timeline" value={`${project.start_date || "Not set"} — ${project.due_date || "Open"}`} />
          <Meta label="Status" value={project.status} />
          <Meta label="Files" value={String(files?.length ?? 0)} />
        </aside>
        <div className="space-y-16">
          <Section title="Overview" rows={[project.description || "Project details will appear here."]} />
          <Section title="Deliverables" rows={(deliverables ?? []).map((item) => `${item.title} · ${item.status}`)} />
          <FileManager projectId={id} initialFiles={files ?? []} folders={folders ?? []} maxBytes={Number(process.env.PORTAL_MAX_UPLOAD_BYTES ?? 52_428_800)} />
          <Section title="Project notes" rows={(notes ?? []).map((note) => note.body)} />
          <Section title="Version history" rows={(files ?? []).map((file) => `${file.display_name} · v${file.current_version}`)} />
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return <div><div className="case-meta-label">{label}</div><div className="text-sm text-[#E7DCC1]/65">{value}</div></div>;
}
function Section({ title, rows }: { title: string; rows: string[] }) {
  return <section><h2 className="text-3xl font-semibold tracking-[-.04em]">{title}</h2><div className="mt-5 border-t border-[#E7DCC1]/10">{rows.length ? rows.map((row, index) => <div key={`${row}-${index}`} className="border-b border-[#E7DCC1]/10 py-5 text-sm leading-7 text-[#E7DCC1]/60">{row}</div>) : <p className="py-6 text-sm text-[#E7DCC1]/40">Nothing has been shared yet.</p>}</div></section>;
}
