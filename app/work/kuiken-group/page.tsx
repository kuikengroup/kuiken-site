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
  title: "Kuiken Group Case Study",
  description: "The strategy, identity, and digital system behind the Kuiken Group brand.",
  path: "/work/kuiken-group",
});

const chapters = [
  {
    eyebrow: "The challenge",
    title: "Build credibility without pretending to be something bigger.",
    copy: "The brand needed to communicate senior-level thinking and premium execution while remaining honest about its principal-led structure. It also needed enough range to support strategy, identity, web, and marketing without feeling broad or unfocused.",
  },
  {
    eyebrow: "The position",
    title: "Quiet confidence, made useful.",
    copy: "The positioning centers on clarity and craftsmanship. Kuiken Group is presented as a focused creative partner for businesses whose real value is not yet visible in their brand. The language stays direct, specific, and measured.",
  },
  {
    eyebrow: "The system",
    title: "Restraint creates recognition.",
    copy: "A near-black foundation, warm cream typography, and muted gold accents establish a distinctive but flexible visual world. Oversized editorial type creates confidence, while disciplined spacing and subtle interaction keep the experience composed.",
  },
  {
    eyebrow: "The outcome",
    title: "A platform built for the firm’s next chapter.",
    copy: "The result is a coherent identity and digital foundation that can expand into case studies, insights, services, resources, and client experiences without losing its central point of view.",
  },
];

export default function KuikenGroupCaseStudy() {
  const project = getProject("kuiken-group");
  const nextProject = getProject("lawn-fadez");

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
                <div className="section-label">Kuiken Group · Case study</div>
                <h1 className="mt-7 max-w-6xl text-balance text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.83] tracking-[-0.078em]">
                  Strategy made visible.
                </h1>
              </div>
            </Reveal>
            <Reveal stagger={2}>
              <p className="max-w-xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">
                A principal-led marketing firm shaped around clarity, restraint, and the belief that a strong brand should make a business&apos;s value easier to recognize.
              </p>
            </Reveal>
          </div>
          <Reveal stagger={3}>
            <div className="mt-16 grid gap-8 border-t border-[#E7DCC1]/10 py-8 sm:grid-cols-3 lg:mt-24">
              <div><span className="case-meta-label">Client</span><p>Kuiken Group</p></div>
              <div><span className="case-meta-label">Type</span><p>Internal brand platform</p></div>
              <div><span className="case-meta-label">Focus</span><p>Positioning · Identity · Digital</p></div>
            </div>
          </Reveal>
        </Container>
      </header>

      <Reveal>
        <div className="image-reveal relative aspect-[4/3] w-full overflow-hidden bg-[#171817] lg:aspect-[16/8]">
          <Image src="/work/kuiken-identity-logo-v3.jpg" alt="Kuiken Group identity system with gold-foiled KG marks, stationery, and a tablet" fill priority sizes="100vw" className="object-cover" />
        </div>
      </Reveal>

      <Container>
        <CaseStudySummary project={project} />

        {chapters.map((chapter, index) => (
          <EditorialChapter
            key={chapter.title}
            eyebrow={chapter.eyebrow}
            title={chapter.title}
            index={`0${index + 1} / 04`}
          >
            <p>{chapter.copy}</p>
          </EditorialChapter>
        ))}
      </Container>

      <CaseStudyGallery variant="kuiken" />

      <NextProject project={nextProject} />
      <ConversionCTA
        eyebrow="Build what comes next"
        title="A clearer brand starts with a clear conversation."
        copy="Share the business problem, the gap in perception, and where the brand needs to go next."
        align="center"
      />
    </article>
  );
}
