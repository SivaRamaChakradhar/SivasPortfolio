import IdentityGate from "./components/IdentityGate";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <IdentityGate />

      <main className="overflow-scroll relative min-h-screen overflow-hidden bg-[#030712] text-white">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}