import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-20">
        <HeroSection />
      </div>
      
    </>
  );
}
