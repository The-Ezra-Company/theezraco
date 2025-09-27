import { useEffect, useRef, useState } from "react";

export function EzraIntroPartOne() {
    // Scroll transition logic
    const sectionRef = useRef(null);
    const [showSecond, setShowSecond] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const el = sectionRef.current;
            if (!el) return;

            const sectionTop = el.offsetTop;
            const sectionHeight = el.offsetHeight;
            const y = window.scrollY;

            const progress = (y - sectionTop) / sectionHeight;
            setShowSecond(progress >= 0.25 && progress <= 1.0);
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
        <section ref={sectionRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center w-full">
                <div className="relative">
                    {/* First Message */}
                    <span
                        className={`lato-regular text-white text-[24px] md:text-[88px] transition-all duration-700 text-center ${showSecond ? "opacity-0 translate-y-0" : "opacity-100 translate-y-10"
                            }`}
                    >
                        Out of this Challenge
                    </span>

                    {/* Second Message */}
                    <span
                        className={`absolute inset-0 lato-regular text-white text-[24px] md:text-[88px] transition-all duration-700  text-center ${showSecond ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        We Created
                    </span>
                </div>
            </div>
        </section>
    );
}


export function EzraIntroPartTwo() {
  const sectionRef = useRef(null);
  const [sectionProgress, setSectionProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const y = window.scrollY;

      const progress = (y - sectionTop) / sectionHeight;
      setSectionProgress(progress);
      console.log(progress);
      
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative h-screen md:h-[175vh] w-full overflow-hidden flex items-center justify-center transition-colors duration-700 ${
        sectionProgress >= 0 ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* Image wrapper */}
      <div className="relative">
        {/* Phone Image */}
        <img
          src="/ezra_phone.png"
          alt="Ezra phone"
          className={`w-[50vh] md:w-[100vh] mt-[40vh] md:mt-[100vh] h-auto object-contain transform transition-transform duration-[1000ms] ease-out  ${sectionProgress >= 0 ? "translate-y-0" : "translate-y-full"}`}
        />

        {/* Text overlaid on top */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible mt-[50vh]">
          <span className={`lato-black text-white font-bold text-[24px] md:text-[48px] xl:text-[64px] mt-[vh] md:mt-[30vh] whitespace-nowrap overflow-visible text-center transform transition-all duration-[1000ms] ease-out  ${sectionProgress >= 0 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
            The Townhall for <br/> ALL Christians Alike
          </span>
        </div>
      </div>
    </div>
  );
}
