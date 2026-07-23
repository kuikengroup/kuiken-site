import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "split";
};

export default function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  if (align === "split") {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="section-label">{eyebrow}</div>
          <h2 className="section-title mt-5 max-w-3xl">{title}</h2>
        </div>
        {copy ? (
          <p className="max-w-2xl text-base leading-8 text-[#E7DCC1]/58 lg:justify-self-end">{copy}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <div className="section-label">{eyebrow}</div>
      <h2 className="section-title mt-5 max-w-4xl">{title}</h2>
      {copy ? <p className="mt-6 max-w-2xl text-base leading-8 text-[#E7DCC1]/58">{copy}</p> : null}
    </div>
  );
}
