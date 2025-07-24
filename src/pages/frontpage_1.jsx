import { useEffect } from "react";
import { FaSquareFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

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
      <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>

      {/* Front Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center space-y-15">
        <p className="roboto-bold-italic tracking-[-0.1em] text-[128px] md:text-[256px] leading-none">EZRA</p>
        <p className="merriweather-normal text-[48px] md:text-[64px] leading-none">
          Launching
          <br />
          Soon!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2">
          <p className="inter-normal text-[28px] md:text-[32px] px-4">
            Connecting Believers Under One Platform
          </p>
          <div className="inter-normal rounded-lg text-[24px] mt-4">
            Contact Us!
          </div>
          <p className="inter-bold text-[18px]">info@theezraco.com</p>

          {/* Socials */}
          <div className="flex space-x-4">
            <div className="text-[32px]">
              <FaSquareFacebook />
            </div>
            <div className="text-[32px]">
              <FaInstagram />
            </div>
            <div className="text-[32px]">
              <FaXTwitter />
            </div>
            <div className="text-[32px]">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
