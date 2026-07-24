import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../../components/AnimatedButton";
import Container from "../../components/layout/Container";
import Reveal from "../../components/Reveal";
import CaseStudySummary from "../../components/sections/CaseStudySummary";
import { getProject } from "../../data/projects";
import { createMetadata } from "../../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Lawn Fadez Case Study",
  description:
    "How Kuiken Group developed a sharper brand identity and digital experience for Lawn Fadez.",
  path: "/work/lawn-fadez",
  image: {
    url: "/work/lawn-fadez-homepage-v2.jpg",
    width: 1586,
    height: 992,
    alt: "Lawn Fadez website design",
  },
});

function CaseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="case-copy-grid border-t border-[#E7DCC1]/10 py-20 sm:py-28 lg:py-36">
      <Reveal>
        <div className="section-label">{eyebrow}</div>
      </Reveal>
      <Reveal delay={80}>
        <div>
          <h2 className="max-w-4xl text-balance text-[clamp(2.75rem,5.5vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.06em]">{title}</h2>
          <div className="case-prose mt-8 max-w-2xl text-base leading-8 text-[#E7DCC1]/64">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

export default function LawnFadezCaseStudy() {
  const project = getProject("lawn-fadez");
  const nextProject = getProject("kuiken-group");

  return (
    <article className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <header className="pt-36 sm:pt-44 lg:pt-52">
        <Container>
          <Reveal>
            <Link href="/work" className="premium-focus inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A972]">
              <span>←</span> All work
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <Reveal delay={60}>
              <div>
                <div className="section-label">Lawn Fadez · Case study</div>
                <h1 className="mt-7 max-w-6xl text-balance text-[clamp(4rem,8.5vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                  Clean lines. Fresh lawns.
                </h1>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">
                A sharper brand and digital presence for a local lawn-care business built around dependable work, precise finishes, and neighborhood trust.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="mt-16 grid gap-8 border-t border-[#E7DCC1]/10 py-8 sm:grid-cols-3 lg:mt-24">
              <div><span className="case-meta-label">Client</span><p>Lawn Fadez</p></div>
              <div><span className="case-meta-label">Market</span><p>Le Mars, Iowa</p></div>
              <div><span className="case-meta-label">Focus</span><p>Brand · Web · Growth</p></div>
            </div>
          </Reveal>
        </Container>
      </header>

      <Reveal>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#14231a] lg:aspect-[16/8]">
          <Image
            src="/work/lawn-fadez-homepage-v2.jpg"
            alt="Lawn Fadez website homepage with a striped residential lawn"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Container>
        <CaseStudySummary project={project} />

        <CaseSection eyebrow="The challenge" title="Professional without losing the local character.">
          <p>
            Lawn care is crowded with interchangeable visuals and broad promises. Lawn Fadez needed to look credible enough to earn trust while keeping the approachable, energetic personality that made the name memorable.
          </p>
          <p>
            The site also needed to answer practical questions quickly: what the team does, where it works, and how a potential customer can request a quote.
          </p>
        </CaseSection>

        <CaseSection eyebrow="The strategy" title="Own the idea of a sharper finish.">
          <p>
            The positioning connects the name “Fadez” to the visual precision of a freshly striped lawn. That gave the brand a simple organizing idea: clean lines, reliable service, and a result that feels noticeably finished.
          </p>
          <p>
            Messaging stays concise and concrete, avoiding generic claims in favor of a direct promise customers can immediately picture.
          </p>
        </CaseSection>
      </Container>

      <section className="bg-[#111A14] py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 sm:min-h-[42rem]">
                <Image
                  src="/work/lawn-fadez-homepage-v2.jpg"
                  alt="Detail of the Lawn Fadez website typography and lawn photography"
                  fill
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  className="object-cover object-left"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10">
                  <Image src="/work/lawn-fadez-homepage-v2.jpg" alt="Lawn Fadez landscape photography detail" fill sizes="(max-width: 1024px) 50vw, 32vw" className="scale-125 object-cover object-right" />
                </div>
                <div className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-[#D8EFAE]/20 bg-[#D8EFAE] p-8 text-[#102016]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em]">Identity direction</span>
                  <div>
                    <p className="text-4xl font-semibold leading-[0.92] tracking-[-0.055em]">Precise.<br />Fresh.<br />Local.</p>
                    <div className="mt-7 flex gap-2"><span className="h-7 w-7 rounded-full bg-[#102016]" /><span className="h-7 w-7 rounded-full bg-[#315E38]" /><span className="h-7 w-7 rounded-full border border-[#102016]/20 bg-[#F4EFE0]" /></div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <CaseSection eyebrow="Identity direction" title="A visual system rooted in the work itself.">
          <p>
            Deep green creates an immediate connection to the category without relying on bright, familiar lawn-service colors. Warm cream keeps the system approachable, while the sharper typographic scale gives the business more presence.
          </p>
          <p>
            Repeated lines and directional crops reference mower stripes subtly, giving the identity a recognizable behavior beyond the logo.
          </p>
        </CaseSection>

        <CaseSection eyebrow="Website experience" title="Built to move from interest to quote request.">
          <p>
            The website leads with the central promise, then organizes services and proof in a direct sequence. Clear hierarchy and restrained interactions make the experience feel polished without slowing down a customer who simply wants to understand the offer.
          </p>
          <p>
            Responsive layouts keep the headline, imagery, and calls to action legible on smaller screens, where many local-service searches begin.
          </p>
        </CaseSection>

        <CaseSection eyebrow="The outcome" title="A more credible foundation for local growth.">
          <p>
            The finished direction gives Lawn Fadez a distinct, consistent way to present the business across its website and future marketing. The offer is clearer, the identity is more recognizable, and the path to requesting work is easier to follow.
          </p>
          <p>
            The system was designed to support future campaigns and additional service content without losing the simplicity that makes the brand effective.
          </p>
        </CaseSection>
      </Container>

      <nav aria-label="Next project" className="border-y border-[#E7DCC1]/10 bg-[#111211]">
        <Container className="py-16 sm:py-20">
          <Link href={nextProject.caseStudyHref!} className="premium-focus group grid gap-6 rounded-[1.5rem] py-3 lg:grid-cols-[0.4fr_1.3fr_0.3fr] lg:items-center">
            <span className="section-label">Next project</span>
            <span className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{nextProject.title}</span>
            <span className="text-2xl text-[#C6A972] transition-transform duration-300 group-hover:translate-x-2 lg:justify-self-end">→</span>
          </Link>
        </Container>
      </nav>

      <section className="py-28 sm:py-36 lg:py-44">
        <Container className="text-center">
          <Reveal>
            <div className="section-label">Have a similar challenge?</div>
            <h2 className="mx-auto mt-7 max-w-5xl text-balance text-[clamp(3.25rem,7vw,7.25rem)] font-semibold leading-[0.88] tracking-[-0.067em]">Let&apos;s make the value easier to see.</h2>
            <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external className="mt-10">Start a Conversation</AnimatedButton>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
