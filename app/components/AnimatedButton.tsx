import Link from "next/link";
import type { ReactNode } from "react";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
};

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: AnimatedButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A972] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D0D]";

  const styles = {
    primary:
      "gold-button bg-[#C6A972] text-[#0D0D0D] shadow-[0_12px_35px_rgba(198,169,114,0.18)] hover:-translate-y-0.5 hover:bg-[#D3B987]",
    secondary:
      "border border-[#C6A972]/35 bg-[#151515]/65 text-[#E7DCC1] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#C6A972] hover:text-[#C6A972]",
    text: "px-0 text-[#C6A972] hover:text-[#E7DCC1]",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {content}
    </Link>
  );
}
