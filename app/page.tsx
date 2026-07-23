import Hero from "./components/Hero";
import HomeShell from "./components/HomeShell";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-clip bg-[#0D0D0D] text-[#E7DCC1]">
      <Hero />
      <HomeShell />
    </div>
  );
}
