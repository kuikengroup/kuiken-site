"use server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";

export type AuthState = { error?: string; message?: string };
export async function login(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || password.length < 8) return { error: "Enter a valid email and password." };
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "The email or password is incorrect." };
  if (formData.get("remember") !== "on") {
    const cookieStore = await cookies();
    cookieStore.getAll().filter((cookie) => cookie.name.startsWith("sb-")).forEach((cookie) => {
      cookieStore.set(cookie.name, cookie.value, {
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    });
  }
  redirect("/portal");
}
export async function requestReset(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!email.includes("@")) return { error: "Enter a valid email address." };
  const origin = process.env.PORTAL_SITE_URL ?? (await headers()).get("origin") ?? "https://kuikengroup.com";
  const supabase = await createClient();
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/recovery`,
  });
  return { message: "If an account exists, a secure reset link has been sent." };
}
export async function updatePassword(_: AuthState, formData: FormData): Promise<AuthState> {
  const password = String(formData.get("password") ?? "");
  if (password.length < 12) return { error: "Use at least 12 characters." };
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: "The password could not be updated. Request a new reset link." };
  redirect("/portal");
}
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
