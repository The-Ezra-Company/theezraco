import { useEffect } from "react";
import { COMPANY_NAME } from '../../config.js';
import { FaAngleDoubleDown } from "react-icons/fa";


export default function StartSection() {
  // Playback useEffect
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 1.0;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-600 text-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 z-0 h-full w-full object-cover blur-sm"
        src="/bg-video_1.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        id="bg-video"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/15"></div>

      {/* Front Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center space-y-8 pt-16">
        <h1 className="roboto-bold-italic tracking-[-0.1em] text-black text-[144px] md:text-[192px] md:text-5xl">
          {COMPANY_NAME}
        </h1>
        <p className="lato-bold text-[32px] md:text-[64px] leading-none">
          Launching
          Soon
        </p>

        <div className="absolute bottom-[64px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <FaAngleDoubleDown className="text-[48px] animate-pulse text-zinc-900" />
        </div>
      </div>
    </div>
  );
}
