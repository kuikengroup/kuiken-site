"use server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "../../lib/portal-auth";
import { createAdminClient } from "../../lib/supabase/admin";

export async function inviteClient(formData:FormData){
 const {supabase,profile}=await requireAdmin(); const email=String(formData.get("email")??"").trim(); const name=String(formData.get("name")??"").trim(); const company=String(formData.get("company")??"").trim();
 if(!email.includes("@")||name.length<2) return;
 const admin=createAdminClient(); const baseUrl=process.env.PORTAL_SITE_URL??"https://kuikengroup.com"; const {data,error}=await admin.auth.admin.inviteUserByEmail(email,{data:{full_name:name,company},redirectTo:`${baseUrl}/auth/callback?next=/login/update-password`});
 if(!error&&data.user) await supabase.from("activity_log").insert({actor_id:profile.id,action:"Client invited",details:{client_id:data.user.id}});
 revalidatePath("/portal/admin");
}
export async function createProject(formData:FormData){
 const {supabase,profile}=await requireAdmin(); const name=String(formData.get("name")??"").trim(); const description=String(formData.get("description")??"").trim(); const client=String(formData.get("client")??"");
 if(name.length<2)return; const {data}=await supabase.from("projects").insert({name,description,created_by:profile.id,status:"PLANNING"}).select("id").single();
 if(data&&client) await supabase.from("project_members").insert({project_id:data.id,profile_id:client});
 revalidatePath("/portal/admin"); revalidatePath("/portal");
}
export async function toggleClient(formData:FormData){
 const {supabase}=await requireAdmin(); const id=String(formData.get("id")); const disabled=formData.get("disabled")==="true";
 const admin=createAdminClient(); await admin.auth.admin.updateUserById(id,{ban_duration:disabled?"none":"876000h"});
 await supabase.from("profiles").update({disabled:!disabled}).eq("id",id); revalidatePath("/portal/admin");
}
export async function resetClientPassword(formData:FormData){
 const {supabase}=await requireAdmin(); const email=String(formData.get("email")??""); const baseUrl=process.env.PORTAL_SITE_URL??"https://kuikengroup.com"; await supabase.auth.resetPasswordForEmail(email,{redirectTo:`${baseUrl}/auth/callback?next=/login/update-password`});
}
