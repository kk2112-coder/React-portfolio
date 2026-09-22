import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

/**
 * Left Vertical Floating Glass Dock
 * Matches the reference portfolio UI dock pinned on the left edge
 */
export function LeftDock({ onOpenAI }) {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Scroll spy to detect active section
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "work", "contact"];
    const handleScroll = () => {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollTo = (id) => {
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
    {
      id: "home",
      label: "Home",
      action: () => scrollTo("home"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-10.5Z" />
        </svg>
      ),
    },
    {
      id: "about",
      label: "About Me",
      action: () => scrollTo("about"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      ),
    },
    {
      id: "work",
      label: "Recent Work",
      action: () => scrollTo("work"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      action: () => scrollTo("contact"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "ai",
      label: "AI Portfolio Assistant",
      action: onOpenAI,
      highlight: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
        </svg>
      ),
    },
    {
      id: "resume",
      label: "View Resume",
      isLink: true,
      to: "/resume",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center"
      aria-label="Sidebar navigation"
    >
      {/* Vertical Pill Container */}
      <div className="relative flex flex-col items-center gap-2 p-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          const content = (
            <button
              key={item.id}
              onClick={item.action}
              aria-label={item.label}
              className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.7)] scale-105"
                  : item.highlight
                  ? "text-cyan-400 hover:text-white hover:bg-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.icon}

              {/* Floating Tooltip */}
              <span className="absolute left-14 px-3 py-1 rounded-md text-xs font-medium text-white bg-slate-900/90 border border-white/10 shadow-lg pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          );

          if (item.isLink) {
            return (
              <Link
                key={item.id}
                to={item.to}
                aria-label={item.label}
                className="group relative flex items-center justify-center w-11 h-11 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.icon}
                <span className="absolute left-14 px-3 py-1 rounded-md text-xs font-medium text-white bg-slate-900/90 border border-white/10 shadow-lg pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap z-50">
                  {item.label}
                </span>
              </Link>
            );
          }

          return content;
        })}

        {/* Divider & Dock Theme Toggle */}
        <div className="w-6 h-[1px] bg-white/15 my-1" />
        <ThemeToggle compact={true} />
      </div>
    </aside>
  );
}

export default LeftDock;
