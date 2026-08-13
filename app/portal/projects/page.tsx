import Link from "next/link";
import { requirePortalUser } from "../../lib/portal-auth";
import { DataError, EmptyState, PortalPageHeader, Row, Status, text } from "../_components";
import { ProjectForm } from "./ProjectForms";

export default async function ProjectsPage() {
  const { supabase, profile } = await requirePortalUser();
  const [{ data, error },clientsResult] = await Promise.all([supabase.from("projects").select("*").order("updated_at", { ascending: false }),String(profile.role)==="admin"?supabase.from("clients").select("id,business_name").order("business_name"):Promise.resolve({data:[],error:null})]);
  if (error) console.error("Projects query failed", { message:error.message, code:error.code, details:error.details, hint:error.hint });
  const projects = (data ?? []) as Row[];
  return <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12"><PortalPageHeader eyebrow="Projects" title="Every engagement, aligned." />{error && <div className="mt-8"><DataError message="Projects could not be loaded."/></div>}<div className={`mt-12 grid gap-10 ${profile.role==="admin"?"lg:grid-cols-[1.2fr_.8fr]":""}`}><div className="grid gap-4 lg:grid-cols-2">{projects.length?projects.map((project)=><Link key={String(project.id)} href={`/portal/projects/${project.id}`} className="rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#292219] p-8 hover:border-[#C6A972]/30"><Status value={project.status}/><h2 className="mt-10 text-3xl font-semibold">{text(project,"name")||"Untitled project"}</h2><p className="mt-4 text-sm leading-7 text-[#E7DCC1]/55">{text(project,"description")||"Open the project for its milestones, files, and requests."}</p></Link>):<EmptyState>No projects are available for this account.</EmptyState>}</div>{profile.role==="admin"&&<div><h2 className="mb-5 text-2xl font-semibold">Add project</h2><ProjectForm clients={(clientsResult.data??[]).map(c=>({id:c.id,name:c.business_name}))}/></div>}</div></div>;
}
