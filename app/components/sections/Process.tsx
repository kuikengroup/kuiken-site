import Container from "../layout/Container";
import Reveal from "../Reveal";
const steps = [
  ["01", "Discover", "We listen closely, study the category, and identify the business problem behind the design brief.", "Listen"],
  ["02", "Define", "We sharpen the position, audience, offer, and message until the opportunity feels unmistakably clear.", "Focus"],
  ["03", "Design", "We turn the strategy into an identity and digital experience where every detail supports the same idea.", "Create"],
  ["04", "Deliver", "We launch a considered system, measure what matters, and leave the business ready to keep moving.", "Grow"],
];

export default function Process() {
  return (
    <section id="approach" className="process-section border-b border-[#E7DCC1]/10 bg-[#111211] py-28 sm:py-36 lg:py-52">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div className="section-label">The Kuiken method</div>
            <div>
              <h2 className="max-w-5xl text-balance text-[clamp(3.25rem,6.7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#E7DCC1]">
                Clarity first.<br />Then everything else.
              </h2>
              <p className="mt-8 max-w-xl text-sm leading-7 text-[#E7DCC1]/48 sm:text-base sm:leading-8">
                A deliberately lean process that turns ambition into a focused brand system people can understand and trust.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 border-t border-[#E7DCC1]/12 lg:mt-36">
          {steps.map(([number, title, copy, verb], index) => (
            <Reveal key={title} delay={index * 60}>
              <article className="process-story group grid gap-8 border-b border-[#E7DCC1]/12 py-12 sm:py-16 lg:grid-cols-[0.25fr_0.75fr_0.75fr_0.25fr] lg:items-center">
                <span className="text-[10px] font-semibold tracking-[0.28em] text-[#C6A972]">{number}</span>
                <h3 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.85] tracking-[-0.065em] text-[#E7DCC1]">{title}</h3>
                <p className="max-w-md text-sm leading-7 text-[#E7DCC1]/48 lg:justify-self-end">{copy}</p>
                <div className="process-verb hidden text-right text-[9px] uppercase tracking-[0.25em] text-[#E7DCC1]/30 lg:block">
                  {verb}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
