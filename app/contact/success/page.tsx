import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AnimatedButton from "../../components/AnimatedButton";
import Container from "../../components/layout/Container";
import Reveal from "../../components/Reveal";
import { createMetadata } from "../../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Inquiry Received",
  description: "Your project inquiry has been sent to Kuiken Group.",
  path: "/contact/success",
  noIndex: true,
});

export default async function ContactSuccessPage() {
  const cookieStore = await cookies();

  if (!cookieStore.has("contact_submission")) {
    redirect("/contact");
  }

  return (
    <div className="flex min-h-[86vh] items-center bg-[#0D0D0D] pb-24 pt-40 text-[#E7DCC1] sm:pt-48">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A972]/40 bg-[#C6A972]/8 text-2xl text-[#C6A972]" aria-hidden="true">
              ✓
            </div>
            <div className="section-label mt-8">Inquiry received</div>
            <h1 className="mt-7 text-balance text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
              Thank you for reaching out.
            </h1>
            <p className="mx-auto mt-9 max-w-2xl text-balance text-lg leading-8 text-[#E7DCC1]/62 sm:text-xl">
              Your inquiry was accepted and sent to Kuiken Group. If you would like to continue the conversation now, choose a time that works for you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AnimatedButton href="https://cal.com/kuikengroup/initial-conversation" external>
                Schedule a Conversation
              </AnimatedButton>
              <AnimatedButton href="/work" variant="secondary">
                View Work
              </AnimatedButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
