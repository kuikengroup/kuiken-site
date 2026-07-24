import Link from "next/link";
import type { Project } from "../../data/projects";
import Container from "../layout/Container";

export default function NextProject({ project }: { project: Project }) {
  if (!project.caseStudyHref) return null;

  return (
    <nav aria-label="Next project" className="border-y border-[#E7DCC1]/10 bg-[#111211]">
      <Container className="py-16 sm:py-20">
        <Link
          href={project.caseStudyHref}
          className="premium-focus group grid gap-6 rounded-[1.5rem] py-3 lg:grid-cols-[0.4fr_1.3fr_0.3fr] lg:items-center"
        >
          <span className="section-label">Next project</span>
          <span className="text-[clamp(2.75rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            {project.title}
          </span>
          <span className="motion-ui text-2xl text-[#C6A972] group-hover:translate-x-2 lg:justify-self-end">
            →
          </span>
        </Link>
      </Container>
    </nav>
  );
}
