export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16 lg:px-12 lg:py-20">
      {/* Hero */}
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
            About Kuiken Group
          </div>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
            A private advisory firm built for clarity, trust, and disciplined decision-making.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
            Kuiken Group partners with business owners, investors, and operators on
            strategic decisions involving growth, capital, and complex transitions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-[#1a2230] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
            >
              Request a Conversation
            </a>
            <a
              href="/private"
              className="rounded-full border border-[#1a2230]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block"
            >
              Client Access
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#efede8] p-8">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">
              Positioning
            </div>
            <div className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1a2230]">
              High-trust advisory for moments that matter.
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Selective engagement model",
                "Direct principal involvement",
                "Clear thinking over noise and complexity",
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

      {/* Intro */}
      <section className="mt-20 border-t border-black/6 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
              Our Perspective
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
              Strategic depth without unnecessary noise.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base leading-8 text-[#525963]">
              Kuiken Group operates with a deliberate, high-trust approach. We
              work with a limited number of clients, prioritizing clarity,
              alignment, and long-term value over volume.
            </p>
            <p className="text-base leading-8 text-[#525963]">
              Our role is not to add complexity, but to bring disciplined
              thinking to high-consequence decisions involving growth, capital,
              and transition.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mt-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
              Principles
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
              The way we work reflects the way we advise.
            </h2>
          </div>
          <div className="max-w-xl text-sm leading-7 text-[#59606a]">
            Structured, discreet, and intentionally selective.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              label: "01",
              title: "Clarity",
              copy: "We distill complexity into clear priorities, practical decisions, and aligned next steps.",
            },
            {
              label: "02",
              title: "Discipline",
              copy: "We favor structured thinking, measured judgment, and long-term alignment over reactive momentum.",
            },
            {
              label: "03",
              title: "Trust",
              copy: "High-stakes work requires discretion, consistency, and direct access to principled advice.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_10px_35px_rgba(17,24,39,0.05)]"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                {item.label}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#1a2230]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5a616b]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Work With */}
      <section className="mt-20 border-y border-black/6 bg-[#f1eee8] px-8 py-16 md:px-10 lg:px-12 rounded-[2rem]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
              Who We Work With
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
              Built for owners, investors, and operators navigating consequential decisions.
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              [
                "Business Owners",
                "Strategic support for growth, capital decisions, and periods of transition.",
              ],
              [
                "Investors",
                "Clear perspective on positioning, alignment, and opportunity evaluation.",
              ],
              [
                "Operating Executives",
                "Direct counsel during pivotal moments requiring structure, clarity, and judgment.",
              ],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-black/6 bg-white px-6 py-6"
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2230]">
                  {title}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#56606b]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Leadership */}
      <section className="mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
              Leadership
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
              Direct access to senior judgment.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_10px_35px_rgba(17,24,39,0.05)]">
            <div className="text-lg font-medium text-[#1a2230]">Brady Kuiken</div>
            <div className="mt-1 text-sm uppercase tracking-[0.18em] text-[#8f7750]">
              President / CEO
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-[#5a616b]">
              Kuiken Group is built around a direct, principal-led model. Clients
              work with senior judgment at the point of decision, not layers of
              process or generic advisory noise. The focus remains on clarity,
              discipline, and outcomes that hold up over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="rounded-[2rem] bg-[#1a2230] px-8 py-12 text-white shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#c1ab84]">
                Next Step
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Ready for a more disciplined strategic partner?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Start a conversation with Kuiken Group to discuss your priorities,
                current situation, or next decision point.
              </p>
            </div>

            <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-sm text-white/70">Brady Kuiken</div>
              <div className="text-lg font-medium">President / CEO</div>
              <div className="pt-2 text-sm text-white/80">brady@kuikengroup.com</div>
              <div className="text-sm text-white/80">712-541-7694</div>
              <a
                href="/#contact"
                className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                Request a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}