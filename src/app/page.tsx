import CustomCursor from "@/components/home/CustomCursor";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import IntroCards from "@/components/home/IntroCards";
import TechMarquee from "@/components/home/TechMarquee";
import Journey from "@/components/home/Journey";

export default function Home() {
  return (
    <div className="cursor-none-desktop" style={{ position: "relative" }}>
      <CustomCursor />
      <Hero />
      <StatsBar />
      <IntroCards />
      <TechMarquee />
      <Journey />
    </div>
  );
}
