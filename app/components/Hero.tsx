import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import BackgroundGlow from "./BackgroundGlow";
import Reveal from "./Reveal";

const capabilities = ["Brand Strategy", "Digital Marketing", "Web Design"];

export default function Hero() {
  return (
    <section className="hero-grid relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <BackgroundGlow className="-left-40 top-20 h-[34rem] w-[34rem]" />
      <BackgroundGlow className="-right-32 bottom-0 h-[30rem] w-[30rem] opacity-60" />
      <div aria-hidden="true" className="grain-overlay absolute inset-0 opacity-[0.17]" />

      <div className="relative mx-auto grid w-full max-w-[90rem] gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <div className="mb-7 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C6A972] sm:text-[11px]">
              <span className="h-px w-10 bg-[#C6A972]" />
              Independent creative partner
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-balance text-[clamp(3.75rem,7.75vw,8.25rem)] font-semibold leading-[0.84] tracking-[-0.072em] text-[#E7DCC1]">
              Premium marketing for brands built to grow.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-9 max-w-xl text-sm leading-7 text-[#E7DCC1]/58 sm:text-base sm:leading-8 lg:text-lg">
              Kuiken Group combines strategy, design, and digital execution to help ambitious businesses look sharper, communicate clearly, and turn attention into measurable growth.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>
                Start a Conversation
              </AnimatedButton>
              <AnimatedButton href="#services" variant="secondary">
                Explore Capabilities
              </AnimatedButton>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#E7DCC1]/10 pt-6">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#E7DCC1]/48">
                  <span className="h-1 w-1 rounded-full bg-[#C6A972]" />
                  {capability}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative lg:pl-4">
          <div className="hero-visual relative mx-auto max-w-[42rem]">
            <div className="absolute -inset-8 rounded-full bg-[#C6A972]/8 blur-3xl" />

            <div className="floating-card relative overflow-hidden rounded-[2rem] border border-[#E7DCC1]/12 bg-[#171817]/90 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-[1.45rem] border border-[#E7DCC1]/10 bg-[#0D0D0D]">
                <div className="flex items-center justify-between border-b border-[#E7DCC1]/10 px-5 py-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#E7DCC1]/20" />
                    <span className="h-2 w-2 rounded-full bg-[#E7DCC1]/20" />
                    <span className="h-2 w-2 rounded-full bg-[#C6A972]/70" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.23em] text-[#E7DCC1]/35">kuikengroup.com</span>
                </div>

                <div className="relative min-h-[29rem] overflow-hidden p-6 sm:p-8">
                  <BackgroundGlow className="-right-20 -top-24 h-64 w-64 opacity-70" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.3em] text-[#C6A972]">Featured Perspective</div>
                        <h2 className="mt-5 max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#E7DCC1] sm:text-4xl">
                          Sharper brands. Stronger websites. Smarter growth.
                        </h2>
                      </div>
                      <Image
                        src="/kuiken-logo-white.png"
                        alt="Kuiken Group monogram"
                        width={75}
                        height={63}
                        className="h-12 w-auto opacity-90 sm:h-16"
                      />
                    </div>

                    <div className="mt-10 grid gap-3">
                      {[
                        ["01", "Position the brand with clarity"],
                        ["02", "Design a credible digital presence"],
                        ["03", "Build systems that create action"],
                      ].map(([number, item]) => (
                        <div key={number} className="group flex items-center gap-4 rounded-2xl border border-[#E7DCC1]/10 bg-[#252625]/65 px-4 py-4 transition duration-300 hover:border-[#C6A972]/35 hover:bg-[#2B2C2B]">
                          <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C6A972]">{number}</span>
                          <span className="text-sm text-[#E7DCC1]/72">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/35">Built with restraint</div>
                        <div className="mt-2 text-sm text-[#E7DCC1]/72">Strategy · Identity · Digital</div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A972]/30 text-[#C6A972]">↗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-[#E7DCC1]/10 bg-[#202120]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <div className="text-[9px] uppercase tracking-[0.23em] text-[#C6A972]">Kuiken Group</div>
              <div className="mt-1 text-sm text-[#E7DCC1]/70">Strategy made visible.</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.26em] text-[#E7DCC1]/35 lg:flex">
        <span className="scroll-line h-10 w-px bg-gradient-to-b from-[#C6A972] to-transparent" />
        Scroll to explore
      </div>
    </section>
  );
}
