"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { staggerDelay } from "../lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function Reveal({
  children,
  className = "",
  stagger = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${staggerDelay(stagger)}ms` }}
    >
      {children}
    </div>
  );
}
