type BackgroundGlowProps = {
  className?: string;
};

export default function BackgroundGlow({ className = "" }: BackgroundGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-[#C6A972]/14 blur-[110px] ${className}`}
    />
  );
}
