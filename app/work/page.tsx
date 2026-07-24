import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../components/AnimatedButton";
import Container from "../components/layout/Container";
import Reveal from "../components/Reveal";
import { getProject, projects, type Project } from "../data/projects";
import { createMetadata } from "../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Explore selected brand strategy, identity, website, and marketing work by Kuiken Group.",
  path: "/work",
  image: {
    url: "/work/lawn-fadez-homepage-v2.jpg",
    width: 1586,
    height: 992,
    alt: "Lawn Fadez website design",
  },
});

function ProjectTags({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.services.map((service) => (
        <span
          key={service}
          className="rounded-full border border-[#E7DCC1]/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] text-[#E7DCC1]/64"
        >
          {service}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
  reverse = false,
}: {
  project: Project;
  index: string;
  reverse?: boolean;
}) {
  if (!project.featuredImage || !project.imageAlt || !project.caseStudyHref) return null;

  return (
    <article className="border-t border-[#E7DCC1]/10 py-24 sm:py-32 lg:py-44">
      <Reveal>
        <Link
          href={project.caseStudyHref}
          className="premium-focus group block rounded-[2rem]"
          aria-label={`View ${project.title} case study`}
        >
          <div className={`grid gap-12 lg:grid-cols-[1.24fr_0.76fr] lg:items-end ${reverse ? "lg:grid-cols-[0.76fr_1.24fr]" : ""}`}>
            <div className={`relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 sm:min-h-[42rem] lg:min-h-[48rem] ${reverse ? "lg:order-2" : ""}`}>
              <Image
                src={project.featuredImage}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 64vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/60">
                {project.year ? `${project.year} · ` : ""}Selected project
              </div>
            </div>

            <div className={reverse ? "lg:order-1 lg:pr-10" : "lg:pl-6"}>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">{index}</span>
                <span className="h-px w-10 bg-[#E7DCC1]/15" />
                {project.year ? <span className="text-[9px] tracking-[0.2em] text-[#E7DCC1]/60">{project.year}</span> : null}
              </div>
              <h2 className="mt-7 text-[clamp(3.5rem,6.5vw,7.5rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                {project.title}
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-8 text-[#E7DCC1]/64">{project.shortDescription}</p>
              <div className="mt-8"><ProjectTags project={project} /></div>
              <div className="mt-10 inline-flex min-h-11 items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C6A972]">
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        </Link>
      </Reveal>
    </article>
  );
}

export default function WorkPage() {
  const lawnFadez = getProject("lawn-fadez");
  const kuikenGroup = getProject("kuiken-group");
  const wirelessWorld = getProject("wireless-world");
  const capabilities = Array.from(new Set(projects.flatMap((project) => project.services)));

  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <header className="relative isolate overflow-hidden border-b border-[#E7DCC1]/10 pt-36 sm:pt-44 lg:pt-52">
        <div className="absolute -left-40 top-36 h-[30rem] w-[30rem] rounded-full bg-[#C6A972]/7 blur-[120px]" />
        <Container className="relative pb-28 sm:pb-36 lg:pb-48">
          <Reveal><div className="section-label">Selected work</div></Reveal>
          <Reveal delay={70}>
            <h1 className="mt-8 max-w-[84rem] text-balance text-[clamp(4.25rem,10vw,10.5rem)] font-semibold leading-[0.8] tracking-[-0.082em]">
              Built to make the value unmistakable.
            </h1>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-[#E7DCC1]/10 pt-8 lg:grid-cols-[0.66fr_1.34fr]">
            <Reveal delay={120}>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/60">Strategy · Identity · Digital</span>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-3xl text-balance text-xl leading-[1.45] tracking-[-0.02em] text-[#E7DCC1]/64 sm:text-2xl lg:text-3xl">
                Every engagement starts with the business problem. The identity, website, and marketing system follow from a clearer position—not a decorative trend.
              </p>
            </Reveal>
          </div>
        </Container>
      </header>

      <Container>
        <FeaturedProject project={lawnFadez} index="01" />
        <FeaturedProject project={kuikenGroup} index="02" reverse />
      </Container>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-44">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
              <div>
                <div className="section-label">Selected work list</div>
                <p className="mt-6 max-w-sm text-sm leading-7 text-[#E7DCC1]/64">A growing portfolio, published when the work and its story are ready.</p>
              </div>
              <h2 className="text-balance text-[clamp(3rem,6.5vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.065em]">Current and forthcoming.</h2>
            </div>
          </Reveal>

          <div className="mt-20 border-t border-[#E7DCC1]/10 lg:mt-28">
            {[lawnFadez, kuikenGroup, wirelessWorld].map((project, index) => {
              const content = (
                <div className="grid gap-6 border-b border-[#E7DCC1]/10 py-9 sm:py-11 lg:grid-cols-[0.2fr_0.8fr_1fr_0.4fr] lg:items-center">
                  <span className="text-[10px] tracking-[0.25em] text-[#C6A972]">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{project.title}</h3>
                  <div><ProjectTags project={project} /></div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#E7DCC1]/60 lg:justify-self-end">
                    {project.status === "published" ? "View case study →" : "Case study in progress"}
                  </span>
                </div>
              );

              return (
                <Reveal key={project.slug} delay={index * 55}>
                  {project.caseStudyHref ? (
                    <Link href={project.caseStudyHref} className="premium-focus group block">{content}</Link>
                  ) : (
                    <article>{content}</article>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36 lg:py-48">
        <Container className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <div className="section-label">Capabilities in practice</div>
              <h2 className="mt-7 max-w-3xl text-balance text-[clamp(3rem,5vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                The right mix for the problem.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid sm:grid-cols-2">
              {capabilities.map((capability) => (
                <Link
                  key={capability}
                  href={`/services#${capability.toLowerCase().replaceAll(" ", "-")}`}
                  className="premium-focus group flex min-h-24 items-center justify-between border-b border-[#E7DCC1]/10 px-1 py-6 sm:odd:mr-6 sm:even:ml-6"
                >
                  <span className="text-sm text-[#E7DCC1]/68">{capability}</span>
                  <span className="text-[#C6A972] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-44">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h2 className="max-w-5xl text-balance text-[clamp(3.5rem,7.5vw,7.75rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
                Your business may be the next story worth telling.
              </h2>
              <div className="lg:justify-self-end">
                <p className="mb-7 max-w-sm text-sm leading-7 text-[#E7DCC1]/64">Start with what feels unclear, outdated, or harder to communicate than it should be.</p>
                <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>Start a Conversation</AnimatedButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
