import React from "react";
import { Link } from "react-router-dom";

/**
 * AppleFooter Component
 * Replicates Apple's signature website footer with numbered footnotes,
 * multi-column sitemap directory, legal disclaimers, and back-to-top control.
 */
export default function AppleFooter() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000000] text-[#86868b] text-[11px] sm:text-xs border-t border-white/[0.08] pt-12 pb-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ── Footnotes ── */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8 text-[#6e6e73] leading-relaxed">
          <p>
            1. Performance claims and Core Web Vitals metrics are benchmarked against React 19 production builds running on modern Chromium and WebKit rendering engines with hardware acceleration enabled.
          </p>
          <p>
            2. Apple Intelligence and generative UI features in this portfolio are simulated and powered by client-side inference patterns and Google Gemini API integration readiness.
          </p>
          <p>
            3. Master of Computer Applications (M.C.A.) degree is currently in progress at Dr. A.P.J. Abdul Kalam Technical University (AKTU) (2025–2027). Bachelor of Computer Applications (B.C.A.) completed at Chaudhary Charan Singh University (CCSU).
          </p>
          <p>
            4. Available for full-time frontend and full-stack software development roles, freelance contract opportunities, and creative UI engineering worldwide.
          </p>
        </div>

        {/* ── Directory Sitemap Columns ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-4">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Explore Flagships</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">
                  Phishing Detector
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">
                  LifeOS Mobile
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">
                  Women Security Portal
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">
                  NowFloat Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">
                  AI Interface Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Core Architecture</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo("bento")} className="hover:text-white transition-colors">
                  K1 Pro Silicon Chip
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
                  React 19 &amp; Next.js
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
                  Tailwind CSS v4 &amp; Glass
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
                  Node.js &amp; Firebase
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("specs")} className="hover:text-white transition-colors">
                  React Native Mobile
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Credentials &amp; Resume</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resume" className="hover:text-white transition-colors">
                  Full Interactive Resume &rarr;
                </Link>
              </li>
              <li>
                <a href="/Krishan-Kant-Resume.pdf" download="Krishan-Kant-Resume.pdf" className="hover:text-white transition-colors">
                  Download Resume (PDF)
                </a>
              </li>
              <li>
                <button onClick={() => scrollTo("bento")} className="hover:text-white transition-colors">
                  MCA (AKTU) 2025–2027
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("bento")} className="hover:text-white transition-colors">
                  BCA (CCSU) 2022–2025
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-tight">Connect with Krishan</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:kkrishankant17@gmail.com" className="hover:text-white transition-colors">
                  kkrishankant17@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/krishan-kant-615740305/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/kk2112-coder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kkrajput_002/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram (@kkrajput_002)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Apple Legal Row ── */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#6e6e73]">
          <div>
            Copyright &copy; {currentYear} Krishan Kant. All rights reserved. Crafted with Apple aesthetic &amp; React 19.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">
              Terms of Use
            </button>
            <span>|</span>
            <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">
              Site Map
            </button>
            <span>|</span>
            <span className="text-[#a1a1a6]">India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
