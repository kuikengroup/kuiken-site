"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientAccessPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace this with your chosen fallback password
    const correctPassword = "kuikenprivate";

    if (password === correctPassword) {
      setError("");
      router.push("/private");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] bg-[#f7f5f1] text-[#16181d]">
      <div className="mx-auto flex max-w-7xl px-8 py-16 lg:px-12 lg:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
              Private Access
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
              Secure client portal access.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
              This area is reserved for authorized clients, investors, and selected
              partners. Enter the access password below to continue.
            </p>

            <div className="mt-12 grid gap-6 border-t border-black/8 pt-8 md:grid-cols-3">
              {[
                [
                  "Confidential",
                  "Materials within the portal are intended only for approved recipients.",
                ],
                [
                  "Structured",
                  "Documents, updates, and briefings are organized for private review.",
                ],
                [
                  "Direct",
                  "For additional access or support, contact Kuiken Group directly.",
                ],
              ].map(([title, copy]) => (
                <div key={title}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]">
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5c636e]">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
            <div className="rounded-[1.5rem] border border-black/6 bg-[#efede8] p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">
                    Access Required
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1a2230]">
                    Enter password to continue.
                  </div>
                </div>

                <div className="rounded-full border border-[#1a2230]/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a2230] shadow-sm">
                  Secure
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="portal-password"
                    className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]"
                  >
                    Password
                  </label>
                  <input
                    id="portal-password"
                    type="password"
                    value={BK51031!}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access password"
                    className="mt-3 w-full rounded-xl border border-black/8 bg-white px-4 py-3 text-sm text-[#1a2230] outline-none transition focus:border-[#1a2230]/30"
                    autoComplete="current-password"
                    required
                  />
                </div>

                {error ? (
                  <div className="rounded-xl border border-[#8f7750]/20 bg-white px-4 py-3 text-sm text-[#7a6240]">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1a2230] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Enter Portal
                </button>
              </form>

              <div className="mt-8 rounded-2xl border border-[#1a2230]/8 bg-white px-5 py-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]">
                  Need Help?
                </div>
                <div className="mt-3 text-lg font-medium text-[#1a2230]">
                  Brady Kuiken
                </div>
                <div className="mt-1 text-sm text-[#5a616b]">President / CEO</div>
                <div className="mt-4 text-sm text-[#414852]">
                  brady@kuikengroup.com
                </div>
                <div className="text-sm text-[#414852]">712-541-7694</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
