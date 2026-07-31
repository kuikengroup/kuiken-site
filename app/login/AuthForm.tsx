"use client";
import Link from "next/link";
import { useActionState } from "react";
import { login, requestReset, updatePassword, type AuthState } from "./actions";

export default function AuthForm({ mode }: { mode: "login" | "reset" | "update" }) {
  const action = mode === "login" ? login : mode === "reset" ? requestReset : updatePassword;
  const [state, formAction, pending] = useActionState(action, {} as AuthState);
  return <form action={formAction} className="mt-9 grid gap-5">
    {mode !== "update" && <label className="grid gap-2 text-[10px] uppercase tracking-[.2em] text-[#C6A972]">Email<input name="email" type="email" autoComplete="email" required className="rounded-xl border border-[#E7DCC1]/15 bg-[#2B241B] px-4 py-3 text-base normal-case tracking-normal text-[#E7DCC1]" /></label>}
    {mode !== "reset" && <label className="grid gap-2 text-[10px] uppercase tracking-[.2em] text-[#C6A972]">{mode === "update" ? "New password" : "Password"}<input name="password" type="password" autoComplete={mode === "update" ? "new-password" : "current-password"} minLength={mode === "update" ? 12 : 8} required className="rounded-xl border border-[#E7DCC1]/15 bg-[#2B241B] px-4 py-3 text-base normal-case tracking-normal text-[#E7DCC1]" /></label>}
    {state.error && <p role="alert" className="rounded-xl border border-red-300/20 bg-red-300/5 p-4 text-sm text-red-200">{state.error}</p>}
    {state.message && <p role="status" className="rounded-xl border border-[#C6A972]/25 bg-[#C6A972]/5 p-4 text-sm">{state.message}</p>}
    <button disabled={pending} className="rounded-full bg-[#C6A972] px-6 py-3 text-xs font-semibold uppercase tracking-[.18em] text-[#17130E] disabled:opacity-60">{pending ? "Working…" : mode === "login" ? "Enter Portal" : mode === "reset" ? "Send Reset Link" : "Update Password"}</button>
    {mode === "login" && <><label className="flex items-center gap-3 text-sm text-[#E7DCC1]/60"><input type="checkbox" name="remember" defaultChecked className="accent-[#C6A972]" /> Remember me on this device</label><Link href="/login/forgot-password" className="text-sm text-[#C6A972]">Forgot password?</Link></>}
    {mode !== "login" && <Link href="/login" className="text-sm text-[#C6A972]">Return to login</Link>}
  </form>;
}
