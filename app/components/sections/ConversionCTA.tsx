import AnimatedButton from "../AnimatedButton";
import Container from "../layout/Container";
import Reveal from "../Reveal";

type ConversionCTAProps = {
  eyebrow: string;
  title: string;
  copy: string;
  id?: string;
  align?: "split" | "center";
};

export default function ConversionCTA({
  eyebrow,
  title,
  copy,
  id,
  align = "split",
}: ConversionCTAProps) {
  const centered = align === "center";

  return (
    <section id={id} className="relative overflow-hidden bg-[#0D0D0D] py-28 sm:py-36 lg:py-48">
      <Container>
        <Reveal>
          <div className="cta-panel relative isolate overflow-hidden rounded-[2rem] border border-[#C6A972]/20 px-7 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="grain-overlay absolute inset-0 opacity-[0.12]" />
            <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#C6A972]/14 blur-[100px]" />
            <div
              className={`relative ${
                centered
                  ? "mx-auto max-w-6xl text-center"
                  : "grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
              }`}
            >
              <div>
                <div className="section-label">{eyebrow}</div>
                <h2
                  className={`mt-6 text-balance text-[clamp(3.25rem,6.8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.067em] ${
                    centered ? "mx-auto max-w-5xl" : "max-w-5xl"
                  }`}
                >
                  {title}
                </h2>
              </div>
              <div className={centered ? "mx-auto mt-9" : "lg:justify-self-end"}>
                <p className="mb-7 max-w-sm text-sm leading-7 text-[#E7DCC1]/68">
                  {copy}
                </p>
                <AnimatedButton href="/contact">
                  Start a Conversation
                </AnimatedButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
