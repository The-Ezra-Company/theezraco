import { COMPANY_NAME, navigation, ui } from '../config.js';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white/25 backdrop-blur-sm border-b border-white/20`} style={{ zIndex: ui.zIndex.navbar }}>
      <div className="max-w-7xl mx-auto p-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center sm:h-16">
          {/* EZRA Logo */}
          <div className="flex-shrink-0">
            <h1 className="roboto-bold-italic tracking-[-0.1em] text-white text-3xl md:text-5xl">
              {COMPANY_NAME}
            </h1>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden sm:flex flex-shrink-0 space-x-2 lg:space-x-4">
            {navigation.items.map((item, index) => (
              <button key={index} className="inter-normal nav-button nav-button-desktop">
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inter-normal text-white p-2 rounded-lg transition-all duration-200 hover:bg-white/20"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`sm:hidden mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.items.map((item, index) => (
              <button
                key={index}
                onClick={() => console.log(`click! ${item.label}`)}
                className="inter-normal nav-button nav-button-mobile block w-full text-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
