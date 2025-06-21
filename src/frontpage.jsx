import { useEffect } from "react";

export default function Frontpage() {
  // Playback useEffect
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 1.0;
    }
  }, []);

  // **** RENDER ****
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg-video_1.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        id="bg-video"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex justify-center items-center h-full text-shadow-[0_15px_25px_rgb(244_237_233_/_0.25)]">
        <h1 className="text-9xl font-bold text-[rgb(244,237,233)]">
          Coming Soon...
        </h1>
      </div>
    </div>
  );
}
