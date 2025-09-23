import { useEffect, useRef, useState } from "react";

export default function MissionVisionSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/40">
      {/* background image layer */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-no-repeat bg-cover
        "
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 h-full flex items-end">
        <section className="flex flex-row justify-between w-full">
          {/* LEFT: Mission */}
          <div
            ref={ref}
            className={`
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
            <h2 className="roboto-bold-italic tracking-[-0.025em] text-[96px] text-white">Our Mission</h2>
            <p className="lato-regular max-w-prose text-white/90 text-[32px] leading-10">
              Bringing Believers Under Platform
            </p>
          </div>

          {/* Right: Vision */}
          <div
            ref={ref}
            className={`
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
            <h2 className="roboto-bold-italic tracking-[-0.025em] text-[96px] text-white">The Vision</h2>
            <p className="lato-regular max-w-prose text-white/90 text-[32px] leading-10">
              Focusing on Every Community, <br /> In One Communion
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
