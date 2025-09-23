import NavBar from "../components/navbar";
import StartSection from "../components/frontpage/StartSection";
import MissionVisionSection from "../components/frontpage/MissionVisionSection";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <NavBar />
      </div>
      
      {/* Hero Section */}
      <StartSection />
      
      {/* Blue Section */}
      <MissionVisionSection className="scroll-mt-20"/>
    </div>
  );
}
