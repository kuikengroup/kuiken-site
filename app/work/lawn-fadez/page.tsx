import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/layout/Container";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Lawn Fadez Case Study",
  description: "Brand identity and web design case study for Lawn Fadez by Kuiken Group.",
};

export default function LawnFadezCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-32 text-[#E7DCC1]">
      <Container className="py-16 lg:py-24">
        <Reveal>
          <Link href="/#work" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A972]">← Back to selected work</Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="section-label">Case study · Lawn Fadez</div>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">Clean lines. Fresh lawns. A brand built to stand out locally.</h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">Kuiken Group developed a sharper identity and digital direction for Lawn Fadez, helping the business present its services with more confidence and create a clearer path from local discovery to quote request.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="lawn-visual mt-16 min-h-[34rem] rounded-[2rem] border border-[#E7DCC1]/10 lg:mt-24">
            <div className="browser-chrome"><span /><span /><span /><small>lawnfadez.com</small></div>
            <div className="lawn-site min-h-[31rem]">
              <div className="lawn-nav"><strong>LAWN FADEZ</strong><span>Services&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span></div>
              <div className="lawn-copy"><small>LE MARS, IOWA</small><h3>Clean lines.<br />Fresh lawns.</h3><p>Reliable lawn care with a sharper finish.</p><button type="button">REQUEST A QUOTE</button></div>
              <div className="lawn-stripes" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[#E7DCC1]/10 bg-[#E7DCC1]/10 my-16 lg:my-24 lg:grid-cols-3">
          {[
            ["Challenge", "Create a modern presence that feels professional without losing the direct, local personality of the business."],
            ["Direction", "A bold green system, concise messaging, and a clean digital structure focused on service clarity and conversion."],
            ["Outcome", "A stronger foundation for recognition, credibility, and future lead-generation campaigns."],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <article className="h-full min-h-64 bg-[#171817] p-8 lg:p-10"><div className="text-[10px] font-semibold tracking-[0.24em] text-[#C6A972]">0{index + 1}</div><h2 className="mt-14 text-2xl font-semibold tracking-[-0.04em]">{title}</h2><p className="mt-4 text-sm leading-7 text-[#E7DCC1]/54">{copy}</p></article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
