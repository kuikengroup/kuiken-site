import type { Metadata } from "next";
import AnimatedButton from "../components/AnimatedButton";
import Container from "../components/layout/Container";
import Reveal from "../components/Reveal";
import { createMetadata } from "../lib/metadata";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Start a conversation with Kuiken Group about brand strategy, web design, digital marketing, lead generation, or creative direction.",
  path: "/contact",
});

const faqs = [
  [
    "What should I include in my inquiry?",
    "Share the business context, the problem you want to solve, the services you are considering, and what a strong outcome would look like. A polished brief is not required.",
  ],
  [
    "Do I need to know the exact scope or budget?",
    "No. Early conversations often help define the right scope. An approximate budget or investment range is useful when available, but it is optional.",
  ],
  [
    "Can Kuiken Group support more than one discipline?",
    "Yes. Engagements can connect strategy, identity, web, creative direction, digital marketing, and lead generation when the work benefits from an integrated approach.",
  ],
  [
    "Who will I work with?",
    "Kuiken Group is principal-led. Brady Kuiken remains close to the strategy, creative direction, and client relationship throughout the engagement.",
  ],
  [
    "Can we begin with a conversation instead?",
    "Absolutely. Schedule an initial conversation if talking through the opportunity is a better first step than completing the form.",
  ],
];

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <section className="relative isolate overflow-hidden border-b border-[#E7DCC1]/10 pt-36 sm:pt-44 lg:pt-52">
        <div className="absolute -right-48 top-20 h-[36rem] w-[36rem] rounded-full bg-[#C6A972]/9 blur-[120px]" />
        <Container className="relative pb-24 sm:pb-32 lg:pb-40">
          <Reveal>
            <div className="section-label">Start a conversation</div>
          </Reveal>
          <Reveal stagger={1}>
            <h1 className="mt-8 max-w-[82rem] text-balance text-[clamp(4.25rem,9.5vw,10rem)] font-semibold leading-[0.82] tracking-[-0.078em]">
              Let&apos;s make the next move count.
            </h1>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-[#E7DCC1]/10 pt-8 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal stagger={2}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#E7DCC1]/54">
                Strategy · Identity · Digital · Growth
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <p className="max-w-3xl text-balance text-xl leading-[1.45] tracking-[-0.02em] text-[#E7DCC1]/68 sm:text-2xl lg:text-3xl">
                Tell us where the business is going, what is getting in the way, and what you want the work to change.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <Reveal>
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div className="section-label">Project inquiry</div>
                <h2 className="mt-6 max-w-lg text-balance text-[clamp(2.8rem,4.7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                  A focused first step.
                </h2>
                <p className="mt-7 max-w-md text-sm leading-7 text-[#E7DCC1]/60">
                  The details below help us understand the opportunity before we speak. If a live conversation is more useful, you can schedule one directly.
                </p>
                <div className="mt-9">
                  <AnimatedButton
                    href="https://cal.com/kuikengroup/initial-conversation"
                    external
                    variant="secondary"
                  >
                    Schedule a Conversation
                  </AnimatedButton>
                </div>
                <dl className="mt-12 grid gap-7 border-t border-[#E7DCC1]/10 pt-8 text-sm">
                  <div>
                    <dt className="case-meta-label">Email</dt>
                    <dd>
                      <a href="mailto:brady@kuikengroup.com" className="text-[#E7DCC1]/72 hover:text-[#C6A972]">
                        brady@kuikengroup.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="case-meta-label">Phone</dt>
                    <dd>
                      <a href="tel:+17125417694" className="text-[#E7DCC1]/72 hover:text-[#C6A972]">
                        712-541-7694
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="case-meta-label">Based</dt>
                    <dd className="text-[#E7DCC1]/58">Midwest · Working across markets</dd>
                  </div>
                </dl>
              </aside>
            </Reveal>

            <Reveal stagger={1}>
              <div className="rounded-[2rem] border border-[#E7DCC1]/10 bg-[#111211] p-6 sm:p-9 lg:p-12">
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E7DCC1]/10 bg-[#111211] py-24 sm:py-32 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <Reveal>
              <div>
                <div className="section-label">Before we begin</div>
                <h2 className="mt-6 text-balance text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                  A few useful answers.
                </h2>
              </div>
            </Reveal>
            <div className="border-t border-[#E7DCC1]/10">
              {faqs.map(([question, answer], index) => (
                <Reveal key={question} stagger={index}>
                  <details className="group border-b border-[#E7DCC1]/10 py-7">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                      <span>{question}</span>
                      <span aria-hidden="true" className="motion-ui text-[#C6A972] group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pt-5 text-sm leading-7 text-[#E7DCC1]/60">{answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
