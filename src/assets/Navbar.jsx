import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";

/**
 * Navbar Component: Clean, Minimal, and Highly Interactive
 */
export default function Navbar({ onOpenAI, onOpenID }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener (Cmd/Ctrl + K) to open AI Assistant
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenAI();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenAI]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    { id: "hero", label: "Home", action: () => scrollTo("hero") },
    { id: "projects", label: "Projects", action: () => scrollTo("projects") },
    { id: "about", label: "About", action: () => scrollTo("about") },
    { id: "contact", label: "Contact", action: () => scrollTo("contact") },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-white/15 dark:border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* ── Brand Logo with Availability Status ── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="group flex items-center focus:outline-none cursor-pointer h-10"
          aria-label="My Portfolio - Krishan Kant"
        >
          <Logo variant="full" size={38} showStatus={true} />
        </a>

        {/* ── Center: Clean Navigation Links ── */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-0 h-10 rounded-full bg-white/[0.06] dark:bg-slate-900/60 border border-white/15 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                link.action();
              }}
              aria-label={link.label}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer h-10 flex items-center"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/resume"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all h-10 flex items-center gap-1.5"
            aria-label="Resume"
          >
            <FaFileAlt className="text-[10px]" />
            Resume
          </Link>
        </nav>

        {/* ── Right: AI Assistant, Theme, and Socials ── */}
        <div className="flex items-center gap-2.5">
          
          {/* Interactive 3D Office ID Badge Trigger */}
          <button
            onClick={onOpenID}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 font-medium text-xs shadow-sm backdrop-blur-xl transition-all cursor-pointer group"
            title="Inspect 3D Office ID Badge"
            aria-label="View 3D Office ID Badge"
          >
            <span className="text-cyan-400 group-hover:scale-110 transition-transform">🪪</span>
            <span>ID Pass</span>
          </button>

          {/* Interactive AI Button */}
          <button
            onClick={onOpenAI}
            type="button"
            className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 hover:from-cyan-500/25 hover:via-purple-500/25 hover:to-pink-500/25 border border-cyan-400/40 hover:border-cyan-400/60 text-slate-100 font-medium text-xs shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] backdrop-blur-xl transition-all cursor-pointer group"
            title="Ask Krishan's AI Assistant (⌘K)"
          >
            <span className="text-cyan-400 group-hover:scale-110 transition-transform">✦</span>
            <span className="font-semibold">Ask AI</span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-1 py-0.2 rounded bg-black/40 text-slate-400 border border-white/10">
              KK
            </span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle compact />

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/kk2112-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 text-slate-300 hover:text-white transition-all text-sm backdrop-blur-md"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Instagram Icon Link */}
          <a
            href="https://www.instagram.com/kkrajput_002/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 text-slate-300 hover:text-pink-300 transition-all text-sm backdrop-blur-md"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 text-slate-300 hover:text-white backdrop-blur-md"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-3 rounded-2xl bg-slate-950/80 border border-white/15 p-4 shadow-2xl backdrop-blur-2xl space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenID();
            }}
            className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-cyan-300 hover:bg-white/[0.06] transition-all flex items-center gap-2"
          >
            <span>🪪</span>
            <span>View 3D Office ID Pass</span>
          </button>
          <Link
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-purple-300 hover:bg-purple-500/10 transition-all"
          >
            <FaFileAlt className="text-xs" /> Resume (PDF)
          </Link>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <a
              href="https://github.com/kk2112-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/kkrajput_002/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              Instagram
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenAI();
              }}
              className="text-cyan-400 font-semibold"
            >
              ✦ Ask AI
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
