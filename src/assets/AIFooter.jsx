import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaArrowUp, FaTerminal } from "react-icons/fa";

export default function AIFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04050f] text-slate-400 text-xs py-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top telemetry and brand bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
          
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-purple-600 p-[1px]">
              <div className="w-full h-full rounded-[7px] bg-[#070817] flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                KK
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm">Krishan Kant</span>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Neural Core v2.6 Online</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <button onClick={() => scrollTo("hero")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Overview
            </button>
            <button onClick={() => scrollTo("capabilities")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Capabilities
            </button>
            <button onClick={() => scrollTo("projects")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollTo("terminal")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Terminal
            </button>
            <button onClick={() => scrollTo("about")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Connect
            </button>
            <Link to="/resume" className="text-purple-300 hover:text-white transition-colors">
              Resume
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer font-mono text-[11px]"
            aria-label="Back to top"
          >
            <span>Top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            © {currentYear} Krishan Kant. Designed &amp; Engineered with AI precision.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kk2112-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="text-sm" />
              <span>@kk2112-coder</span>
            </a>

            <a
              href="https://www.instagram.com/kkrajput_002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-300 flex items-center gap-1.5 transition-colors"
            >
              <FaInstagram className="text-sm" />
              <span>@kkrajput_002</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
