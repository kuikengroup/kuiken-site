export default function KuikenGroupHomepageMockup() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#16181d] scroll-smooth">

      <main className="[&_section]:animate-in [&_section]:fade-in-0 [&_section]:slide-in-from-bottom-4 [&_section]:duration-700">
        <section className="mx-auto grid max-w-7xl gap-14 px-8 pt-4 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pt-6 lg:pb-28">          <div className="max-w-3xl">
            <div className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#8f7750]">
              Brand Strategy • Digital Marketing • Lead Generation
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#151922] md:text-7xl">
              Premium marketing for brands built to grow.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#515863] md:text-xl">
              Kuiken Group helps businesses sharpen their brand, strengthen their digital presence, and turn attention into measurable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://cal.com/kuikengroup/initial-conversation"
              target="_blank"
              className="rounded-full bg-[#1a2230] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block">
                Start a Conversation
              </a>
              <a href="#services" className="rounded-full border border-[#1a2230]/15 bg-white px-7 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block">
                View Capabilities
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-black/8 pt-8 md:grid-cols-3">
              {[
                ['Brand Strategy', 'Clear positioning, refined messaging, and visual direction that help businesses stand out with confidence.'],
                ['Digital Marketing', 'Campaigns, content, and digital systems designed to attract attention and convert interest into action.'],
                ['Website & Lead Generation', 'Modern websites, landing pages, and conversion-focused funnels built to create real business opportunities.'],
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
                      Sharper brands. Stronger websites. Smarter growth.
                    </div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1a2230]/10 bg-white shadow-sm overflow-hidden">
                    <img src="/kuiken-logo.png" alt="KG" className="h-8 w-auto object-contain" />
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    'Brand systems built for credibility and trust',
                    'Marketing assets designed to convert attention into action',
                    'Clean websites, clear messaging, and stronger digital presence',
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
                Built to help businesses look sharper, communicate clearly, and grow with confidence.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-base leading-8 text-[#525963]">
                Kuiken Group is a marketing firm focused on helping businesses build stronger brands, sharper websites, and clearer paths to growth.
              </p>
              <p className="text-base leading-8 text-[#525963]">
                We combine strategy, design, content, and execution to help companies look more credible, communicate more clearly, and generate better opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-8 py-20 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">Services</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#151922] md:text-4xl">
                Marketing services built around clarity, credibility, and growth.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#59606a]">
              A focused set of services designed to help businesses improve their brand, digital presence, and lead generation.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                label: '01',
                title: 'Brand Strategy',
                copy: 'Clear positioning, refined messaging, and visual direction that help businesses stand out with confidence.',
              },
              {
                label: '02',
                title: 'Digital Marketing',
                copy: 'Campaigns, content, and digital systems designed to attract attention and convert interest into action.',
              },
              {
                label: '03',
                title: 'Websites & Lead Generation',
                copy: 'Modern websites, landing pages, and conversion-focused funnels built to create real business opportunities.',
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
                  Designed to turn attention into trust, and trust into action.
                </h2>
              </div>
              <div className="grid gap-5">
                {[
                  ['Brand Clarity', 'We define the message, positioning, and visual direction needed to make a business feel credible and distinct.'],
                  ['Digital Execution', 'We turn strategy into websites, campaigns, content, and systems that create visibility and momentum.'],
                  ['Growth Focus', 'Every asset is built with a purpose: to help the business attract attention, earn trust, and convert interest.'],
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

        <section id="contact" className="mx-auto max-w-7xl px-8 pt-12 pb-20 lg:px-12 lg:pt-16">
          <div className="rounded-[2rem] bg-[#1a2230] px-8 py-12 text-white shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#c1ab84]">
                  Contact
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Ready to build a stronger brand and digital presence?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                  Start a conversation with Kuiken Group to discuss your brand, website, marketing goals, or growth priorities.
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
                    placeholder="Briefly describe your situation or objective"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
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
