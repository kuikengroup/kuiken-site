import type { Metadata } from "next";
import Link from "next/link";
import AnimatedButton from "../components/AnimatedButton";
import Container from "../components/layout/Container";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kuiken Group capabilities across brand strategy, identity, website design and development, digital marketing, lead generation, and creative direction.",
  openGraph: {
    title: "Services | Kuiken Group",
    description:
      "Principal-led strategy, identity, website, and marketing services for ambitious businesses.",
    images: [
      {
        url: "/work/kuiken-identity-logo-v3.jpg",
        width: 1448,
        height: 1086,
        alt: "Kuiken Group identity system",
      },
    ],
  },
};

const services = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    problem: "The business has real value, but its position, audience, offer, or message is difficult to explain consistently.",
    approach: "Kuiken Group clarifies what the business should stand for, who it needs to matter to, and the central idea that should organize future communication.",
    deliverables: ["Positioning direction", "Audience priorities", "Competitive context", "Message hierarchy", "Offer framing", "Brand narrative"],
    outcome: "A sharper strategic foundation that makes later identity, website, and marketing decisions easier to evaluate.",
  },
  {
    id: "brand-identity",
    number: "02",
    title: "Brand Identity",
    problem: "The current visual identity feels improvised, inconsistent, or less credible than the business it represents.",
    approach: "The strategy is translated into a practical visual system with enough distinction to be recognized and enough flexibility to work across real business touchpoints.",
    deliverables: ["Logo direction", "Typography system", "Color palette", "Visual language", "Core applications", "Usage guidance"],
    outcome: "A coherent identity that helps the business look established, communicate consistently, and grow without visual drift.",
  },
  {
    id: "web-design",
    number: "03",
    title: "Website Design & Development",
    problem: "The website looks outdated, makes the offer difficult to understand, or fails to create a clear path toward action.",
    approach: "Kuiken Group combines content hierarchy, interface design, and production-ready development into one focused digital experience.",
    deliverables: ["Site strategy", "Content architecture", "UX and interface design", "Responsive development", "CMS-ready structure", "Launch support"],
    outcome: "A faster, clearer, and more credible website designed around how prospects evaluate the business.",
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    problem: "Marketing activity is inconsistent, disconnected from the brand, or difficult to sustain across channels.",
    approach: "Campaign direction, channel priorities, and creative systems are aligned around a specific audience and business objective.",
    deliverables: ["Campaign strategy", "Channel planning", "Content direction", "Creative concepts", "Landing-page direction", "Performance review structure"],
    outcome: "More consistent marketing with a clearer role for every campaign, channel, and piece of creative.",
  },
  {
    id: "lead-generation",
    number: "05",
    title: "Lead Generation",
    problem: "Attention is not becoming enough qualified conversations, quote requests, or sales opportunities.",
    approach: "Kuiken Group examines the offer, audience, acquisition path, landing experience, and follow-up logic as one connected conversion system.",
    deliverables: ["Offer refinement", "Audience and channel direction", "Campaign landing pages", "Conversion-path review", "Form and CTA strategy", "Testing priorities"],
    outcome: "A clearer path from discovery to inquiry, built to improve lead quality and support measured refinement over time.",
  },
  {
    id: "creative-direction",
    number: "06",
    title: "Creative Direction",
    problem: "Internal teams or outside partners are producing work, but the output lacks a consistent standard or unifying idea.",
    approach: "Kuiken Group defines the visual and conceptual direction, then provides the judgment needed to keep execution aligned across contributors and channels.",
    deliverables: ["Campaign concepts", "Art direction", "Design systems", "Creative briefs", "Partner guidance", "Quality review"],
    outcome: "A stronger creative standard and more consistent execution without requiring every deliverable to come from the same production source.",
  },
];

const combinations = [
  ["Foundation", "Brand Strategy + Brand Identity", "For businesses that need to clarify their position and build a credible system around it."],
  ["Digital flagship", "Brand Strategy + Website", "For businesses whose offer is strong but whose digital presence is creating doubt or confusion."],
  ["Growth system", "Digital Marketing + Lead Generation", "For businesses ready to turn a clear offer and credible brand into more consistent demand."],
  ["Full platform", "Strategy + Identity + Website + Marketing", "For substantial repositioning, launches, or periods when every major touchpoint needs to align."],
];

const faqs = [
  ["Do we need to hire Kuiken Group for every service?", "No. Engagements are shaped around the actual constraint. Some businesses need positioning before anything else; others already have a sound identity and need a better website or acquisition path."],
  ["Can Kuiken Group work with an existing internal team or specialist?", "Yes. Kuiken Group can lead strategy and creative direction while collaborating with internal marketers, developers, photographers, media partners, or other specialists."],
  ["What does principal-led mean in practice?", "Brady Kuiken remains directly involved in discovery, strategy, creative direction, communication, and key reviews. Specialized support may be brought in when the scope requires it, without adding unnecessary account layers."],
  ["How does an engagement begin?", "It begins with a focused conversation about the business goal, what is currently getting in the way, and what would need to be true for the work to be valuable."],
  ["Can services be phased?", "Yes. Strategy, identity, website, and marketing can be sequenced into practical phases when that creates better decisions, cleaner implementation, or a more responsible investment."],
  ["Do you guarantee specific marketing results?", "No credible partner can guarantee outcomes without context. Kuiken Group builds clearer systems, defines what should be measured, and refines the work using available evidence."],
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <header className="relative isolate overflow-hidden border-b border-[#E7DCC1]/10 pt-36 sm:pt-44 lg:pt-52">
        <div className="absolute -right-40 top-28 h-[34rem] w-[34rem] rounded-full bg-[#C6A972]/8 blur-[120px]" />
        <Container className="relative pb-28 sm:pb-36 lg:pb-48">
          <Reveal><div className="section-label">Capabilities</div></Reveal>
          <Reveal delay={70}>
            <h1 className="mt-8 max-w-[86rem] text-balance text-[clamp(4rem,9.5vw,10rem)] font-semibold leading-[0.81] tracking-[-0.08em]">
              The right expertise, connected around one goal.
            </h1>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-[#E7DCC1]/10 pt-8 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal delay={120}>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/34">Position · Express · Build · Grow</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-3xl text-balance text-xl leading-[1.45] tracking-[-0.02em] text-[#E7DCC1]/64 sm:text-2xl lg:text-3xl">
                Kuiken Group combines strategy, design, development, and marketing when the work benefits from one clear point of view.
              </p>
            </Reveal>
          </div>
        </Container>
      </header>

      <section className="border-b border-[#E7DCC1]/10 bg-[#111211] py-20 sm:py-24">
        <Container>
          <Reveal>
            <nav aria-label="Service page sections" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`#${service.id}`}
                  className="premium-focus group flex min-h-14 items-center justify-between border-b border-[#E7DCC1]/10 py-4 text-[10px] uppercase tracking-[0.18em] text-[#E7DCC1]/56"
                >
                  <span>{service.title}</span>
                  <span className="text-[#C6A972] transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </Link>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      <Container>
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-[#E7DCC1]/10 py-24 sm:py-32 lg:py-44"
          >
            <div className="grid gap-14 lg:grid-cols-[0.58fr_1.42fr]">
              <Reveal>
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">{service.number}</div>
                  <h2 className="mt-7 max-w-xl text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[0.88] tracking-[-0.065em]">{service.title}</h2>
                  <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-[#C6A972]/60 to-transparent lg:block" />
                </div>
              </Reveal>

              <div>
                <Reveal delay={60}>
                  <div className="border-t border-[#E7DCC1]/10 pt-7">
                    <div className="case-meta-label">The business problem</div>
                    <p className="max-w-3xl text-balance text-2xl leading-[1.3] tracking-[-0.03em] text-[#E7DCC1]/76 sm:text-3xl">{service.problem}</p>
                  </div>
                </Reveal>
                <Reveal delay={90}>
                  <div className="mt-14 grid gap-10 sm:grid-cols-2">
                    <div>
                      <div className="case-meta-label">What Kuiken Group does</div>
                      <p className="text-sm leading-8 text-[#E7DCC1]/52">{service.approach}</p>
                    </div>
                    <div>
                      <div className="case-meta-label">Intended outcome</div>
                      <p className="text-sm leading-8 text-[#E7DCC1]/52">{service.outcome}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-14">
                    <div className="case-meta-label">Typical deliverables</div>
                    <ul className="mt-5 grid sm:grid-cols-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverable} className="flex min-h-14 items-center gap-4 border-b border-[#E7DCC1]/10 py-4 text-sm text-[#E7DCC1]/62 sm:odd:mr-6 sm:even:ml-6">
                          <span className="text-[9px] text-[#C6A972]">{String(deliverableIndex + 1).padStart(2, "0")}</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </Container>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
              <div>
                <div className="section-label">How services combine</div>
                <p className="mt-6 max-w-sm text-sm leading-7 text-[#E7DCC1]/46">The scope follows the business constraint. These are common combinations, not fixed packages.</p>
              </div>
              <h2 className="text-balance text-[clamp(3rem,6.5vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.065em]">One problem may cross several disciplines.</h2>
            </div>
          </Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 bg-[#E7DCC1]/10 md:grid-cols-2 lg:mt-28">
            {combinations.map(([label, title, copy], index) => (
              <Reveal key={label} delay={index * 55} className="h-full">
                <article className="flex h-full min-h-80 flex-col bg-[#151615] p-8 sm:p-10">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#C6A972]">{label}</span>
                  <div className="mt-auto pt-20">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[#E7DCC1]/48">{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36 lg:py-48">
        <Container className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <div className="section-label">Best suited for</div>
              <h2 className="mt-7 max-w-3xl text-balance text-[clamp(3rem,5.6vw,5.75rem)] font-semibold leading-[0.91] tracking-[-0.063em]">Businesses with something real to build on.</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-t border-[#E7DCC1]/10">
              {[
                ["A point of change", "The business is launching, repositioning, expanding, or outgrowing an improvised brand."],
                ["A credibility gap", "The quality of the business is stronger than the way it currently presents itself."],
                ["A disconnected system", "Brand, website, and marketing are moving in different directions without a clear organizing idea."],
                ["A need for direct leadership", "The work needs an accountable creative partner—not another layer between the decision and the execution."],
              ].map(([title, copy], index) => (
                <div key={title} className="grid gap-5 border-b border-[#E7DCC1]/10 py-8 sm:grid-cols-[0.16fr_0.6fr_1fr] sm:items-start">
                  <span className="text-[9px] text-[#C6A972]">0{index + 1}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="text-sm leading-7 text-[#E7DCC1]/48">{copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr]">
          <Reveal>
            <div>
              <div className="section-label">Working model</div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#E7DCC1]/46">Direct access, clear accountability, and specialist support only when the work calls for it.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h2 className="max-w-5xl text-balance text-[clamp(3.25rem,6.4vw,6.75rem)] font-semibold leading-[0.89] tracking-[-0.067em]">Principal-led from the first question to the final review.</h2>
              <p className="mt-9 max-w-2xl text-base leading-8 text-[#E7DCC1]/54">
                Clients work directly with Brady Kuiken throughout the engagement. Strategy, creative direction, and communication stay close to the person accountable for the result. When specialized production support is useful, it is brought into a clear system rather than added as unnecessary agency overhead.
              </p>
              <AnimatedButton href="/about" variant="secondary" className="mt-10">About the firm</AnimatedButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="process" className="scroll-mt-28 py-28 sm:py-36 lg:py-48">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
              <div className="section-label">Process overview</div>
              <h2 className="text-balance text-[clamp(3rem,6.5vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.065em]">Clarity before production.</h2>
            </div>
          </Reveal>
          <div className="mt-20 border-t border-[#E7DCC1]/10 lg:mt-28">
            {[
              ["01", "Discover", "Understand the business goal, audience, constraints, and the perception the work needs to create."],
              ["02", "Define", "Align the position, message, scope, and creative direction before expensive execution begins."],
              ["03", "Design", "Build the identity, experience, campaign, or system with deliberate review points."],
              ["04", "Deliver", "Launch cleanly, document what matters, and identify the next useful refinement."],
            ].map(([number, title, copy]) => (
              <Reveal key={title}>
                <article className="grid gap-6 border-b border-[#E7DCC1]/10 py-9 sm:py-11 lg:grid-cols-[0.2fr_0.7fr_1.1fr] lg:items-center">
                  <span className="text-[10px] tracking-[0.25em] text-[#C6A972]">{number}</span>
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-[#E7DCC1]/48 lg:justify-self-end">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48">
        <Container className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr]">
          <Reveal>
            <div>
              <div className="section-label">Frequently asked</div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#E7DCC1]/46">Useful answers before the first conversation.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border-t border-[#E7DCC1]/10">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group border-b border-[#E7DCC1]/10">
                  <summary className="premium-focus flex min-h-20 cursor-pointer list-none items-center justify-between gap-8 py-6 text-lg font-semibold tracking-[-0.025em] marker:content-none">
                    {question}
                    <span aria-hidden="true" className="text-[#C6A972] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pb-7 pr-10 text-sm leading-8 text-[#E7DCC1]/52">{answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-[#C6A972]/20 bg-[linear-gradient(135deg,#171817,#242116)] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <div className="section-label">Start with the constraint</div>
                  <h2 className="mt-7 max-w-5xl text-balance text-[clamp(3.25rem,6.7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.067em]">You do not need to know which service to ask for.</h2>
                </div>
                <div className="lg:justify-self-end">
                  <p className="mb-7 max-w-sm text-sm leading-7 text-[#E7DCC1]/52">Describe what feels unclear, outdated, disconnected, or harder to grow than it should be. The right scope can follow from there.</p>
                  <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>Start a conversation</AnimatedButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
