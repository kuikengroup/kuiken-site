"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientAccessPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const correctPassword = "Bk51031!";

    if (password === correctPassword) {
      setError("");
      router.push("/private");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] bg-[#0D0D0D] text-[#E7DCC1]">
      <div className="mx-auto flex max-w-7xl px-8 py-14 lg:px-12 lg:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
              Private Access
            </div>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#E7DCC1] md:text-7xl">
              Client portal access.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#E7DCC1]/70 md:text-xl">
              This area is reserved for authorized clients, partners, and approved
              collaborators. Enter the access password below to continue.
            </p>

            <div className="mt-12 grid gap-6 border-t border-[#E7DCC1]/10 pt-8 md:grid-cols-3">
              {[
                [
                  "Confidential",
                  "Materials within the portal are intended only for approved recipients.",
                ],
                [
                  "Structured",
                  "Documents, updates, and marketing resources are organized for private review.",
                ],
                [
                  "Direct",
                  "For additional access or support, contact Kuiken Group directly.",
                ],
              ].map(([title, copy]) => (
                <div key={title}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#C6A972]">
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#E7DCC1]/65">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E7DCC1]/10 bg-[#252625] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.5rem] border border-[#E7DCC1]/10 bg-[#0D0D0D] p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#C6A972]">
                    Access Required
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#E7DCC1]">
                    Enter password to continue.
                  </h2>
                </div>

                <div className="rounded-full border border-[#C6A972]/35 bg-[#252625] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#C6A972]">
                  Private
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="portal-password"
                    className="text-[11px] uppercase tracking-[0.22em] text-[#C6A972]"
                  >
                    Password
                  </label>
                  <input
                    id="portal-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access password"
                    className="mt-3 w-full rounded-xl border border-[#E7DCC1]/10 bg-[#252625] px-4 py-3 text-sm text-[#E7DCC1] placeholder-[#E7DCC1]/60 outline-none transition focus:border-[#C6A972]/60 focus-visible:ring-2 focus-visible:ring-[#C6A972] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
                    autoComplete="current-password"
                    required
                  />
                </div>

                {error ? (
                  <div role="alert" aria-live="polite" className="rounded-xl border border-[#C6A972]/25 bg-[#252625] px-4 py-3 text-sm text-[#C6A972]">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C6A972] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#0D0D0D] transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Enter Portal
                </button>
              </form>

              <div className="mt-8 rounded-2xl border border-[#E7DCC1]/10 bg-[#252625] px-5 py-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#C6A972]">
                  Need Help?
                </div>
                <div className="mt-3 text-lg font-medium text-[#E7DCC1]">
                  Brady Kuiken
                </div>
                <div className="mt-1 text-sm text-[#E7DCC1]/65">President / CEO</div>
                <a href="mailto:brady@kuikengroup.com" className="mt-4 block text-sm text-[#E7DCC1]/75 hover:text-[#C6A972]">
                  brady@kuikengroup.com
                </a>
                <a href="tel:+17125417694" className="text-sm text-[#E7DCC1]/75 hover:text-[#C6A972]">712-541-7694</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
