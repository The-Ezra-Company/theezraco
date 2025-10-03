import { useEffect, useRef, useState } from "react";

export default function EzraIntro() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // <- numeric, not boolean

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const y = window.scrollY;
      const p = (y - sectionTop) / sectionHeight;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[350vh] transition-colors duration-700 ${
        progress >= 0.45 ? "bg-white" : "bg-black"
      }`}
    >
      <div className="sticky top-0 h-screen w-full">
        <div className="relative h-full w-full">
          {/* TEXT MESSAGES */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            {/* "Out of this Challenge" */}
            <span
              className={`lato-regular block w-full text-center text-[24px] text-white transition-all duration-700 md:text-[80px] ${
                progress >= -0.1 && progress <= 0.2
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Out of this Challenge
            </span>

            {/* "We Created" */}
            <span
              className={`lato-regular absolute inset-0 block text-center text-[24px] text-white transition-all duration-700 md:text-[80px] ${
                progress > 0.2 && progress <= 0.45
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We Created
            </span>
          </div>

          {/* Phone Image*/}
          <div
            className={`relative mx-auto transition-transform justify-center flex flex-row duration-[1000ms] ease-out ${
              progress > 0.45 ? "translate-y-[10vh]" : "translate-y-full"
            }`}
          >
            {/* The Image */}
            <img
              src="/ezra_phone.png"
              alt="Ezra phone"
              className="h-auto object-contain mt-[20vh] md:mt-[0vh] w-[85vh]"
            />

            {/* The Text */}
            <span
              className="lato-bold absolute inset-0 md:mb-[35vh] flex items-center justify-center text-white md:text-[32px]"
            >
              The Townhall for All Christians Alike
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
