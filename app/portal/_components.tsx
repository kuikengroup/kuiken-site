import Link from "next/link";

export type Row = Record<string, unknown>;

export function text(row: Row, ...keys: string[]) {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return "";
}

export function PortalPageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <header><div className="section-label">{eyebrow}</div><h1 className="mt-5 text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[.88] tracking-[-.07em]">{title}</h1>{description && <p className="mt-7 max-w-2xl text-base leading-8 text-[#E7DCC1]/60">{description}</p>}</header>;
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-dashed border-[#E7DCC1]/15 p-10 text-sm text-[#E7DCC1]/50">{children}</div>;
}

export function DataError({ message }: { message: string }) {
  return <div role="alert" className="rounded-2xl border border-red-300/20 bg-red-300/5 p-5 text-sm text-red-100">{message} Refresh the page to try again.</div>;
}

export function Status({ value }: { value: unknown }) {
  return <span className="text-[10px] uppercase tracking-[.2em] text-[#C6A972]">{String(value ?? "Pending").replaceAll("_", " ")}</span>;
}

export function PortalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-sm text-[#C6A972] hover:text-[#E7DCC1]">{children} →</Link>;
}
