import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

/**
 * AppleNav Component
 * Inspired by Apple's global navigation bar and sticky product sub-nav ribbon.
 * Features:
 * - Ultra-thin translucent frosted glass header
 * - Apple-style typography and minimal icon spacing
 * - Sticky product ribbon with section anchors and Apple Blue CTA
 * - Siri / Apple Intelligence rainbow glowing trigger
 */
export default function AppleNav({ onOpenAI }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["overview", "intelligence", "bento", "projects", "specs", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "intelligence", label: "Apple Intelligence" },
    { id: "bento", label: "Features" },
    { id: "projects", label: "Flagships" },
    { id: "specs", label: "Tech Specs" },
    { id: "about", label: "Credentials" },
    { id: "contact", label: "Connect" },
  ];

  return (
    <>
      {/* ── 1. Global Apple Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 dark:bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.08] transition-colors duration-300">
        <div className="mx-auto max-w-7xl h-11 px-4 sm:px-8 flex items-center justify-between text-xs text-[#d2d2d7]">
          {/* Apple Logo / Monogram */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo("overview")}
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
              aria-label="Apple Style Home"
            >
              <svg viewBox="0 0 170 170" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.42-6-9.14-10.87-19.46-14.61-30.97-3.74-11.51-5.61-22.3-5.61-32.36 0-14.79 3.84-27.05 11.52-36.78 7.68-9.73 17.27-14.76 28.77-15.09 4.8.11 10.37 1.48 16.71 4.11 6.34 2.63 10.25 4.02 11.73 4.17 1.83-.24 5.92-1.72 12.28-4.44 6.36-2.72 11.83-3.95 16.42-3.69 13.37 1.08 23.86 6.06 31.47 14.93-11.75 7.18-17.5 17-17.24 29.46.22 9.8 4.02 18.06 11.41 24.78 7.39 6.72 16.14 10.5 26.25 11.35-2.29 7.08-5.32 14.28-9.1 21.61zM119.22 31.84c0-7.39 2.66-14.26 7.97-20.61 5.31-6.35 12.01-10.42 20.1-12.23.44 1.74.65 3.37.65 4.89 0 7.39-2.77 14.48-8.31 21.27-5.54 6.79-12.28 10.74-20.22 11.85-.06-1.74-.19-3.46-.19-5.17z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight text-white hidden sm:inline">
                Krishan Kant
              </span>
            </button>

            {/* Desktop Global Links */}
            <nav className="hidden md:flex items-center space-x-6 text-[#a1a1a6]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`hover:text-white transition-colors duration-200 ${
                    activeSection === item.id ? "text-white font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Header Utilities: Socials, AI trigger & Theme */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <a
              href="https://github.com/kk2112-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1a6] hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.instagram.com/kkrajput_002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1a6] hover:text-pink-400 transition-colors p-1"
              aria-label="Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://linkedin.com/in/krishan-kant-615740305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1a6] hover:text-sky-400 transition-colors p-1 hidden sm:inline"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>

            <div className="w-[1px] h-3 bg-white/20 mx-0.5" />

            {/* Dark/Light Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#a1a1a6] hover:text-white p-1"
              aria-label="Open Navigation Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── 2. Sticky Apple Product Sub-Navigation Ribbon ── */}
      <div
        className={`fixed top-11 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#161617]/90 dark:bg-[#161617]/90 bg-white/90 backdrop-blur-xl border-b border-white/[0.08] dark:border-white/[0.08] border-black/10 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl h-12 px-4 sm:px-8 flex items-center justify-between">
          {/* Sub-nav Title */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base tracking-tight text-white dark:text-white">
              Krishan Kant <span className="text-[#86868b] font-normal text-xs ml-1">Pro / 2026</span>
            </span>
          </div>

          {/* Sub-nav Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Quick in-page tabs for desktop */}
            <div className="hidden lg:flex items-center gap-4 text-xs text-[#86868b]">
              <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">
                Overview
              </button>
              <button onClick={() => scrollTo("intelligence")} className="hover:text-white transition-colors">
                Intelligence
              </button>
              <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">
                Flagships
              </button>
              <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
                Tech Specs
              </button>
            </div>

            {/* Apple Intelligence Pill Button */}
            {onOpenAI && (
              <button
                onClick={onOpenAI}
                className="relative group px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5 transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {/* Iridescent shimmer aura on hover */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-sm pointer-events-none" />
                <span className="relative z-10 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="relative z-10 font-medium">Ask AI</span>
              </button>
            )}

            {/* Resume Link */}
            <Link
              to="/resume"
              className="text-xs text-[#86868b] hover:text-[#0071e3] transition-colors hidden sm:inline"
            >
              Resume &gt;
            </Link>

            {/* Apple Blue Connect Button */}
            <button
              onClick={() => scrollTo("contact")}
              className="apple-btn-blue text-xs px-4 py-1.5 shadow-sm"
            >
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Mobile Navigation Dropdown ── */}
      {mobileMenuOpen && (
        <div className="fixed top-11 left-0 right-0 z-40 bg-[#000000]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-3.5 md:hidden animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-sm text-[#d2d2d7] hover:text-white py-1"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-[#0071e3] font-medium"
            >
              View Complete Resume &rarr;
            </Link>
            {onOpenAI && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                className="apple-btn-blue text-xs px-3.5 py-1"
              >
                Ask Apple AI
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
