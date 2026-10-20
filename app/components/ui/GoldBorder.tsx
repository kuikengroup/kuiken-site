/** Decorative overlay; the parent must be positioned and have a border radius. */
export default function GoldBorder({ strong = false }: { strong?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`gold-border${strong ? " gold-border-strong" : ""}`}
    />
  );
}
