import NavBar from "../components/navbar";
import HeroSection from "../components/frontpage/HeroSection";
import BlueSection from "../components/frontpage/BlueSection";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <NavBar />
      </div>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Blue Section */}
      <BlueSection />
    </div>
  );
}
