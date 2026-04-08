export default function PrivatePage() {
  const resources = [
    {
      type: "Presentation",
      title: "Strategic Review Deck",
      description:
        "Confidential overview of current priorities, opportunities, and strategic considerations.",
      status: "Available",
      href: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
      action: "Open Deck",
      preview: "Quarterly strategic priorities, market positioning, and active opportunities.",
    },
    {
      type: "Document",
      title: "Client Briefing Materials",
      description:
        "Private reference materials prepared for active review and discussion.",
      status: "Restricted",
      href: "https://example.com/briefing.pdf",
      action: "View Briefing",
      preview: "Prepared briefing notes, summary materials, and supporting discussion points.",
    },
    {
      type: "Update",
      title: "Engagement Notes",
      description:
        "Current engagement context, active workstreams, and key discussion points.",
      status: "Current",
      href: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
      action: "Review Notes",
      preview: "Latest engagement updates, working notes, and key next-step items.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#16181d]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f7f5f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-12">
          <div className="flex items-center gap-3">
            <img
              src="/kuiken-logo.png"
              alt="Kuiken Group Logo"
              className="h-11 w-auto object-contain"
            />
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
                Client Access
              </div>
              <div className="text-sm font-semibold tracking-[0.22em] text-[#1a2230]">
                KUIKEN GROUP
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:brady@kuikengroup.com"
              className="rounded-full border border-[#1a2230]/15 bg-white px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block"
            >
              Request Access
            </a>
            <a
              href="/"
              className="rounded-full border border-[#1a2230] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1a2230] hover:text-white inline-block"
            >
              Return Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-16 lg:px-12 lg:py-20">
        {/* Welcome / Access Screen */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
              Restricted Portal
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
              Welcome to the private portal.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
              This confidential area is reserved for approved clients, investors,
              and selected partners reviewing restricted materials, updates, and
              briefing documents.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#resources"
                className="rounded-full bg-[#1a2230] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
              >
                Enter Portal
              </a>
              <a
                href="mailto:brady@kuikengroup.com"
                className="rounded-full border border-[#1a2230]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block"
              >
                Contact Brady
              </a>
            </div>

            <div className="mt-14 grid gap-6 border-t border-black/8 pt-8 md:grid-cols-3">
              {[
                [
                  "Private Access",
                  "Reserved for approved parties and confidential review.",
                ],
                [
                  "Curated Materials",
                  "Presentations, briefings, and updates organized with clarity.",
                ],
                [
                  "Direct Follow-Up",
                  "Fast path for requests, questions, and additional files.",
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

          {/* Status / Welcome Card */}
          <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
            <div className="rounded-[1.5rem] border border-black/6 bg-[#efede8] p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">
                    Portal Status
                  </div>
                  <div className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1a2230]">
                    Secure review environment.
                  </div>
                </div>
                <div className="rounded-full border border-[#1a2230]/10 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1a2230]">
                  Secure
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Documents are intended only for authorized viewers.",
                  "Please do not forward or redistribute private materials.",
                  "Request updated files directly if additional access is needed.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[#8f7750]" />
                    <div className="text-sm text-[#414852]">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#1a2230]/8 bg-white px-5 py-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]">
                  Direct Contact
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
        </section>

        {/* Resource Grid with Previews */}
        <section id="resources" className="mt-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
                Portal Resources
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                Private materials, presented with structure.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#59606a]">
              Each item below can link directly to a PDF, Google Drive file, or
              another private destination.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_10px_35px_rgba(17,24,39,0.05)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                    {item.type}
                  </div>
                  <div className="rounded-full bg-[#f3efe7] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6e5a36]">
                    {item.status}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#1a2230]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5a616b]">
                  {item.description}
                </p>

                {/* Preview box */}
                <div className="mt-6 rounded-2xl border border-black/6 bg-[#f7f5f1] p-5">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#8f7750]">
                    Preview
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#505761]">
                    {item.preview}
                  </p>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-full border border-[#1a2230]/15 bg-[#f7f5f1] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230]"
                >
                  {item.action}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}