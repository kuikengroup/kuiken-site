import Link from "next/link";
import { requirePortalUser } from "../lib/portal-auth";
import { DataError, EmptyState, PortalPageHeader, Row, Status, text } from "./_components";

export default async function PortalPage() {
  const { supabase, profile } = await requirePortalUser();
  const [membershipsResult, projectsResult, milestonesResult, filesResult, requestsResult, activityResult] = await Promise.all([
    supabase.from("client_memberships").select("*, client:clients(*)").limit(1),
    supabase.from("projects").select("*").order("updated_at", { ascending: false }).limit(8),
    supabase.from("project_milestones").select("*").order("sort_order", { ascending: true }).limit(6),
    supabase.from("files").select("*").order("created_at", { ascending: false }).limit(6),
    supabase.from("change_requests").select("*").order("updated_at", { ascending: false }).limit(8),
    supabase.from("activity_events").select("*").order("created_at", { ascending: false }).limit(6),
  ]);
  const failures = [membershipsResult, projectsResult, milestonesResult, filesResult, requestsResult, activityResult].filter((result) => result.error);
  failures.forEach(({ error }) => error && console.error("Portal query failed", { message: error.message, code: error.code, details: error.details, hint: error.hint }));
  const projects = (projectsResult.data ?? []) as Row[];
  const requests = (requestsResult.data ?? []) as Row[];
  const memberships = (membershipsResult.data ?? []) as Row[];
  const firstClient = memberships[0]?.client as Row | undefined;
  const clientName = firstClient ? text(firstClient, "business_name") : "";
  const displayName = String(profile.full_name || "there").split(" ")[0];
  const activeProjects = projects.filter((row) => !["complete", "completed", "archived"].includes(String(row.status).toLowerCase()));
  const openRequests = requests.filter((row) => !["complete", "completed", "closed", "rejected"].includes(String(row.status).toLowerCase()));
  return <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12">
    <PortalPageHeader eyebrow={clientName || "Client workspace"} title={`Welcome back, ${displayName}.`} description="The latest projects, decisions, files, and milestones shared with your account." />
    {failures.length > 0 && <div className="mt-8"><DataError message="Some portal information could not be loaded." /></div>}
    <div className="mt-14 grid gap-4 md:grid-cols-3"><Metric label="Active projects" value={activeProjects.length}/><Metric label="Open requests" value={openRequests.length}/><Metric label="Needs your action" value={requests.filter((row)=>row.status==="awaiting_client").length}/></div>
    <section className="mt-20"><div className="flex items-end justify-between gap-4"><h2 className="text-4xl font-semibold tracking-[-.05em]">The work in motion.</h2><Link href="/portal/projects" className="text-sm text-[#C6A972]">All projects →</Link></div><div className="mt-9 grid gap-4 lg:grid-cols-2">{projects.length ? projects.map((project)=><Link key={String(project.id)} href={`/portal/projects/${project.id}`} className="rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#292219] p-8 hover:border-[#C6A972]/30"><Status value={project.status}/><h3 className="mt-10 text-3xl font-semibold tracking-[-.04em]">{text(project,"name","title") || "Untitled project"}</h3><p className="mt-4 line-clamp-2 text-sm leading-7 text-[#E7DCC1]/55">{text(project,"description","summary") || "Project details and shared deliverables."}</p></Link>) : <EmptyState>No projects have been assigned yet.</EmptyState>}</div></section>
    <div className="mt-20 grid gap-12 lg:grid-cols-3"><List title="Upcoming milestones" rows={(milestonesResult.data ?? []) as Row[]} /><List title="Recent files" rows={(filesResult.data ?? []) as Row[]} /><List title="Recent activity" rows={(activityResult.data ?? []) as Row[]} /></div>
  </div>;
}
function Metric({label,value}:{label:string;value:number}){return <div className="rounded-2xl border border-[#E7DCC1]/10 bg-[#211C16] p-6"><div className="text-4xl font-semibold">{value}</div><div className="mt-3 text-[10px] uppercase tracking-[.2em] text-[#E7DCC1]/45">{label}</div></div>}
function List({title,rows}:{title:string;rows:Row[]}){return <section><div className="section-label">{title}</div><div className="mt-5 border-t border-[#E7DCC1]/10">{rows.length?rows.map((row,index)=><div key={String(row.id ?? index)} className="border-b border-[#E7DCC1]/10 py-4 text-sm text-[#E7DCC1]/65">{text(row,"title","name","display_name","event_type","action","description") || "Portal update"}</div>):<p className="py-6 text-sm text-[#E7DCC1]/45">Nothing here yet.</p>}</div></section>}
