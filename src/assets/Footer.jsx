import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo, { LogoIcon } from "./Logo";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaExternalLinkAlt,
  FaCheck,
  FaCopy,
  FaIdBadge,
  FaRobot,
  FaShieldAlt,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

export default function Footer({ onOpenAI, onOpenID }) {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "kkrishankantrajput2112@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/15 bg-slate-950/70 backdrop-blur-2xl text-slate-400 text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient glowing accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute -top-32 left-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand, Identity & Current Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoIcon size={42} />
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-slate-100 text-base">Krishan</span>
                  <span className="font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent text-base">
                    Kant
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-mono pt-1">Full-Stack &amp; AI Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              M.C.A. scholar at AKTU crafting responsive web architectures, intelligent heuristic cybersecurity tools, and cross-platform mobile apps with modern glassmorphism.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-[11px] font-medium text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Work &amp; Contracts</span>
            </div>

            {/* Academic Credentials */}
            <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">🎓</span>
                <span>M.C.A. (2025–2027) • AKTU</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-400">📜</span>
                <span>B.C.A. (2022–2025) • 1st Division</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Quick Access */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              <span>Navigation</span>
            </div>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo("hero")}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-slate-600">01.</span>
                  <span>Home &amp; Hero Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("projects")}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-slate-600">02.</span>
                  <span>Projects &amp; System Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-slate-600">03.</span>
                  <span>About &amp; Technical Skills</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-slate-600">04.</span>
                  <span>Contact &amp; Inquiries</span>
                </button>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="hover:text-purple-300 text-slate-300 font-medium transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">05.</span>
                  <span>Official Resume</span>
                  <FaExternalLinkAlt className="text-[10px] text-purple-400 ml-1" />
                </Link>
              </li>
            </ul>

            {/* Quick Interactive Tool Buttons */}
            <div className="pt-2 space-y-2">
              {onOpenID && (
                <button
                  type="button"
                  onClick={onOpenID}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FaIdBadge className="text-cyan-400" />
                    <span>View 3D Office ID Badge</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">L-4 PASS</span>
                </button>
              )}

              {onOpenAI && (
                <button
                  type="button"
                  onClick={onOpenAI}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-purple-500/15 border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-purple-300 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FaRobot className="text-purple-400" />
                    <span>Ask AI Assistant</span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-400">⌘K</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 3: Featured Systems & Tech */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              <span>Featured Systems</span>
            </div>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://phishguard00.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      Phishing Detector
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Live</span>
                  </div>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400">
                    URL Heuristic &amp; Threat Engine
                  </p>
                </a>
              </li>

              <li>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">LifeOS Mobile</span>
                    <span className="text-[10px] font-mono text-cyan-400">Expo Native</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Personal intelligence OS in React Native
                  </p>
                </div>
              </li>

              <li>
                <a
                  href="https://womensecurity.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-xl bg-white/[0.03] hover:bg-pink-500/10 border border-white/5 hover:border-pink-400/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200 group-hover:text-pink-300">
                      Women Security App
                    </span>
                    <span className="text-[10px] font-mono text-pink-400">Live</span>
                  </div>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400">
                    Emergency Alert &amp; SOS Dispatch
                  </p>
                </a>
              </li>

              <li>
                <a
                  href="https://nowfloat1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      NowFloat UI
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">60 FPS</span>
                  </div>
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-400">
                    Kinetic Physics &amp; Web Motion
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact, Location & System Telemetry */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              <span>Connect &amp; Telemetry</span>
            </div>

            {/* Direct Email with Copy */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-slate-500 font-mono">DIRECT INBOX</span>
              <div className="flex items-center gap-1.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="truncate text-xs font-mono text-cyan-300 hover:text-cyan-200 underline"
                  title="Click to email"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 p-1.5 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy address to clipboard"
                >
                  {copiedEmail ? (
                    <FaCheck className="text-emerald-400 text-xs" />
                  ) : (
                    <FaCopy className="text-xs" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/kk2112-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all text-xs"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-sm" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/kkrajput_002/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-pink-500/15 border border-white/10 hover:border-pink-400/30 text-slate-300 hover:text-pink-300 transition-all text-xs"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-sm text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Location & Timezone */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <FaMapMarkerAlt className="text-cyan-400 shrink-0" />
              <span>Uttar Pradesh, India (IST / UTC+5:30)</span>
            </div>

            {/* System Telemetry & Architecture Badges */}
            <div className="pt-2 p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-1.5 font-mono text-[10px]">
              <div className="flex items-center justify-between text-slate-400">
                <span>Architecture</span>
                <span className="text-cyan-400 font-semibold">React 19 + Vite</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>3D Canvas</span>
                <span className="text-purple-400 font-semibold">Three.js WebGL</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Core Telemetry</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  60 FPS • Nominal
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {currentYear} Krishan Kant. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600">
              Designed with Glassmorphism UI • Powered by React 19, Tailwind CSS &amp; Three.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-sm group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-[9px] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}