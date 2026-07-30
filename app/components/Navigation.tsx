"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const previousScroll = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 18);
      setHidden(currentScroll > 180 && currentScroll > previousScroll.current && !open);
      previousScroll.current = currentScroll;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      onFocus={() => setHidden(false)}
      className={`site-navigation motion-layout fixed inset-x-0 top-0 z-50 ${hidden ? "-translate-y-full" : "translate-y-0"} ${
        scrolled
          ? "border-b border-[#E7DCC1]/7 bg-[#0D0D0D]/72 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`motion-layout mx-auto flex max-w-[90rem] items-center justify-between px-6 sm:px-8 lg:px-12 ${
          scrolled ? "py-2.5" : "py-5"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3" aria-label="Kuiken Group home">
          <Image
            src="/kuiken-logo-white.png"
            alt=""
            width={75}
            height={63}
            priority
            className={`motion-layout w-auto ${scrolled ? "h-8 opacity-80" : "h-11"}`}
          />
          <div>
            <div className={`motion-layout text-[9px] uppercase tracking-[0.34em] text-[#C6A972] sm:text-[10px] ${scrolled ? "h-0 -translate-y-1 overflow-hidden opacity-0" : "h-3 opacity-100"}`}>
              Marketing Firm
            </div>
            <div className={`motion-layout text-xs font-semibold tracking-[0.23em] text-[#E7DCC1] sm:text-sm ${scrolled ? "mt-0 opacity-75" : "mt-0.5"}`}>
              KUIKEN GROUP
            </div>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-9 text-[10px] uppercase tracking-[0.22em] text-[#E7DCC1]/68 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link py-2 hover:text-[#C6A972]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="motion-ui px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E7DCC1]/68 hover:text-[#C6A972]"
          >
            Portal
          </Link>
          <Link
            href="/contact"
            className="gold-button motion-ui rounded-full bg-[#C6A972] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D0D0D] hover:-translate-y-0.5 hover:bg-[#D3B987]"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DCC1]/15 bg-[#151515]/70 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span className={`motion-ui absolute left-0 top-1 h-px w-5 bg-[#E7DCC1] ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`motion-ui absolute bottom-1 left-0 h-px w-5 bg-[#E7DCC1] ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`motion-layout fixed inset-0 z-40 bg-[#0D0D0D] px-8 pt-28 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col border-t border-[#E7DCC1]/10">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-[#E7DCC1]/10 py-6 text-2xl font-medium tracking-[-0.03em] text-[#E7DCC1]"
            >
              <span>{link.label}</span>
              <span className="text-sm text-[#C6A972]">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 grid gap-3">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="rounded-full border border-[#C6A972]/35 px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E7DCC1]"
          >
            Portal
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#C6A972] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0D0D0D]"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </header>
  );
}
