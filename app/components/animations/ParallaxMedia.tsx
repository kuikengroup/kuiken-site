"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  strength?: number;
};

export default function ParallaxMedia({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  strength = 20,
}: ParallaxMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const rect = frame.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
      frame.style.setProperty("--parallax-y", `${progress * strength}px`);
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={`parallax-media ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
