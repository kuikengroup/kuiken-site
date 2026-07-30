import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { logout } from "../login/actions";
import { requirePortalUser } from "../lib/portal-auth";

export const metadata: Metadata = {
  title: "Client Portal",
  robots: { index: false, follow: false },
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requirePortalUser();
  const initials = profile.full_name
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "KG";

  return (
    <div id="portal-shell" className="portal-atmosphere min-h-screen text-[#F2E9D3]">
      <header className="portal-header sticky top-0 z-40 border-b border-[#E7DCC1]/12 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <Link href="/portal" className="flex items-center gap-3" aria-label="Kuiken Group portal dashboard">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A972]/30 bg-[#C6A972]/8">
              <Image src="/kuiken-logo-white.png" alt="" width={75} height={63} className="h-6 w-auto" />
            </span>
            <span>
              <span className="block text-[10px] font-semibold tracking-[.23em]">KUIKEN GROUP</span>
              <span className="mt-0.5 block text-[8px] uppercase tracking-[.27em] text-[#C6A972]">Client Portal</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <nav aria-label="Portal navigation" className="hidden items-center gap-1 rounded-full border border-[#E7DCC1]/10 bg-[#E7DCC1]/5 p-1 text-xs text-[#E7DCC1]/70 sm:flex">
              <Link href="/portal" className="rounded-full px-4 py-2 hover:bg-[#E7DCC1]/7 hover:text-[#E7DCC1]">Dashboard</Link>
              {profile.role === "ADMIN" && (
                <Link href="/portal/admin" className="rounded-full px-4 py-2 hover:bg-[#E7DCC1]/7 hover:text-[#E7DCC1]">Admin</Link>
              )}
            </nav>
            <div className="flex items-center gap-3 border-l border-[#E7DCC1]/12 pl-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C6A972] text-[10px] font-bold tracking-[.08em] text-[#161712]">
                {initials}
              </span>
              <form action={logout}>
                <button className="text-[10px] uppercase tracking-[.17em] text-[#E7DCC1]/55 hover:text-[#C6A972]">Log out</button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
