import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaFileAlt, FaCompass } from "react-icons/fa";
import Logo from "./Logo";

/**
 * NotFound (404) Component
 * User-friendly, high-contrast, modern glassmorphism 404 error page.
 */
export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | Krishan Kant";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 z-10">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/15 to-pink-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl w-full mx-auto text-center relative z-10 space-y-6">
        
        {/* Logo Monogram */}
        <div className="flex justify-center pb-2">
          <Link to="/" aria-label="Return to Homepage">
            <Logo variant="full" size={44} showStatus={false} />
          </Link>
        </div>

        {/* Holographic 404 Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.5)] space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-xs font-mono text-rose-300">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>ERROR STATUS 404 • ROUTE NOT FOUND</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-white font-mono">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              Lost in Digital Space?
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              The page or route you are looking for doesn't exist, has been relocated, or is temporarily unavailable.
            </p>
          </div>

          {/* Quick Route Suggestions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-cyan-500/25 transition-all"
            >
              <FaHome className="text-sm" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/resume"
              className="px-5 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 backdrop-blur-md transition-all shadow-sm"
            >
              <FaFileAlt className="text-xs" />
              <span>View Resume</span>
            </Link>
          </div>

          {/* Additional Quick Anchors */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <a href="/#projects" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
              <FaCompass className="text-[10px]" /> Projects
            </a>
            <span className="text-slate-600">•</span>
            <a href="/#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
            <span className="text-slate-600">•</span>
            <a href="/#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
