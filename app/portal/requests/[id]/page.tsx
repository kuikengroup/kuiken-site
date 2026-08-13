import { notFound } from "next/navigation";
import { requirePortalUser } from "../../../lib/portal-auth";
import { DataError, EmptyState, PortalLink, PortalPageHeader, Row, Status, text } from "../../_components";
import { CommentForm } from "../RequestForms";

export default async function RequestPage({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const {supabase}=await requirePortalUser();
  const [requestResult,commentsResult,attachmentsResult]=await Promise.all([
    supabase.from("change_requests").select("*").eq("id",id).single(),
    supabase.from("change_request_comments").select("*, author:profiles(id,full_name,role)").eq("request_id",id).eq("is_internal",false).order("created_at"),
    supabase.from("request_attachments").select("*").eq("request_id",id).order("created_at"),
  ]);
  if(!requestResult.data)notFound();
  const request=requestResult.data as Row;
  const errors=[commentsResult.error,attachmentsResult.error].filter(Boolean);
  errors.forEach(error=>error&&console.error("Request detail query failed",{message:error.message,code:error.code,details:error.details,hint:error.hint}));
  return <div className="mx-auto max-w-4xl px-6 py-16"><Status value={request.status}/><PortalPageHeader eyebrow="Change request" title={text(request,"title")||"Change request"} description={text(request,"description")}/>{errors.length>0&&<div className="mt-8"><DataError message="Some request details could not be loaded."/></div>}<section className="mt-14"><h2 className="text-3xl font-semibold">Conversation</h2><div className="mt-5">{commentsResult.data?.length?((commentsResult.data as Row[]).map((comment,index)=><article key={String(comment.id??index)} className="border-b border-[#E7DCC1]/10 py-5 text-sm leading-7 text-[#E7DCC1]/65">{text(comment,"body")}</article>)):<EmptyState>No public comments yet.</EmptyState>}</div><CommentForm requestId={id}/></section><section className="mt-14"><h2 className="text-3xl font-semibold">Attachments</h2><div className="mt-5">{attachmentsResult.data?.length?(attachmentsResult.data as Row[]).map((item,index)=><div key={String(item.id??index)} className="flex items-center justify-between gap-4 border-b border-[#E7DCC1]/10 py-4 text-sm"><span>{text(item,"file_name")||"Attachment"}</span><PortalLink href={`/portal/request-attachments/${item.id}`}>Download</PortalLink></div>):<EmptyState>No attachments have been shared.</EmptyState>}</div></section></div>;
}
