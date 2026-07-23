import Reveal from "./Reveal";
import FeaturedWork from "./sections/FeaturedWork";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Container from "./layout/Container";
import SectionHeading from "./ui/SectionHeading";

const services = [
  ["01", "Brand Strategy", "Positioning, messaging, and identity systems that make the business feel clear, credible, and distinct."],
  ["02", "Digital Marketing", "Campaign direction and content systems designed to build attention, trust, and consistent demand."],
  ["03", "Web Design", "High-performing digital experiences that translate brand value into action, leads, and measurable growth."],
];

export default function HomeShell() {
  return (
    <>
      <section id="about" className="border-b border-[#E7DCC1]/10 bg-[#111211]">
        <Container className="grid gap-10 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
          <Reveal><div className="section-label">The standard</div></Reveal>
          <Reveal delay={90}>
            <p className="max-w-5xl text-balance text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-[#E7DCC1] sm:text-4xl lg:text-5xl">
              We make growing businesses feel established—through clear positioning, considered design, and digital experiences that earn trust before the first conversation.
            </p>
          </Reveal>
        </Container>
      </section>

      <FeaturedWork />
      <Stats />

      <section id="services" className="relative overflow-hidden border-b border-[#E7DCC1]/10 bg-[#0D0D0D] py-20 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Built to sharpen every part of your presence."
              copy="A focused mix of strategic thinking and polished execution—built to help your business communicate with more confidence at every touchpoint."
              align="split"
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#E7DCC1]/10 lg:mt-20 lg:grid-cols-3">
            {services.map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 90} className="h-full">
                <article className="premium-panel group h-full min-h-80 bg-[#171817] p-7 sm:p-9 lg:min-h-96">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]">{number}</span>
                    <span className="text-[#E7DCC1]/25 transition duration-300 group-hover:rotate-45 group-hover:text-[#C6A972]">↗</span>
                  </div>
                  <div className="mt-24 lg:mt-36">
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#E7DCC1]">{title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#E7DCC1]/56">{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CTA />
    </>
  );
}
