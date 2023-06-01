import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-[1100px] mx-auto max-[1150px]:w-[1000px] max-[1050px]:w-[900px] max-[950px]:w-[800px] max-[850px]:w-full main-content max-[850px]:flex max-[850px]:flex-col max-[850px]:items-center">
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
