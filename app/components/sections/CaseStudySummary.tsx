import type { Project } from "../../data/projects";
import Reveal from "../Reveal";

export default function CaseStudySummary({ project }: { project: Project }) {
  const facts = [
    ["Client", project.client],
    ["Services", project.services.join(" · ")],
    ["Timeline", project.timeline],
  ];

  return (
    <section
      aria-labelledby={`${project.slug}-overview`}
      className="case-copy-grid py-24 sm:py-32 lg:py-44"
    >
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <aside aria-label="Project details">
          <div className="section-label">Project summary</div>
          <dl className="mt-8 grid gap-7 border-t border-[#E7DCC1]/10 pt-7">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="case-meta-label">{label}</dt>
                <dd className="max-w-sm text-sm leading-7 text-[#E7DCC1]/68">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Reveal>
      <Reveal stagger={1}>
        <div>
          <h2
            id={`${project.slug}-overview`}
            className="max-w-4xl text-balance text-[clamp(2.25rem,4.6vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.052em]"
          >
            {project.overview}
          </h2>

          <div className="mt-12 grid gap-10 border-t border-[#E7DCC1]/10 pt-8 sm:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="case-meta-label">Overview</div>
              <p className="text-sm leading-8 text-[#E7DCC1]/64">{project.summary}</p>
            </div>
            <div>
              <div className="case-meta-label">Deliverables</div>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {project.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="border-b border-[#E7DCC1]/10 py-3 text-sm text-[#E7DCC1]/68"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
