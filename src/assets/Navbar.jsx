import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

/**
 * Top Navigation Bar matching the reference portfolio UI
 * Features:
 * - Top-left social handle pills (@kkrajput_002, @kk2112-coder)
 * - Centered glowing monogram logo
 * - Smooth section links: Home, About, Work, Contact
 * - Dark/Light Theme Toggle
 * - AI Assistant launch button & Resume link
 */
export default function Navbar({ onOpenAI }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home", action: () => scrollTo("home") },
    { id: "about", label: "About", action: () => scrollTo("about") },
    { id: "work", label: "Work", action: () => scrollTo("work") },
    { id: "contact", label: "Contact", action: () => scrollTo("contact") },
  ];

  return (
    <header
      ref={mobileMenuRef}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#070817]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-8 lg:px-12">
        {/* ── Left: Social Badges matching reference (@Sourasith.design style) ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.instagram.com/kkrajput_002/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all duration-300 group"
          >
            <FaInstagram className="text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">@kkrajput_002</span>
          </a>

          <a
            href="https://github.com/kk2112-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all duration-300 group"
          >
            <FaGithub className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">@kk2112-coder</span>
          </a>
        </div>

        {/* ── Center: Monogram Logo & Nav Links ── */}
        <div className="flex items-center gap-8">
          {/* Centered Glowing Monogram Emblem */}
          <button
            onClick={() => scrollTo("home")}
            className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-purple-400/40 bg-slate-900/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-105"
            aria-label="Home"
          >
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 opacity-20 group-hover:opacity-40 transition-opacity" />
            <span className="relative text-sm font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              KK
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className="relative py-1 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>
        </div>

        {/* ── Right: Theme Toggle, AI Assistant & Resume CTA ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Theme Toggle */}
          <ThemeToggle />

          {onOpenAI && (
            <button
              onClick={onOpenAI}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 hover:from-purple-600/50 hover:to-cyan-600/50 border border-purple-400/40 text-xs font-semibold text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: "8s" }}>
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
              </svg>
              <span>AI Assistant</span>
            </button>
          )}

          <Link
            to="/resume"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.12] text-xs font-semibold text-slate-200 hover:text-white transition-all duration-300"
          >
            Resume
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 py-4 bg-[#070817]/95 backdrop-blur-2xl border-b border-white/10 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-cyan-400"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold text-white"
            >
              View Resume
            </Link>
            {onOpenAI && (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAI();
                }}
                className="px-4 py-2 rounded-xl bg-purple-600/40 border border-purple-400/40 text-xs font-semibold text-cyan-300"
              >
                AI Assistant
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
