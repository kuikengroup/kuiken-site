import Image from "next/image";
import Container from "../layout/Container";
import Reveal from "../Reveal";

type CaseStudyGalleryProps = {
  variant: "lawn" | "kuiken";
};

export default function CaseStudyGallery({ variant }: CaseStudyGalleryProps) {
  const lawn = variant === "lawn";
  const image = lawn
    ? "/work/lawn-fadez-homepage-v2.jpg"
    : "/work/kuiken-identity-logo-v3.jpg";

  return (
    <section
      aria-label={`${lawn ? "Lawn Fadez" : "Kuiken Group"} project gallery`}
      className={`border-y border-[#E7DCC1]/10 py-20 sm:py-28 lg:py-36 ${
        lawn ? "bg-[#111A14]" : "bg-[#111211]"
      }`}
    >
      <Container>
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="image-reveal relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 sm:min-h-[46rem]">
              <Image
                src={image}
                alt={
                  lawn
                    ? "Detail of the Lawn Fadez website typography and lawn photography"
                    : "Detailed view of Kuiken Group brand stationery"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 68vw"
                className={`object-cover ${lawn ? "object-left" : "scale-110 object-left"}`}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="image-reveal relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={image}
                  alt={
                    lawn
                      ? "Lawn Fadez landscape photography detail"
                      : "Close crop of the Kuiken Group identity system"
                  }
                  fill
                  sizes="(max-width: 1024px) 50vw, 32vw"
                  className={`object-cover ${lawn ? "scale-125 object-right" : "scale-125 object-center"}`}
                />
              </div>
              <div
                className={`flex min-h-72 flex-col justify-between rounded-[2rem] border p-8 ${
                  lawn
                    ? "border-[#D8EFAE]/20 bg-[#D8EFAE] text-[#102016]"
                    : "border-[#C6A972]/20 bg-[#151615] text-[#E7DCC1]"
                }`}
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em]">
                  {lawn ? "Identity direction" : "Brand principle"}
                </span>
                <p className="text-4xl font-semibold leading-[0.92] tracking-[-0.055em]">
                  {lawn ? (
                    <>Precise.<br />Fresh.<br />Local.</>
                  ) : (
                    <>Luxury comes<br />from restraint.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
