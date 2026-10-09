import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaGithub, FaTerminal, FaRobot, FaBars, FaTimes } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

/**
 * AINavbar Component
 * Next-Gen Cybernetic Glass Navigation Bar
 * Features:
 * - Glowing Monogram Logo with real-time neural core status
 * - Quick section links with smooth scrolling
 * - Social handles (@kk2112-coder, @kkrajput_002)
 * - AI Copilot Trigger button with keyboard shortcut hint
 * - Dark / Light theme toggle
 * - Responsive mobile drawer menu
 */
export default function AINavbar({ onOpenAI }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
    { id: "hero", label: "Overview", action: () => scrollTo("hero") },
    { id: "capabilities", label: "Capabilities", action: () => scrollTo("capabilities") },
    { id: "projects", label: "AI & Projects", action: () => scrollTo("projects") },
    { id: "terminal", label: "Terminal", action: () => scrollTo("terminal") },
    { id: "about", label: "About & Stats", action: () => scrollTo("about") },
    { id: "contact", label: "Connect", action: () => scrollTo("contact") },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060714]/85 dark:bg-[#060714]/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* ── Brand Logo with Neural Core Status ── */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Krishan Kant Home"
          >
            {/* Glowing Monogram Hexagon / Circle */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 p-[1.5px] shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-[#070817] flex items-center justify-center">
                <span className="font-mono text-sm font-black tracking-wider bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
                  KK
                </span>
              </div>
            </div>

            {/* Name & Online Status Pill */}
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white dark:text-white flex items-center gap-1.5">
                Krishan Kant
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  AI v2.6
                </span>
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] text-emerald-400">Neural Core: Active</span>
              </div>
            </div>
          </button>
        </div>

        {/* ── Desktop Navigation Links ── */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] dark:bg-slate-900/60 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/resume"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
          >
            Resume
          </Link>
        </nav>

        {/* ── Right Action Controls: AI Copilot, Theme, Socials ── */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* AI Copilot Trigger Button */}
          <button
            onClick={onOpenAI}
            type="button"
            className="relative group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30 border border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer"
            aria-label="Launch AI Copilot"
          >
            {/* Pulsing indicator orb */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <FaRobot className="text-cyan-300 group-hover:scale-110 transition-transform text-sm" />
            <span className="text-xs font-semibold text-white tracking-wide">
              AI Copilot
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-slate-400 border border-white/10">
              ⌘K
            </span>
          </button>

          {/* Dark / Light Theme Toggle */}
          <ThemeToggle compact />

          {/* GitHub Social Pill (Desktop) */}
          <a
            href="https://github.com/kk2112-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>

          {/* Instagram Social Pill (Desktop) */}
          <a
            href="https://www.instagram.com/kkrajput_002/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-pink-500/20 border border-white/10 hover:border-pink-400/40 text-slate-300 hover:text-pink-300 transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="text-base" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="lg:hidden mx-4 mt-3 rounded-2xl bg-[#090b1e]/95 border border-cyan-500/20 shadow-2xl backdrop-blur-2xl p-4 space-y-2 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              Neural Navigation
            </span>
            <span className="text-[10px] font-mono text-emerald-400">● Core Active</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] text-xs font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/[0.08] transition-all text-left"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {link.label}
              </button>
            ))}
            <Link
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-purple-500/15 text-xs font-medium text-purple-300 hover:text-white transition-all text-left"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Resume (PDF)
            </Link>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kk2112-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.instagram.com/kkrajput_002/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-pink-300"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenAI();
              }}
              className="text-xs font-bold text-cyan-300 flex items-center gap-1"
            >
              <FaRobot /> Open Copilot
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
