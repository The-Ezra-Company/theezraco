import NavBar from "../components/navbar";
import StartSection from "../components/frontpage/StartSection";
import MissionVisionSection from "../components/frontpage/MissionVisionSection";
import { TheProblemPartOne, TheProblemPartTwo, TheProblemPartThree } from "../components/frontpage/TheProblem";

export default function Frontpage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <NavBar />
      </div>

      {/* Start Section */}
      <StartSection />

      {/* The Problem Statement Section */}
      <TheProblemPartOne />
      <TheProblemPartTwo />
      <TheProblemPartThree />

      {/* Mission and Vision Section */}
      <MissionVisionSection className="scroll-mt-20" />
    </div>
  );
}
