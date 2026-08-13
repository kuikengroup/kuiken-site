import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

export const getPortalUser = cache(async () => {
  const supabase = await createClient();
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) return null;
  const { data: profile } = await supabase.from("profiles").select("id,full_name,email,phone,role").eq("id", userId).single();
  if (!profile) return null;
  return { supabase, profile };
});

export async function requirePortalUser() {
  const context = await getPortalUser();
  if (!context) redirect("/login");
  return context;
}

export async function requireAdmin() {
  const context = await requirePortalUser();
  if (String(context.profile.role).toLowerCase() !== "admin") redirect("/portal");
  return context;
}
