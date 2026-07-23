import Container from "../layout/Container";
import Reveal from "../Reveal";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  ["01", "Discover", "Define the business goal, audience, competitive context, and the perception the brand needs to create."],
  ["02", "Clarify", "Shape the positioning, message hierarchy, offer, and creative direction before design begins."],
  ["03", "Build", "Translate the strategy into a focused identity and digital experience with a consistent visual system."],
  ["04", "Launch & refine", "Put the work into market, measure what matters, and improve the system as the business grows."],
];

export default function Process() {
  return (
    <section id="approach" className="process-section border-b border-[#E7DCC1]/10 bg-[#0D0D0D] py-20 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Kuiken method"
            title="A clear path from scattered ideas to a brand people trust."
            copy="The process stays deliberately lean: align on the right problem, create the strongest solution, then launch with enough structure to keep moving."
            align="split"
          />
        </Reveal>

        <div className="relative mt-14 lg:mt-20">
          <div className="process-line absolute bottom-0 left-[1.05rem] top-0 hidden w-px bg-[#E7DCC1]/10 sm:block lg:left-0 lg:right-0 lg:top-[1.05rem] lg:h-px lg:w-auto" />
          <div className="grid gap-4 lg:grid-cols-4 lg:gap-0">
            {steps.map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="process-step relative rounded-[1.5rem] border border-[#E7DCC1]/10 bg-[#151615] p-7 sm:ml-10 lg:ml-0 lg:min-h-[23rem] lg:rounded-none lg:border-y lg:border-r lg:border-l-0 lg:bg-transparent lg:px-8 lg:py-12 first:lg:border-l">
                  <div className="process-node absolute -left-[2.25rem] top-8 hidden h-4 w-4 rounded-full border-4 border-[#0D0D0D] bg-[#C6A972] sm:block lg:-top-2 lg:left-8" />
                  <span className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]">{number}</span>
                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.04em] text-[#E7DCC1] lg:mt-24">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#E7DCC1]/52">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
