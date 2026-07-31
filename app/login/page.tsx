import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "./AuthForm";

export const metadata: Metadata = {
  title: "Portal Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div id="login-shell" className="portal-auth-atmosphere min-h-screen px-6 py-16 text-[#F2E9D3] sm:py-20 lg:flex lg:items-center">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#E7DCC1]/14 bg-[#211B14]/90 shadow-[0_45px_140px_rgba(0,0,0,.35)] backdrop-blur-xl lg:grid-cols-[1.08fr_.92fr]">
        <section className="portal-auth-story relative isolate min-h-[32rem] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="portal-auth-orbit" aria-hidden="true" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-6">
              <Image
                src="/kuiken-logo-white.png"
                alt="Kuiken Group"
                width={75}
                height={63}
                className="h-14 w-[67px] shrink-0 object-contain"
              />
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-full border border-[#E7DCC1]/15 bg-[#E7DCC1]/5 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.17em] text-[#E7DCC1]/70 hover:border-[#C6A972]/45 hover:bg-[#C6A972]/10 hover:text-[#E7DCC1]"
              >
                <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
                Back to website
              </Link>
            </div>
            <div className="mt-auto pt-24">
              <div className="section-label">Private client portal</div>
              <h1 className="mt-6 max-w-2xl text-[clamp(3.35rem,6vw,6.7rem)] font-semibold leading-[.86] tracking-[-.07em]">
                Your work, in one considered place.
              </h1>
              <p className="mt-7 max-w-xl leading-7 text-[#E7DCC1]/68">
                Secure access to projects, deliverables, shared files, and the decisions moving the work forward.
              </p>
              <div className="mt-9 flex flex-wrap gap-5 text-[9px] uppercase tracking-[.2em] text-[#E7DCC1]/45">
                <span>Projects</span><span>Deliverables</span><span>Shared files</span>
              </div>
            </div>
          </div>
        </section>
        <section className="portal-auth-card flex flex-col justify-center border-t border-[#E7DCC1]/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[.2em] text-[#E7DCC1]/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A972] shadow-[0_0_14px_rgba(198,169,114,.7)]" />
            Secure workspace
          </div>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em]">Welcome back.</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#E7DCC1]/55">Sign in with the email connected to your Kuiken Group client account.</p>
          <AuthForm mode="login" />
        </section>
      </div>
    </div>
  );
}
