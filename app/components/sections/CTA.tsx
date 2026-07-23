import AnimatedButton from "../AnimatedButton";
import Container from "../layout/Container";
import Reveal from "../Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0D0D0D] py-28 sm:py-36 lg:py-48">
      <Container>
        <Reveal>
          <div className="cta-panel relative isolate overflow-hidden rounded-[2rem] border border-[#C6A972]/20 px-7 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="grain-overlay absolute inset-0 opacity-[0.12]" />
            <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#C6A972]/14 blur-[100px]" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#C6A972]/8 blur-[90px]" />
            <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <div className="section-label">Start a conversation</div>
                <h2 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#E7DCC1] sm:text-6xl lg:text-7xl">
                  Your business already has value. Let&apos;s make sure the brand communicates it.
                </h2>
              </div>
              <div className="lg:justify-self-end">
                <p className="mb-7 max-w-sm text-sm leading-7 text-[#E7DCC1]/56">
                  Tell us what you&apos;re building, what feels stuck, and where you want the business to go next.
                </p>
                <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>
                  Schedule a Conversation
                </AnimatedButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
