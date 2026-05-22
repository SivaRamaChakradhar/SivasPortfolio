import IdentityGate from "./components/IdentityGate";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import JourneySection from "./components/JourneySection";
import CodingArena from "./components/CodingArena";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

export default function Home() {
  function GlobalBackground() {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Base glow blobs */}
        <div className="absolute top-[10%] right-[8%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />
        <div className="absolute top-[55%] left-[35%] h-[450px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-[30%] -left-20 h-[350px] w-[350px] rounded-full bg-blue-700/10 blur-[120px]" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:32px_32px]" />

        {/* Real glowing dots */}
        <div className="absolute left-[49%] top-[9%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_18px_5px_rgba(168,85,247,0.85)] animate-pulse" />

        <div className="absolute right-[34%] top-[28%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_22px_6px_rgba(34,211,238,0.9)] animate-pulse [animation-delay:1s]" />

        <div className="absolute right-[5%] top-[33%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.75)] animate-pulse [animation-delay:0.5s]" />

        <div className="absolute left-[51%] bottom-[48%] h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_16px_4px_rgba(192,132,252,0.85)] animate-pulse [animation-delay:1.5s]" />
      </div>
    );
  }
  return (
    <main className="relative min-h-screen text-white">
      <GlobalBackground />
      <IdentityGate>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectSection />
        <JourneySection />
        <CodingArena />
        <Feedback />
        <Footer />
      </IdentityGate>
    </main>
  );
}