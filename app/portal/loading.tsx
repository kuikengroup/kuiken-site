export default function Loading() {
  return <div className="mx-auto max-w-[90rem] animate-pulse px-6 py-16 lg:px-12"><div className="h-3 w-36 rounded bg-[#C6A972]/30"/><div className="mt-6 h-20 max-w-3xl rounded-2xl bg-[#E7DCC1]/10"/><div className="mt-14 grid gap-4 md:grid-cols-3">{[1,2,3].map((item)=><div key={item} className="h-32 rounded-2xl bg-[#E7DCC1]/8"/>)}</div></div>;
}
