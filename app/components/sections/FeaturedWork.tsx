import Link from "next/link";
import Container from "../layout/Container";
import Reveal from "../Reveal";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    number: "01",
    title: "Lawn Fadez",
    category: "Brand identity · Web design · Lead generation",
    description:
      "A neighborhood lawn-care business repositioned with a sharper identity, a clearer offer, and a digital presence built to turn local attention into booked work.",
    href: "/work/lawn-fadez",
    visual: "lawn",
  },
  {
    number: "02",
    title: "Kuiken Group",
    category: "Positioning · Identity system · Digital experience",
    description:
      "A complete premium brand system designed to establish credibility quickly and support the firm as its capabilities, portfolio, and client base grow.",
    href: "/about",
    visual: "kuiken",
  },
];

function ProjectVisual({ type, title }: { type: string; title: string }) {
  if (type === "lawn") {
    return (
      <div className="project-visual lawn-visual" aria-label={`${title} website concept`}>
        <div className="browser-chrome">
          <span /><span /><span />
          <small>lawnfadez.com</small>
        </div>
        <div className="lawn-site">
          <div className="lawn-nav"><strong>LAWN FADEZ</strong><span>Services&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span></div>
          <div className="lawn-copy">
            <small>LE MARS, IOWA</small>
            <h3>Clean lines.<br />Fresh lawns.</h3>
            <p>Reliable lawn care with a sharper finish.</p>
            <button type="button">REQUEST A QUOTE</button>
          </div>
          <div className="lawn-stripes" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual kuiken-visual" aria-label={`${title} brand system concept`}>
      <div className="brand-board">
        <div className="brand-mark">KG</div>
        <div className="brand-copy">
          <small>KUIKEN GROUP</small>
          <h3>Quiet confidence,<br />built into every detail.</h3>
        </div>
        <div className="brand-swatches"><span /><span /><span /><span /></div>
        <div className="brand-card brand-card-one">KUIKEN<br />GROUP</div>
        <div className="brand-card brand-card-two">PREMIUM<br />MARKETING</div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="border-b border-[#E7DCC1]/10 bg-[#0D0D0D] py-20 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Brand systems designed to make ambitious businesses feel unmistakably credible."
            copy="A growing collection of positioning, identity, and digital work—each shaped around a real business goal rather than a decorative trend."
            align="split"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="work-card group overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 bg-[#151615]">
                <Link href={project.href} className="grid lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="flex min-h-[23rem] flex-col p-7 sm:p-10 lg:min-h-[35rem] lg:p-12">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C6A972]">{project.number}</span>
                      <span className="work-arrow flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DCC1]/12 text-[#E7DCC1]/45">↗</span>
                    </div>
                    <div className="mt-auto pt-16">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#E7DCC1]/40">{project.category}</div>
                      <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#E7DCC1] sm:text-5xl">{project.title}</h3>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#E7DCC1]/56 sm:text-base sm:leading-8">{project.description}</p>
                      <div className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C6A972]">
                        View project <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                  <div className="min-h-[25rem] overflow-hidden border-t border-[#E7DCC1]/10 p-4 sm:p-6 lg:min-h-[35rem] lg:border-l lg:border-t-0 lg:p-8">
                    <ProjectVisual type={project.visual} title={project.title} />
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
