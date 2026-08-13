import { notFound } from "next/navigation";
import { requirePortalUser } from "../../../lib/portal-auth";
import { DataError, EmptyState, PortalLink, PortalPageHeader, Row, Status, text } from "../../_components";
import { ProjectForm, MilestoneForm } from "../ProjectForms";
import { deleteMilestone, moveMilestone } from "../actions";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase, profile } = await requirePortalUser();
  const [projectResult, milestonesResult, filesResult, requestsResult,clientsResult] = await Promise.all([
    supabase.from("projects").select("*").eq("id", id).single(),
    supabase.from("project_milestones").select("*").eq("project_id", id).order("sort_order"),
    supabase.from("files").select("*").eq("project_id", id).order("created_at", { ascending:false }),
    supabase.from("change_requests").select("*").eq("project_id", id).order("updated_at", { ascending:false }),
    profile.role==="admin"?supabase.from("clients").select("id,business_name").order("business_name"):Promise.resolve({data:[],error:null}),
  ]);
  if (!projectResult.data) notFound();
  const errors = [milestonesResult.error,filesResult.error,requestsResult.error].filter(Boolean);
  errors.forEach((error)=>error&&console.error("Project relation query failed",{message:error.message,code:error.code,details:error.details,hint:error.hint}));
  const project = projectResult.data as Row;
  const milestones=(milestonesResult.data??[]) as Row[];
  return <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12"><PortalPageHeader eyebrow={String(project.status??"Project")} title={text(project,"name")||"Untitled project"} description={text(project,"description")}/>{errors.length>0&&<div className="mt-8"><DataError message="Some project information could not be loaded."/></div>}{profile.role==="admin"&&<div className="mt-12 grid gap-8 lg:grid-cols-2"><div><h2 className="mb-5 text-2xl font-semibold">Edit project</h2><ProjectForm project={project} clients={(clientsResult.data??[]).map(c=>({id:c.id,name:c.business_name}))}/></div><section><h2 className="text-2xl font-semibold">Manage milestones</h2>{milestones.map((m,index)=><div key={String(m.id)}><MilestoneForm projectId={id} milestone={m} nextOrder={index}/><div className="mt-2 flex gap-4 text-xs"><form action={moveMilestone}><input type="hidden" name="id" value={String(m.id)}/><input type="hidden" name="project_id" value={id}/><input type="hidden" name="sort_order" value={String(m.sort_order)}/><button name="direction" value="-1">Move up</button><button name="direction" value="1">Move down</button></form><form action={deleteMilestone}><input type="hidden" name="id" value={String(m.id)}/><input type="hidden" name="project_id" value={id}/><button className="text-red-200">Delete</button></form></div></div>)}<MilestoneForm projectId={id} nextOrder={milestones.length}/></section></div>}<div className="mt-16 grid gap-12 lg:grid-cols-3"><Collection title="Milestones" rows={milestones}/><Collection title="Files" rows={(filesResult.data??[]) as Row[]} links="files"/><Collection title="Requests" rows={(requestsResult.data??[]) as Row[]} links="requests"/></div></div>;
}
function Collection({title,rows,links}:{title:string;rows:Row[];links?:"files"|"requests"}){return <section><h2 className="text-3xl font-semibold tracking-[-.04em]">{title}</h2><div className="mt-5 border-t border-[#E7DCC1]/10">{rows.length?rows.map((row,index)=><article key={String(row.id??index)} className="border-b border-[#E7DCC1]/10 py-5"><Status value={row.status}/><div className="mt-2 text-sm text-[#E7DCC1]/70">{text(row,"title","name","display_name","file_name")||"Portal item"}</div>{links&&<div className="mt-3"><PortalLink href={`/portal/${links}/${row.id}`}>Open</PortalLink></div>}</article>):<div className="mt-5"><EmptyState>Nothing has been shared yet.</EmptyState></div>}</div></section>}
