import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/layout/Container";
import Reveal from "../../components/Reveal";
import CaseStudyGallery from "../../components/sections/CaseStudyGallery";
import CaseStudySummary from "../../components/sections/CaseStudySummary";
import ConversionCTA from "../../components/sections/ConversionCTA";
import EditorialChapter from "../../components/sections/EditorialChapter";
import NextProject from "../../components/sections/NextProject";
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
            <Reveal stagger={1}>
              <div>
                <div className="section-label">Lawn Fadez · Case study</div>
                <h1 className="mt-7 max-w-6xl text-balance text-[clamp(4rem,8.5vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                  Clean lines. Fresh lawns.
                </h1>
              </div>
            </Reveal>
            <Reveal stagger={2}>
              <p className="max-w-xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">
                A sharper brand and digital presence for a local lawn-care business built around dependable work, precise finishes, and neighborhood trust.
              </p>
            </Reveal>
          </div>
          <Reveal stagger={3}>
            <div className="mt-16 grid gap-8 border-t border-[#E7DCC1]/10 py-8 sm:grid-cols-3 lg:mt-24">
              <div><span className="case-meta-label">Client</span><p>Lawn Fadez</p></div>
              <div><span className="case-meta-label">Market</span><p>Le Mars, Iowa</p></div>
              <div><span className="case-meta-label">Focus</span><p>Brand · Web · Growth</p></div>
            </div>
          </Reveal>
        </Container>
      </header>

      <Reveal>
        <div className="image-reveal relative aspect-[16/10] w-full overflow-hidden bg-[#14231a] lg:aspect-[16/8]">
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

        <EditorialChapter eyebrow="The challenge" title="Professional without losing the local character.">
          <p>
            Lawn care is crowded with interchangeable visuals and broad promises. Lawn Fadez needed to look credible enough to earn trust while keeping the approachable, energetic personality that made the name memorable.
          </p>
          <p>
            The site also needed to answer practical questions quickly: what the team does, where it works, and how a potential customer can request a quote.
          </p>
        </EditorialChapter>

        <EditorialChapter eyebrow="The strategy" title="Own the idea of a sharper finish.">
          <p>
            The positioning connects the name “Fadez” to the visual precision of a freshly striped lawn. That gave the brand a simple organizing idea: clean lines, reliable service, and a result that feels noticeably finished.
          </p>
          <p>
            Messaging stays concise and concrete, avoiding generic claims in favor of a direct promise customers can immediately picture.
          </p>
        </EditorialChapter>
      </Container>

      <CaseStudyGallery variant="lawn" />

      <Container>
        <EditorialChapter eyebrow="Identity direction" title="A visual system rooted in the work itself.">
          <p>
            Deep green creates an immediate connection to the category without relying on bright, familiar lawn-service colors. Warm cream keeps the system approachable, while the sharper typographic scale gives the business more presence.
          </p>
          <p>
            Repeated lines and directional crops reference mower stripes subtly, giving the identity a recognizable behavior beyond the logo.
          </p>
        </EditorialChapter>

        <EditorialChapter eyebrow="Website experience" title="Built to move from interest to quote request.">
          <p>
            The website leads with the central promise, then organizes services and proof in a direct sequence. Clear hierarchy and restrained interactions make the experience feel polished without slowing down a customer who simply wants to understand the offer.
          </p>
          <p>
            Responsive layouts keep the headline, imagery, and calls to action legible on smaller screens, where many local-service searches begin.
          </p>
        </EditorialChapter>

        <EditorialChapter eyebrow="The outcome" title="A more credible foundation for local growth.">
          <p>
            The finished direction gives Lawn Fadez a distinct, consistent way to present the business across its website and future marketing. The offer is clearer, the identity is more recognizable, and the path to requesting work is easier to follow.
          </p>
          <p>
            The system was designed to support future campaigns and additional service content without losing the simplicity that makes the brand effective.
          </p>
        </EditorialChapter>
      </Container>

      <NextProject project={nextProject} />
      <ConversionCTA
        eyebrow="Have a similar challenge?"
        title="Let’s make the value easier to see."
        copy="Start with what feels unclear, underdeveloped, or harder to communicate than it should be."
        align="center"
      />
    </article>
  );
}
