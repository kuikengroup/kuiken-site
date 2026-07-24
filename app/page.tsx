import type { Metadata } from "next";
import Hero from "./components/Hero";
import HomeShell from "./components/HomeShell";
import { createMetadata } from "./lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kuiken Group | Premium Marketing & Web Design",
  description:
    "Kuiken Group is a principal-led marketing firm helping ambitious businesses sharpen their brand, strengthen their digital presence, and create clearer paths to growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <Hero />
      <HomeShell />
    </div>
  );
}
