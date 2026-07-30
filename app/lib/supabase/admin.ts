import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "./config";

export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error("Supabase service role is not configured.");
  return createClient(supabaseConfig().url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
