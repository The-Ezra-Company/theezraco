export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* EZRA Logo */}
          <div className="flex-shrink-0">
            <h1 className="roboto-bold-italic tracking-[-0.1em] text-white text-2xl md:text-3xl">
              EZRA
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex-shrink-0 flex space-x-4">
            <button className="inter-normal nav-button">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
