import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../../components/AnimatedButton";
import Container from "../../components/layout/Container";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Kuiken Group Case Study",
  description: "The strategy, identity, and digital system behind the Kuiken Group brand.",
  openGraph: {
    images: [{ url: "/work/kuiken-identity-logo-v3.jpg", width: 1448, height: 1086, alt: "Kuiken Group identity system" }],
  },
};

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
  return (
    <article className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <header className="pt-36 sm:pt-44 lg:pt-52">
        <Container>
          <Reveal>
            <Link href="/#work" className="premium-focus inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A972]">
              <span>←</span> Selected work
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <Reveal delay={60}>
              <div>
                <div className="section-label">Kuiken Group · Case study</div>
                <h1 className="mt-7 max-w-6xl text-balance text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.83] tracking-[-0.078em]">
                  Strategy made visible.
                </h1>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">
                A principal-led marketing firm shaped around clarity, restraint, and the belief that a strong brand should make a business&apos;s value easier to recognize.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="mt-16 grid gap-8 border-t border-[#E7DCC1]/10 py-8 sm:grid-cols-3 lg:mt-24">
              <div><span className="case-meta-label">Client</span><p>Kuiken Group</p></div>
              <div><span className="case-meta-label">Type</span><p>Internal brand platform</p></div>
              <div><span className="case-meta-label">Focus</span><p>Positioning · Identity · Digital</p></div>
            </div>
          </Reveal>
        </Container>
      </header>

      <Reveal>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171817] lg:aspect-[16/8]">
          <Image src="/work/kuiken-identity-logo-v3.jpg" alt="Kuiken Group identity system with gold-foiled KG marks, stationery, and a tablet" fill priority sizes="100vw" className="object-cover" />
        </div>
      </Reveal>

      <Container>
        <section className="case-copy-grid py-24 sm:py-32 lg:py-44">
          <Reveal><div className="section-label">Project overview</div></Reveal>
          <Reveal delay={80}>
            <div>
              <p className="max-w-4xl text-balance text-[clamp(2.35rem,4.8vw,5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
                The brand had to demonstrate the same clarity and care Kuiken Group promises its clients.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <p className="text-sm leading-8 text-[#E7DCC1]/52">
                  This was not a cosmetic redesign. It was an opportunity to define what the firm stands for, who it is built to serve, and how every digital touchpoint should communicate that position.
                </p>
                <ul className="grid gap-3">
                  {["Brand positioning", "Messaging system", "Visual identity", "Website design and development", "Creative direction"].map((service) => (
                    <li key={service} className="border-b border-[#E7DCC1]/10 pb-3 text-sm text-[#E7DCC1]/64">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {chapters.map((chapter, index) => (
          <section key={chapter.title} className="case-copy-grid border-t border-[#E7DCC1]/10 py-20 sm:py-28 lg:py-36">
            <Reveal><div className="section-label">{chapter.eyebrow}</div></Reveal>
            <Reveal delay={70}>
              <div>
                <h2 className="max-w-4xl text-balance text-[clamp(2.75rem,5.5vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.06em]">{chapter.title}</h2>
                <p className="mt-8 max-w-2xl text-base leading-8 text-[#E7DCC1]/56">{chapter.copy}</p>
                <span className="mt-12 block text-[10px] tracking-[0.25em] text-[#C6A972]">0{index + 1} / 04</span>
              </div>
            </Reveal>
          </section>
        ))}
      </Container>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-[#E7DCC1]/10 sm:min-h-[46rem]">
                <Image src="/work/kuiken-identity-logo-v3.jpg" alt="Detailed view of Kuiken Group brand stationery" fill sizes="(max-width: 1024px) 100vw, 64vw" className="scale-110 object-cover object-left" />
              </div>
              <div className="grid gap-6">
                <div className="flex min-h-64 flex-col justify-between rounded-[2rem] border border-[#E7DCC1]/10 bg-[#252625] p-8">
                  <span className="case-meta-label">Palette</span>
                  <div className="flex gap-3"><span className="h-12 w-12 rounded-full border border-white/10 bg-[#0D0D0D]" /><span className="h-12 w-12 rounded-full border border-white/10 bg-[#252625]" /><span className="h-12 w-12 rounded-full bg-[#C6A972]" /><span className="h-12 w-12 rounded-full bg-[#E7DCC1]" /></div>
                </div>
                <div className="flex min-h-80 flex-col justify-between rounded-[2rem] border border-[#C6A972]/20 bg-[#151615] p-8">
                  <span className="case-meta-label">Brand principle</span>
                  <p className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em]">Luxury comes from restraint.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <nav aria-label="Next project" className="border-b border-[#E7DCC1]/10">
        <Container className="py-16 sm:py-20">
          <Link href="/work/lawn-fadez" className="premium-focus group grid gap-6 rounded-[1.5rem] py-3 lg:grid-cols-[0.4fr_1.3fr_0.3fr] lg:items-center">
            <span className="section-label">Next project</span>
            <span className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Lawn Fadez</span>
            <span className="text-2xl text-[#C6A972] transition-transform duration-300 group-hover:translate-x-2 lg:justify-self-end">→</span>
          </Link>
        </Container>
      </nav>

      <section className="py-28 sm:py-36 lg:py-44">
        <Container className="text-center">
          <Reveal>
            <div className="section-label">Build what comes next</div>
            <h2 className="mx-auto mt-7 max-w-5xl text-balance text-[clamp(3.25rem,7vw,7.25rem)] font-semibold leading-[0.88] tracking-[-0.067em]">A clearer brand starts with a clear conversation.</h2>
            <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external className="mt-10">Start a conversation</AnimatedButton>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
