import AnimatedButton from "./AnimatedButton";
import Reveal from "./Reveal";

export default function HomeShell() {
  return (
    <>
      <section id="about" className="border-b border-[#E7DCC1]/10 bg-[#111211]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-28">
          <Reveal>
            <div className="section-label">The standard</div>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-5xl text-balance text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-[#E7DCC1] sm:text-4xl lg:text-5xl">
              We make growing businesses feel established—through clear positioning, considered design, and digital experiences that earn trust before the first conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden border-b border-[#E7DCC1]/10">
        <div className="mx-auto max-w-[90rem] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <Reveal>
              <div>
                <div className="section-label">Capabilities</div>
                <h2 className="section-title mt-5 max-w-xl">Built to sharpen every part of your presence.</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-8 text-[#E7DCC1]/60 lg:justify-self-end">
                A focused mix of strategic thinking and polished execution—built to help your business communicate with more confidence at every touchpoint.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#E7DCC1]/10 lg:grid-cols-3">
            {[
              ["01", "Brand Strategy", "Positioning, messaging, and identity systems that make the business feel clear and credible."],
              ["02", "Digital Marketing", "Campaigns and content designed to build attention, trust, and consistent demand."],
              ["03", "Web Design", "High-performing digital experiences that turn brand value into real business action."],
            ].map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 90} className="h-full">
                <article className="premium-panel group h-full min-h-72 bg-[#171817] p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]">{number}</span>
                    <span className="text-[#E7DCC1]/25 transition duration-300 group-hover:rotate-45 group-hover:text-[#C6A972]">↗</span>
                  </div>
                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em] text-[#E7DCC1]">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#E7DCC1]/56">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-b border-[#E7DCC1]/10 bg-[#111211]">
        <div className="mx-auto max-w-[90rem] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="section-label">Our approach</div>
            <h2 className="section-title mt-5 max-w-4xl">Clarity first. Design with purpose. Execution built around growth.</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <AnimatedButton href="#contact" variant="secondary">Continue to Contact</AnimatedButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 bg-[#1A1B1A] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#C6A972]/10 blur-[90px]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <div className="section-label">Start a conversation</div>
                  <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#E7DCC1] sm:text-5xl lg:text-6xl">
                    Ready to make your business look as capable as it is?
                  </h2>
                </div>
                <div className="lg:justify-self-end">
                  <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>
                    Schedule a Conversation
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
