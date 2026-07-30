import type { Metadata } from "next";
import Link from "next/link";
import { logout } from "../login/actions";
import { requirePortalUser } from "../lib/portal-auth";
export const metadata: Metadata = { title: "Client Portal", robots: { index:false, follow:false } };
export default async function PortalLayout({children}:{children:React.ReactNode}){
 const {profile}=await requirePortalUser();
 return <div id="portal-shell" className="min-h-screen bg-[#0D0D0D] text-[#E7DCC1]"><header className="sticky top-0 z-40 border-b border-[#E7DCC1]/10 bg-[#0D0D0D]/90 backdrop-blur-xl"><div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-5"><Link href="/portal" className="text-xs font-semibold tracking-[.22em]">KUIKEN GROUP <span className="ml-3 text-[#C6A972]">PORTAL</span></Link><nav className="flex items-center gap-5 text-xs text-[#E7DCC1]/60"><Link href="/portal">Dashboard</Link>{profile.role==="ADMIN"&&<Link href="/portal/admin">Admin</Link>}<form action={logout}><button className="hover:text-[#C6A972]">Log out</button></form></nav></div></header><main>{children}</main></div>;
}
