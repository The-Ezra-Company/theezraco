import { COMPANY_NAME, navigation, ui } from "../config.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full border-b border-white/20 bg-white/25 backdrop-blur-sm`}
      style={{ zIndex: ui.zIndex.navbar }}
    >
      <div className="mx-auto max-w-7xl p-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between sm:h-16">
          {/* EZRA Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="roboto-bold-italic text-3xl tracking-[-0.1em] text-white md:text-5xl">
              {COMPANY_NAME}
            </h1>
          </Link>

          {/* Desktop Navigation Buttons */}
          <div className="hidden flex-shrink-0 space-x-2 sm:flex lg:space-x-4">
            {navigation.items.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="inter-normal nav-button nav-button-desktop"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inter-normal rounded-lg p-2 text-white transition-all duration-200 hover:bg-white/20"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu sm:hidden ${isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"}`}
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.items.map((item, index) => (
              <Link
                to={item.link}
                className="inter-normal nav-button nav-button-mobile block w-full text-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
