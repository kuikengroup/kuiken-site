import { notFound } from "next/navigation";
import { requirePortalUser } from "../../../lib/portal-auth";
import { DataError, EmptyState, PortalLink, PortalPageHeader, Row, Status, text } from "../../_components";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase } = await requirePortalUser();
  const [projectResult, milestonesResult, filesResult, requestsResult] = await Promise.all([
    supabase.from("projects").select("*").eq("id", id).single(),
    supabase.from("project_milestones").select("*").eq("project_id", id).order("sort_order"),
    supabase.from("files").select("*").eq("project_id", id).order("created_at", { ascending:false }),
    supabase.from("change_requests").select("*").eq("project_id", id).order("updated_at", { ascending:false }),
  ]);
  if (!projectResult.data) notFound();
  const errors = [milestonesResult.error,filesResult.error,requestsResult.error].filter(Boolean);
  errors.forEach((error)=>error&&console.error("Project relation query failed",{message:error.message,code:error.code,details:error.details,hint:error.hint}));
  const project = projectResult.data as Row;
  return <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12"><PortalPageHeader eyebrow={String(project.status??"Project")} title={text(project,"name","title")||"Untitled project"} description={text(project,"description","summary")}/>{errors.length>0&&<div className="mt-8"><DataError message="Some project information could not be loaded."/></div>}<div className="mt-16 grid gap-12 lg:grid-cols-3"><Collection title="Milestones" rows={(milestonesResult.data??[]) as Row[]}/><Collection title="Files" rows={(filesResult.data??[]) as Row[]} links="files"/><Collection title="Requests" rows={(requestsResult.data??[]) as Row[]} links="requests"/></div></div>;
}
function Collection({title,rows,links}:{title:string;rows:Row[];links?:"files"|"requests"}){return <section><h2 className="text-3xl font-semibold tracking-[-.04em]">{title}</h2><div className="mt-5 border-t border-[#E7DCC1]/10">{rows.length?rows.map((row,index)=><article key={String(row.id??index)} className="border-b border-[#E7DCC1]/10 py-5"><Status value={row.status}/><div className="mt-2 text-sm text-[#E7DCC1]/70">{text(row,"title","name","display_name","file_name")||"Portal item"}</div>{links&&<div className="mt-3"><PortalLink href={`/portal/${links}/${row.id}`}>Open</PortalLink></div>}</article>):<div className="mt-5"><EmptyState>Nothing has been shared yet.</EmptyState></div>}</div></section>}
