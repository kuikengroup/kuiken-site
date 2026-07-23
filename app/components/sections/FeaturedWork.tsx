import Link from "next/link";
import ParallaxMedia from "../animations/ParallaxMedia";
import Container from "../layout/Container";
import Reveal from "../Reveal";

function ProjectMeta({
  number,
  title,
  category,
  description,
}: {
  number: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <div className="project-meta">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">{number}</span>
        <span className="h-px w-10 bg-[#E7DCC1]/16" />
        <div className="flex flex-wrap gap-2">
          {category.split(" · ").map((tag) => (
            <span key={tag} className="rounded-full border border-[#E7DCC1]/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-[#E7DCC1]/46">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="mt-6 text-[clamp(2.75rem,5.5vw,5.75rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#E7DCC1]">
        {title}
      </h3>
      <p className="mt-6 max-w-xl text-sm leading-7 text-[#E7DCC1]/54 sm:text-base sm:leading-8">
        {description}
      </p>
      <div className="mt-8 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C6A972]">
        View case study
        <span className="project-link-line h-px w-10 bg-[#C6A972]" />
      </div>
    </div>
  );
}

function LawnFadezLaptop() {
  return (
    <div className="device-stage device-stage-lawn" aria-label="Lawn Fadez website shown on a MacBook">
      <div className="stage-orbit stage-orbit-one" />
      <div className="stage-orbit stage-orbit-two" />
      <div className="macbook">
        <div className="macbook-lid">
          <div className="macbook-camera" />
          <div className="macbook-screen">
            <ParallaxMedia
              src="/work/lawn-fadez-homepage-v2.jpg"
              alt="Lawn Fadez website featuring a premium striped lawn"
              sizes="(max-width: 768px) 75vw, 62vw"
              priority
              strength={10}
              className="lawn-site"
            />
          </div>
        </div>
        <div className="macbook-base"><span /></div>
      </div>
      <div className="device-caption">
        <span>Digital experience</span>
        <span>2025</span>
      </div>
    </div>
  );
}

function KuikenIdentity() {
  return (
    <div className="device-stage device-stage-kuiken" aria-label="Kuiken Group identity and digital system">
      <ParallaxMedia
        src="/work/kuiken-identity-logo-v3.jpg"
        alt="Kuiken Group identity system with embossed stationery, tablet, and brand materials"
        sizes="(max-width: 1024px) 100vw, 58vw"
        strength={24}
        className="identity-media"
      />
      <div className="identity-index">
        <span>Identity system</span>
        <span>02 / 04</span>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="overflow-hidden border-b border-[#E7DCC1]/10 bg-[#0D0D0D] py-24 sm:py-28 lg:py-44">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <div className="section-label">Selected work · 2024—26</div>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#E7DCC1]/46">
                Identity and digital systems built around a sharper business position.
              </p>
            </div>
            <h2 className="max-w-5xl text-balance text-[clamp(3.25rem,7.4vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.067em] text-[#E7DCC1]">
              Work that makes the value feel obvious.
            </h2>
          </div>
        </Reveal>

        <div className="mt-24 sm:mt-32 lg:mt-48">
          <Reveal>
            <article className="editorial-project">
              <Link href="/work/lawn-fadez" className="group block">
                <LawnFadezLaptop />
                <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.12fr_0.88fr]">
                  <ProjectMeta
                    number="01"
                    title="Lawn Fadez"
                    category="Brand · Web · Growth"
                    description="A neighborhood lawn-care business repositioned with a sharper identity, a clearer offer, and a digital experience built to turn local attention into booked work."
                  />
                  <div className="hidden items-start justify-end pt-2 lg:flex">
                    <span className="work-arrow flex h-16 w-16 items-center justify-center rounded-full border border-[#E7DCC1]/14 text-xl text-[#E7DCC1]/50">↗</span>
                  </div>
                </div>
              </Link>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="editorial-project mt-32 ml-auto max-w-[72rem] sm:mt-40 lg:mt-56">
              <Link href="/about" className="group block">
                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                  <ProjectMeta
                    number="02"
                    title="Kuiken Group"
                    category="Positioning · Identity · Digital"
                    description="A premium brand system designed to establish credibility quickly and give the firm a clear, flexible foundation for its next stage of growth."
                  />
                  <KuikenIdentity />
                </div>
              </Link>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-32 grid border-y border-[#E7DCC1]/10 py-10 sm:mt-40 sm:py-12 lg:mt-56 lg:grid-cols-[0.7fr_1fr_0.7fr] lg:items-center">
              <div className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">03</div>
              <div className="mt-6 lg:mt-0">
                <div className="text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/36">Retail growth system</div>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#E7DCC1] sm:text-4xl">Wireless World</h3>
              </div>
              <div className="mt-8 flex items-center gap-4 lg:mt-0 lg:justify-self-end">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A972]" />
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#E7DCC1]/42">Case study in progress</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
