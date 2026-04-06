export default function KuikenGroupHomepageMockup() {
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
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">Private Advisory</div>
              <div className="text-sm font-semibold tracking-[0.22em] text-[#1a2230]">KUIKEN GROUP</div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-[#4a4f57] md:flex">
            <a href="#about" className="transition hover:text-[#1a2230]">About</a>
            <a href="#services" className="transition hover:text-[#1a2230]">Services</a>
            <a href="#approach" className="transition hover:text-[#1a2230]">Approach</a>
            <a href="#contact" className="transition hover:text-[#1a2230]">Contact</a>
          </nav>

          <a
             href="#contact"
            className="rounded-full border border-[#1a2230] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition hover:bg-[#1a2230] hover:text-white inline-block"
          >
            Schedule a Conversation
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
              Strategic Advisory • Capital • Long-Term Value
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
              A restrained, high-trust brand presence for a modern advisory firm.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
              Kuiken Group partners with leaders, investors, and operators who value discretion, clarity, and disciplined execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-[#1a2230] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition hover:opacity-90">
                Start a Conversation
              </a>
              <a href="#services" className="rounded-full border border-[#1a2230]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition hover:border-[#1a2230]">
                View Capabilities
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-black/8 pt-8 md:grid-cols-3">
              {[
                ['Strategic Positioning', 'Focused market and growth strategy for high-value opportunities.'],
                ['Capital Advisory', 'Measured guidance for investment, structure, and long-term alignment.'],
                ['Executive Counsel', 'Clear thinking for pivotal decisions, transactions, and transitions.'],
              ].map(([title, copy]) => (
                <div key={title}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#8f7750]">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-[#5c636e]">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#b89b68]/10 blur-2xl lg:block" />
            <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
              <div className="rounded-[1.5rem] border border-black/6 bg-[#efede8] p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-[#8f7750]">Featured Perspective</div>
                    <div className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1a2230]">
                      Thoughtful structure. Quiet confidence. Lasting trust.
                    </div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1a2230]/10 bg-white shadow-sm overflow-hidden">
                    <img src="/kuiken-logo.png" alt="KG" className="h-8 w-auto object-contain" />
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    'Independent advisory for complex decisions',
                    'Premium positioning with understated design language',
                    'Built to feel institutional, modern, and timeless',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#8f7750]" />
                      <div className="text-sm text-[#414852]">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-black/6 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-8 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">About</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                Built for credibility at first glance.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-base leading-8 text-[#525963]">
                This mockup leans into disciplined spacing, confident typography, and a muted executive palette so the brand feels established without looking dated.
              </p>
              <p className="text-base leading-8 text-[#525963]">
                Every section is intentionally sparse. The site is meant to communicate trust, selectivity, and strategic depth rather than volume or noise.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">Services</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                Clear offers, presented with restraint.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#59606a]">
              Swap these with your actual offers, but keep the structure simple and the wording sharp.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                label: '01',
                title: 'Strategic Advisory',
                copy: 'Executive-level guidance on growth, positioning, partnerships, and high-consequence decisions.',
              },
              {
                label: '02',
                title: 'Investment & Capital Counsel',
                copy: 'Support across capital readiness, investor communication, transaction framing, and long-term alignment.',
              },
              {
                label: '03',
                title: 'Special Situations',
                copy: 'A discreet partner for transitions, restructures, complex initiatives, and critical moments of change.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_10px_35px_rgba(17,24,39,0.05)]">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">{item.label}</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#1a2230]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a616b]">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="border-y border-black/6 bg-[#f1eee8]">
          <div className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">Approach</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                  Designed to feel composed, selective, and deeply capable.
                </h2>
              </div>
              <div className="grid gap-5">
                {[
                  ['Strategic Clarity', 'Concise messaging, disciplined offers, and a brand voice that feels measured rather than promotional.'],
                  ['Visual Restraint', 'Minimal color, sharp spacing, and elegant proportions that read as premium across devices.'],
                  ['Institutional Confidence', 'A structure that helps a smaller firm present with the gravity of an established platform.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[1.75rem] border border-black/6 bg-white px-6 py-6">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2230]">{title}</div>
                    <p className="mt-3 text-sm leading-7 text-[#56606b]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
          <div className="rounded-[2rem] bg-[#1a2230] px-8 py-12 text-white shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#c1ab84]">Contact</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Ready for a more elevated digital presence?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  This section can become your live inquiry area, a founder note, or a high-trust call to action with direct contact information.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-white/70">Brady Kuiken</div>
                <div className="text-lg font-medium">President / CEO</div>

                <form action="https://formspree.io/f/mgoprpew" method="POST" className="space-y-3 pt-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none"
                  />
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>

                <div className="pt-2 text-sm text-white/80">brady@kuikengroup.com</div>
                <div className="text-sm text-white/80">712-541-7694</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
