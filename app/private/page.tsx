export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] px-8 py-20 text-[#16181d]">
      <div className="mx-auto max-w-4xl">
        <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
          Private Access
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#151922] md:text-6xl">
          Confidential Materials
        </h1>
        <p className="mt-8 text-lg leading-8 text-[#525963]">
          This page is restricted to approved visitors.
        </p>
      </div>
    </div>
  );
}