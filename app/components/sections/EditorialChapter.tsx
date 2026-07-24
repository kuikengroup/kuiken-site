import type { ReactNode } from "react";
import Reveal from "../Reveal";

type EditorialChapterProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  index?: string;
};

export default function EditorialChapter({
  eyebrow,
  title,
  children,
  index,
}: EditorialChapterProps) {
  return (
    <section className="case-copy-grid border-t border-[#E7DCC1]/10 py-20 sm:py-28 lg:py-36">
      <Reveal>
        <div className="section-label lg:sticky lg:top-32 lg:self-start">
          {eyebrow}
        </div>
      </Reveal>
      <Reveal stagger={1}>
        <div>
          <h2 className="max-w-4xl text-balance text-[clamp(3rem,5.8vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.064em]">
            {title}
          </h2>
          <div className="case-prose mt-8 max-w-2xl text-base leading-8 text-[#E7DCC1]/64">
            {children}
          </div>
          {index ? (
            <span className="mt-12 block text-[10px] tracking-[0.25em] text-[#C6A972]">
              {index}
            </span>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
