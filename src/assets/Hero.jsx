import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroPlanetaryOrb, IridescentOrb, CrystalPrism } from "./IridescentSpheres";

const ROLES = [
  "Creative AI & Web Developer",
  "React & Next.js Engineer",
  "Interactive UI/UX Designer",
  "Full-Stack Web Architect",
];

export default function Hero({ onOpenAI }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) setDeleting(true);
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
          }
        }
      },
      deleting ? 45 : text === current ? 1800 : 85
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0 cosmic-nebula"
    >
      {/* Top-left Glowing 3D Iridescent Pearl matching reference UI */}
      <div className="absolute top-12 left-6 lg:left-24 z-10 hidden sm:block animate-float">
        <IridescentOrb size={95} glowColor="purple" />
      </div>

      {/* Ambient background particles & grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Main Hero Container */}
      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[82vh]">
        
        {/* ── Left Column: Typography & Action Buttons ── */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-10">
          
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/25 backdrop-blur-md w-fit shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-cyan-300 uppercase">
              AI User Interface Portfolio
            </span>
          </div>

          {/* Heading matching reference UI layout */}
          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-medium text-slate-300">
              Creative UI Designer &amp; Developer
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Krishan Kant
            </h1>
            <p className="text-base sm:text-lg font-medium text-purple-300/90 pt-1">
              Based in India • Building Next-Gen Web &amp; AI Experiences
            </p>
          </div>

          {/* Dynamic Typewriter Role */}
          <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-cyan-400 bg-slate-950/40 border border-white/10 px-4 py-2 rounded-xl w-fit backdrop-blur-md">
            <span>&gt;</span>
            <span>{text}</span>
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>

          {/* Bio paragraph */}
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
            Crafting responsive, high-performance web applications and sleek intelligent user interfaces.
            Combining modern React engineering with dynamic animations, glassmorphism aesthetics, and full-stack capabilities.
          </p>

          {/* CTA Action Buttons matching reference UI pills */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Pill 1: Hire Me (frosted glass pill) */}
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-cyan-400/50 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </button>

            {/* Pill 2: Download CV (purple/magenta gradient pill matching reference) */}
            <a
              href="/Krishan-Kant-Resume.pdf"
              download="Krishan-Kant-Resume.pdf"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(244,114,182,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>

            {/* Pill 3: Ask AI Assistant */}
            {onOpenAI && (
              <button
                onClick={onOpenAI}
                className="px-5 py-3 rounded-full bg-purple-900/30 hover:bg-purple-800/40 border border-purple-500/40 text-cyan-300 font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-400 flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-cyan-400">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
                </svg>
                <span>Ask AI Agent</span>
              </button>
            )}
          </div>

          {/* Quick Metrics / Stats Pills */}
          <div className="pt-4 grid grid-cols-3 gap-3 max-w-md">
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-center">
              <span className="block text-xl font-black text-cyan-400">6+</span>
              <span className="text-[11px] text-slate-400">Featured Projects</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-center">
              <span className="block text-xl font-black text-purple-400">8+</span>
              <span className="text-[11px] text-slate-400">Core Tech Stacks</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-center">
              <span className="block text-xl font-black text-pink-400">100%</span>
              <span className="text-[11px] text-slate-400">Dedication</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: 3D Iridescent Planetary Orb System matching reference ── */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-8">
          <HeroPlanetaryOrb />

          {/* Floating UI Chips */}
          <div className="absolute top-4 right-2 sm:right-6 px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-2 animate-float-slow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>React &amp; Vite</span>
          </div>

          <div className="absolute bottom-6 left-2 sm:left-4 px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-2 animate-float">
            <span>✨</span>
            <span>Intelligent UI Systems</span>
          </div>
        </div>
      </div>

      {/* Bottom-left Prismatic Crystal Gem */}
      <div className="absolute bottom-4 left-6 hidden xl:block">
        <CrystalPrism size={85} />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll down to about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
          Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </button>
    </section>
  );
}