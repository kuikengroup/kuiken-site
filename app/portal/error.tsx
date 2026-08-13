"use client";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="mx-auto max-w-3xl px-6 py-24"><div className="section-label">Portal unavailable</div><h1 className="mt-5 text-5xl font-semibold tracking-[-.05em]">We couldn’t load this workspace.</h1><p className="mt-6 text-[#E7DCC1]/60">Your session may have expired, the network may be unavailable, or access may have changed.</p><button onClick={reset} className="mt-8 rounded-full bg-[#C6A972] px-6 py-3 text-xs font-semibold uppercase tracking-[.16em] text-[#17130E]">Try again</button>{process.env.NODE_ENV === "development" && <pre className="mt-8 overflow-auto text-xs text-red-200">{error.message}</pre>}</div>;
}
