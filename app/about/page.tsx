import type { Metadata } from "next";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";
import CTA from "../components/sections/CTA";
import Container from "../components/layout/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { createMetadata } from "../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Meet Kuiken Group, a principal-led marketing firm helping ambitious businesses build sharper brands, websites, and growth systems.",
  path: "/about",
});

const capabilities = [
  ["01", "Position", "Brand strategy and messaging that clarify what makes the business valuable and why the right audience should care."],
  ["02", "Express", "Identity and creative direction that turn the strategy into a recognizable, credible visual system."],
  ["03", "Build", "Websites and digital experiences designed to make the offer clear, the business trustworthy, and action easy."],
  ["04", "Grow", "Digital marketing and lead-generation systems that create consistent, measurable momentum."],
];

const principles = [
  ["Design through reduction", "The visual system should remove doubt, strengthen hierarchy, and make the central idea easier to recognize—not decorate around it."],
  ["Marketing that earns attention", "The strongest marketing connects a useful message, a credible experience, and a clear next step instead of relying on more noise."],
  ["Direct collaboration", "Brady stays close to the work throughout the engagement, from the first strategic question to the final review."],
  ["Built beyond launch", "A finished system should remain useful as the business, audience, channels, and opportunities continue to evolve."],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <section className="relative isolate overflow-hidden border-b border-[#E7DCC1]/10 pt-36 sm:pt-44 lg:pt-52">
        <div className="absolute -right-48 top-20 h-[34rem] w-[34rem] rounded-full bg-[#C6A972]/8 blur-[120px]" />
        <Container className="relative pb-28 sm:pb-36 lg:pb-48">
          <Reveal>
            <div className="section-label">About Kuiken Group</div>
          </Reveal>
          <Reveal stagger={1}>
            <h1 className="mt-8 max-w-[82rem] text-balance text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
              A sharper point of view for brands ready to grow.
            </h1>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-[#E7DCC1]/10 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <Reveal stagger={2}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#E7DCC1]/60">
                Independent · Principal-led · Midwest based
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <p className="max-w-3xl text-balance text-xl leading-[1.45] tracking-[-0.02em] text-[#E7DCC1]/68 sm:text-2xl lg:text-3xl">
                Kuiken Group brings strategy, identity, web, and marketing into one focused partnership—helping ambitious businesses communicate their value with more confidence.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="From business ambition to a brand people understand."
              copy="The work connects strategic thinking with polished execution, so every touchpoint reinforces the same position."
              align="split"
            />
          </Reveal>
          <div className="mt-20 border-t border-[#E7DCC1]/10 lg:mt-28">
            {capabilities.map(([number, title, copy], index) => (
              <Reveal key={title} stagger={index}>
                <article className="grid gap-6 border-b border-[#E7DCC1]/10 py-10 sm:py-12 lg:grid-cols-[0.22fr_0.58fr_1.2fr] lg:items-center">
                  <span className="text-[10px] tracking-[0.25em] text-[#C6A972]">{number}</span>
                  <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{title}</h2>
                  <p className="max-w-xl text-sm leading-7 text-[#E7DCC1]/64 lg:justify-self-end">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40 lg:py-56">
        <Container>
          <div className="grid gap-20 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
            <Reveal>
              <div className="image-reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 bg-[#171817]">
                <Image
                  src="/work/kuiken-identity-logo-v3.jpg"
                  alt="Kuiken Group identity materials with the KG logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/55 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/60">
                  Strategy made visible
                </div>
              </div>
            </Reveal>
            <Reveal stagger={1}>
              <div>
                <div className="section-label">Why the firm exists</div>
                <h2 className="mt-7 max-w-4xl text-balance text-[clamp(3.25rem,6vw,6.75rem)] font-semibold leading-[0.89] tracking-[-0.065em]">
                  Good businesses are often better than their brands make them appear.
                </h2>
                <div className="mt-10 grid gap-8 border-t border-[#E7DCC1]/10 pt-8 sm:grid-cols-2">
                  <p className="text-sm leading-8 text-[#E7DCC1]/64">
                    Kuiken Group exists to close that gap. Clearer positioning and considered design help the right people recognize a business&apos;s value before the first conversation.
                  </p>
                  <p className="text-sm leading-8 text-[#E7DCC1]/64">
                    The goal is not to make a business look fashionable. It is to build a credible, useful system that supports where the business is going next.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div>
                <div className="section-label">Principal-led</div>
                <p className="mt-7 max-w-sm text-sm leading-7 text-[#E7DCC1]/64">
                  One point of contact, direct accountability, and senior attention throughout the work.
                </p>
              </div>
            </Reveal>
            <Reveal stagger={1}>
              <div>
                <h2 className="text-balance text-[clamp(3.25rem,6.2vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  Clients work directly with Brady Kuiken.
                </h2>
                <p className="mt-9 max-w-2xl text-base leading-8 text-[#E7DCC1]/58">
                  Kuiken Group is intentionally structured around direct collaboration. Brady leads the strategy, creative direction, and client relationship, bringing in specialized support only when the work requires it. That keeps communication clear and the original thinking intact from brief to launch.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <div>
                    <div className="text-lg font-semibold">Brady Kuiken</div>
                    <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#C6A972]">Founder · President / CEO</div>
                  </div>
                  <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external variant="secondary">
                    Start a Conversation
                  </AnimatedButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36 lg:py-48">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Core principles" title="The standard behind the work." />
          </Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 bg-[#E7DCC1]/10 md:grid-cols-2">
            {principles.map(([title, copy], index) => (
              <Reveal key={title} stagger={index} className="h-full">
                <article className="h-full min-h-72 bg-[#151615] p-8 sm:p-10">
                  <span className="text-[10px] tracking-[0.25em] text-[#C6A972]">0{index + 1}</span>
                  <h3 className="mt-20 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[#E7DCC1]/64">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeading eyebrow="Who we work with" title="Ambitious businesses at a point of change." />
          </Reveal>
          <Reveal stagger={1}>
            <div className="grid gap-4">
              {[
                ["Growing service businesses", "Ready to move beyond an improvised identity and compete with more established brands."],
                ["Founder-led companies", "Looking for a direct creative partner who understands both the business and the brand."],
                ["Established organizations", "Launching something new, repositioning an offer, or modernizing an outdated digital presence."],
              ].map(([title, copy]) => (
                <article key={title} className="rounded-[1.5rem] border border-[#E7DCC1]/10 bg-[#171817] p-7 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#E7DCC1]/64">{copy}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </div>
  );
}
