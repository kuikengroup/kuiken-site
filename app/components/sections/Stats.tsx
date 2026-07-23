import Container from "../layout/Container";
import Reveal from "../Reveal";
import CountUp from "../animations/CountUp";

const principles = [
  ["01", "Independent", "Senior-level thinking without layers of agency overhead."],
  ["02", "Intentional", "Every design choice tied back to positioning and action."],
  ["03", "Integrated", "Strategy, brand, and web working as one connected system."],
  ["04", "Built to grow", "Flexible foundations that can evolve with the business."],
];

export default function Stats() {
  return (
    <section className="border-b border-[#E7DCC1]/10 bg-[#111211]">
      <Container className="py-6 lg:py-8">
        <div className="grid divide-y divide-[#E7DCC1]/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {principles.map(([number, title, copy], index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <div className="group h-full px-2 py-8 sm:px-5 lg:min-h-52 lg:px-8 lg:py-10 first:lg:pl-0 last:lg:pr-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]" aria-label={number}>
                    <CountUp value={index + 1} />
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6A972]/35 transition group-hover:bg-[#C6A972]" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em] text-[#E7DCC1]">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#E7DCC1]/48">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
