import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-[1100px] mx-auto max-[1150px]:w-[1000px] max-[1050px]:w-[900px]">
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
