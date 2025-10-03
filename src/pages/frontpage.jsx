import NavBar from "../components/navbar";
import StartSection from "../components/frontpage/StartSection";
import MissionVisionSection from "../components/frontpage/MissionVisionSection";
import { TheProblemPartOne, TheProblemPartTwo, TheProblemPartThree } from "../components/frontpage/TheProblem";
import EzraIntro from "../components/frontpage/EzraIntro";
import ContactUs from "../components/frontpage/ContactUs";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-100">
        <NavBar />
      </div>

      <div className="relative z-50">
        {/* Start Section */}
        <StartSection />

        {/* The Problem Statement Section */}
        <TheProblemPartOne />
        <TheProblemPartTwo />
        <TheProblemPartThree />
      </div>

      {/* What we're providing*/}
      <EzraIntro />

      {/* Mission and Vision Section */}
      <MissionVisionSection className="scroll-mt-20" />

      {/* Contact Us Page */}
      <ContactUs />
    </div>
  );
}
