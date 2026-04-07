export default function PrivatePage() {
  const resources = [
    {
      category: "Presentation",
      title: "Quarterly Strategic Review",
      description: "A concise overview of priorities, market positioning, and next-stage opportunities.",
      action: "Open Resource",
    },
    {
      category: "Document",
      title: "Client Briefing Materials",
      description: "Restricted reference materials prepared for private review and discussion.",
      action: "View Briefing",
    },
    {
      category: "Update",
      title: "Current Engagement Notes",
      description: "Key updates, working priorities, and active discussion points for approved parties.",
      action: "Review Notes",
    },
  ];

  const contacts = [
    { label: "Email", value: "brady@kuikengroup.com" },
    { label: "Phone", value: "712-541-7694" },
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
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
              Restricted Portal
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
              Confidential client materials.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
              This private area is designed for approved clients, investors, and
              partners reviewing sensitive materials, updates, and supporting documents.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:brady@kuikengroup.com"
                className="rounded-full bg-[#1a2230] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
              >
                Contact Brady
              </a>
              <a
                href="/"
                className="rounded-full border border-[#1a2230]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block"
              >
                Main Website
              </a>
            </div>

            <div className="mt-14 grid gap-6 border-t border-black/8 pt-8 md:grid-cols-3">
              {[
                ["Secure Review", "Private content intended only for authorized viewers."],
                ["Curated Materials", "Focused resources, updates, and working documents in one place."],
                ["Direct Access", "Clear path to contact and follow-up without unnecessary friction."],
              ].map(([title, copy]) => (
                <div key={title}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]">
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5c636e]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
            <div className="rounded-[1.5rem] border border-black/6 bg-[#efede8] p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">
                    Access Status
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1a2230]">
                    Approved parties only.
                  </div>
                </div>
                <div className="rounded-full border border-[#1a2230]/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a2230] shadow-sm">
                  Restricted
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Sensitive materials should not be forwarded or distributed.",
                  "Access may be limited to current clients, investors, or invited parties.",
                  "For additional files or support, contact Brady Kuiken directly.",
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
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
                Portal Resources
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                Private materials, organized with restraint.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#59606a]">
              Replace these cards with your actual files, updates, decks, or links as needed.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_10px_35px_rgba(17,24,39,0.05)]"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                  {item.category}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#1a2230]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5a616b]">
                  {item.description}
                </p>

                <a
                  href="mailto:brady@kuikengroup.com"
                  className="mt-6 inline-block rounded-full border border-[#1a2230]/15 bg-[#f7f5f1] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230]"
                >
                  {item.action}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-[2rem] bg-[#1a2230] px-8 py-12 text-white shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#c1ab84]">
                  Direct Contact
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Need an additional document or a secure follow-up?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  For access requests, updated materials, or direct communication,
                  contact Kuiken Group using the details at right.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-white/70">Brady Kuiken</div>
                <div className="text-lg font-medium">President / CEO</div>

                <div className="pt-2 space-y-3">
                  {contacts.map((item) => (
                    <div key={item.label}>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-white/85">{item.value}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:brady@kuikengroup.com"
                  className="mt-3 inline-block rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}