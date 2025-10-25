import { useEffect, useRef, useState } from "react";

export function TheProblemPartOne() {
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
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1446569971295-057569541991?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-no-repeat bg-bottom md:bg-cover
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 md:py-[25vh] h-full flex">
        <p
          ref={ref}
          className={`
            transition-all duration-700 lato-regular max-w-prose text-white/90 text-[48px] md:text-[96px] text-center
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
          Christianity as a whole has grown,
          <br />
          <b className="lato-black">but</b>...
        </p>
      </div>
    </div>
  );
}

export function TheProblemPartTwo() {
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
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1717238978219-80f86ec51a7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-no-repeat bg-center md:bg-bottom md:bg-cover
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-[15vh] h-full flex">
        <p
          ref={ref}
          className={`
            transition-all duration-700 lato-regular max-w-prose text-white/90 text-[48px] md:text-[96px]
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
          not so much with it's <b className="lato-black">young adults</b>...
        </p>
      </div>
    </div>
  );
}

export function TheProblemPartThree() {
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
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-no-repeat bg-center md:bg-bottom md:bg-cover
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-[10vh] md:py-[15vh] h-full flex items-end">
        <p
          ref={ref}
          className={`
            transition-all duration-700 lato-regular max-w-prose text-white/90 text-[48px] md:text-[96px] text-right
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}>
          nor it's relation with what's <b className="lato-black">today</b>.
        </p>
      </div>
    </div>
  );
}