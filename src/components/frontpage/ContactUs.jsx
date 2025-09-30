import { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export function ContactUs() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/40">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-bottom bg-no-repeat blur-[2px] md:bg-cover" />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 mx-auto mt-[25vh] flex h-full max-w-7xl flex-col px-8 py-16 text-center text-white transition-all duration-700 md:py-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
      >
        {/* Header */}
        <p
          ref={ref}
          className={`roboto-bold-italic text-[48px] md:text-[96px]`}
        >
          Interested?
        </p>
        <p ref={ref} className={`lato-regular text-[32px] md:text-[56px]`}>
          Contact Us!
        </p>

        {/* Socials */}
        <div className="mt-[6vh] flex w-full justify-center gap-4 text-[32px] md:text-[48px]">
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
          <FaFacebook />
        </div>
        <div className="mt-[1vh] flex items-center justify-center text-[24px]">
          <MdOutlineEmail className="mt-[6px] mr-[12px] text-[32px] md:text-[48px]" />
          info@theezraco.com
        </div>
      </div>
    </div>
  );
}
