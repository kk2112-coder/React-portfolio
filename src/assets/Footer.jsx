import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/80 border border-purple-400/40 text-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      {/* Sleek Minimal Footer */}
      <footer className="border-t border-white/10 bg-[#060714] py-10 px-6 sm:px-12 text-slate-400 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-full border border-purple-400/40 bg-slate-900/80 flex items-center justify-center text-xs font-bold text-cyan-300">
              KK
            </div>
            <div>
              <p className="text-slate-200 font-semibold text-xs sm:text-sm">
                Krishan Kant • AI &amp; Web UI Portfolio
              </p>
              <p className="text-[11px] text-slate-500">
                &copy; {currentYear} Krishan Kant. Crafted with cosmic aesthetics &amp; modern React.
              </p>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex items-center gap-5 font-medium">
            <button onClick={() => scrollTo("home")} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("work")} className="hover:text-white transition-colors">
              Work
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">
              Contact
            </button>
            <Link to="/resume" className="hover:text-cyan-400 transition-colors">
              Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.instagram.com/kkrajput_002/", Icon: FaInstagram, label: "Instagram" },
              { href: "https://github.com/kk2112-coder", Icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/krishan-kant-615740305/", Icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://x.com/", Icon: FaTwitter, label: "Twitter" },
            ].map(({ href, Icon, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Icon className="text-xs" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}