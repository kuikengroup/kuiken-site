export default function PrivatePage() {
  const resources = [
    {
      type: "Website",
      title: "Website Assets",
      description:
        "Current website files, brand resources, and design materials.",
      status: "Active",
      href: "#",
      action: "Open Assets",
      preview:
        "Brand guidelines, logos, graphics, and website deliverables.",
    },
    {
      type: "Campaign",
      title: "Marketing Campaigns",
      description:
        "Current advertising, social media, and campaign performance updates.",
      status: "Current",
      href: "#",
      action: "View Campaigns",
      preview:
        "Campaign summaries, analytics, creative assets, and performance reports.",
    },
    {
      type: "Documents",
      title: "Project Documents",
      description:
        "Meeting notes, project plans, proposals, and shared files.",
      status: "Available",
      href: "#",
      action: "Open Documents",
      preview:
        "Project timelines, deliverables, approvals, and supporting resources.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E7DCC1]">
      <main className="mx-auto max-w-7xl px-8 py-14 lg:px-12 lg:py-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
              Client Resource Center
            </div>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#E7DCC1] md:text-7xl">
              Welcome to your client workspace.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#E7DCC1]/70 md:text-xl">
              Access project resources, marketing assets, website materials,
              campaign updates, and shared documents in one secure location.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#resources"
                className="rounded-full bg-[#C6A972] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#0D0D0D] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
              >
                Enter Workspace
              </a>
              <a
                href="mailto:brady@kuikengroup.com"
                className="rounded-full border border-[#C6A972]/35 bg-transparent px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#E7DCC1] transition duration-200 hover:-translate-y-0.5 hover:border-[#C6A972] hover:text-[#C6A972] inline-block"
              >
                Contact Brady
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-[#E7DCC1]/10 pt-8 md:grid-cols-3">
              {[
                [
                  "Project Access",
                  "A central space for marketing assets, updates, and project materials.",
                ],
                [
                  "Organized Resources",
                  "Campaign files, brand assets, website materials, and shared documents.",
                ],
                [
                  "Direct Follow-Up",
                  "Fast path for requests, questions, approvals, and additional files.",
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
                    Workspace Status
                  </div>
                  <div className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#E7DCC1]">
                    Secure marketing resource center.
                  </div>
                </div>

                <div className="rounded-full border border-[#C6A972]/35 bg-[#252625] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#C6A972]">
                  Secure
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Resources are intended only for approved clients and collaborators.",
                  "Shared assets should not be forwarded or redistributed without approval.",
                  "Updated files and deliverables can be requested directly from Kuiken Group.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#E7DCC1]/10 bg-[#252625] px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[#C6A972]" />
                    <div className="text-sm text-[#E7DCC1]/75">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#E7DCC1]/10 bg-[#252625] px-5 py-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#C6A972]">
                  Direct Contact
                </div>
                <div className="mt-3 text-lg font-medium text-[#E7DCC1]">
                  Brady Kuiken
                </div>
                <div className="mt-1 text-sm text-[#E7DCC1]/65">
                  President / CEO
                </div>
                <div className="mt-4 text-sm text-[#E7DCC1]/75">
                  brady@kuikengroup.com
                </div>
                <div className="text-sm text-[#E7DCC1]/75">712-541-7694</div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="mt-14">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#C6A972]">
                Client Resources
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#E7DCC1] md:text-4xl">
                Marketing assets, project updates, and shared resources.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#E7DCC1]/65">
              Each item below can link directly to a Google Drive folder, PDF,
              campaign report, website preview, or shared client destination.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#E7DCC1]/10 bg-[#252625] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.28)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#C6A972]">
                    {item.type}
                  </div>
                  <div className="rounded-full bg-[#0D0D0D] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#C6A972] border border-[#C6A972]/25">
                    {item.status}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#E7DCC1]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#E7DCC1]/65">
                  {item.description}
                </p>

                <div className="mt-6 rounded-2xl border border-[#E7DCC1]/10 bg-[#0D0D0D] p-5">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#C6A972]">
                    Preview
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#E7DCC1]/65">
                    {item.preview}
                  </p>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-full border border-[#C6A972]/35 bg-transparent px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#E7DCC1] transition duration-200 hover:-translate-y-0.5 hover:border-[#C6A972] hover:text-[#C6A972]"
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