import Container from "../layout/Container";
import Reveal from "../Reveal";

const reasons = [
  {
    number: "01",
    title: "Principal-led work",
    copy: "Clients work directly with Brady Kuiken from discovery through final review, keeping decisions close to the person accountable for the work.",
  },
  {
    number: "02",
    title: "Custom strategies",
    copy: "Every engagement begins with the business constraint. The scope and solution follow from what will create the most useful change.",
  },
  {
    number: "03",
    title: "Quality over volume",
    copy: "A deliberately focused client roster protects the attention, judgment, and craft required to produce considered work.",
  },
  {
    number: "04",
    title: "Long-term partnerships",
    copy: "The goal is a durable system and a trusted working relationship—not a short-lived layer of polish that ends at launch.",
  },
  {
    number: "05",
    title: "Modern marketing",
    copy: "Strategy, identity, web, and growth are considered as one connected experience, built around how people evaluate businesses today.",
  },
];

export default function WhyKuiken() {
  return (
    <section
      aria-labelledby="why-kuiken-title"
      className="border-b border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-48"
    >
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <div className="section-label">Why Kuiken Group</div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#E7DCC1]/64">
                A focused working model designed to protect clarity, accountability,
                and the quality of the outcome.
              </p>
            </div>
            <h2
              id="why-kuiken-title"
              className="max-w-5xl text-balance text-[clamp(3.25rem,6.7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em]"
            >
              Senior attention where it matters most.
            </h2>
          </div>
        </Reveal>

        <ol className="mt-20 border-t border-[#E7DCC1]/12 lg:mt-28">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} stagger={index}>
              <li className="grid gap-5 border-b border-[#E7DCC1]/12 py-9 sm:py-11 lg:grid-cols-[0.2fr_0.72fr_1.08fr] lg:items-center">
                <span className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">
                  {reason.number}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {reason.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-[#E7DCC1]/64 lg:justify-self-end">
                  {reason.copy}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
