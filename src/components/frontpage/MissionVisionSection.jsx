export default function MissionVisionSection() {
  return (
    <div className="relative h-screen w-full bg-blue-600 overflow-hidden">
      {/* BACKGROUND IMAGE (full section) */}
      <div
        className="absolute inset-0 bg-[url('https://www.theclickcommunity.com/blog/wp-content/uploads/2019/01/macro-flower-pink-right-composition-kristin-dokoza.jpg')] bg-cover bg-right"
        aria-hidden
      />



      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 h-full">
          {/* LEFT: Mission / Vision */}
          <section className="space-y-24 lg:pr-10 flex flex-col justify-center">
            <div>
              <h2 className="roboto-bold-italic tracking-[-0.025em] text-[64px] md:text-[96px] text-white">Our Mission</h2>
              <p className="mt-6 max-w-prose text-white/90 text-[16px] md:text-[32px] leading-7">
                Bringing Believers Under Platform
              </p>
            </div>

            <div>
              <h2 className="roboto-bold-italic tracking-[-0.025em] text-[64px] md:text-[96px] text-white">The Vision</h2>
              <p className="mt-6 max-w-prose text-white/90 text-[16px] md:text-[32px] leading-10">
                Focusing on Every Community, <br/> In One Communion
              </p>
            </div>
          </section>

          {/* RIGHT: optional spacer so layout feels balanced on desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
