import Reveal from "./Reveal";
import FeaturedWork from "./sections/FeaturedWork";
import WhyKuiken from "./sections/WhyKuiken";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Container from "./layout/Container";
import SectionHeading from "./ui/SectionHeading";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    copy: "Positioning, messaging, and identity systems that make the business feel clear, credible, and distinct.",
    mark: "strategy",
    href: "/services#brand-strategy",
  },
  {
    number: "02",
    title: "Digital Marketing",
    copy: "Campaign direction and content systems designed to build attention, trust, and consistent demand.",
    mark: "growth",
    href: "/services#digital-marketing",
  },
  {
    number: "03",
    title: "Web Design",
    copy: "High-performing digital experiences that translate brand value into action, leads, and measurable growth.",
    mark: "digital",
    href: "/services#web-design",
  },
];

export default function HomeShell() {
  return (
    <>
      <section id="about" className="relative border-b border-[#E7DCC1]/10 bg-[#111211]">
        <div className="h-28 bg-[#0D0D0D] sm:h-36 lg:h-44" aria-hidden="true" />
        <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-[0.56fr_1.44fr] lg:py-44">
          <Reveal>
            <div>
              <div className="section-label">The standard</div>
              <div className="mt-7 hidden h-24 w-px bg-gradient-to-b from-[#C6A972]/60 to-transparent lg:block" />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-6xl text-balance text-[clamp(2.55rem,5.25vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.058em] text-[#E7DCC1]">
              We make growing businesses feel established—through clear positioning, considered design, and digital experiences that earn trust before the first conversation.
            </p>
          </Reveal>
        </Container>
      </section>

      <FeaturedWork />
      <WhyKuiken />

      <section id="services" className="relative overflow-hidden border-b border-[#E7DCC1]/10 bg-[#0D0D0D] py-28 sm:py-36 lg:py-48">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Built to sharpen every part of your presence."
              copy="A focused mix of strategic thinking and polished execution—built to help your business communicate with more confidence at every touchpoint."
              align="split"
            />
          </Reveal>

          <div className="mt-20 grid gap-4 lg:mt-28 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90} className="h-full">
                <Link href={service.href} className={`premium-panel premium-panel-${service.mark} premium-focus group block h-full min-h-[27rem] rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#151615] p-7 sm:p-9 lg:min-h-[32rem]`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]">{service.number}</span>
                    <span className="service-mark" aria-hidden="true"><i /><i /><i /></span>
                  </div>
                  <div className="mt-36 lg:mt-52">
                    <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#E7DCC1]">{service.title}</h3>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-[#E7DCC1]/64">{service.copy}</p>
                    <div className="mt-8 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C6A972]">
                      Explore capability
                      <span className="block h-px w-8 bg-[#C6A972]/60 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </Link>
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
