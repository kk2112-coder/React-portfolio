import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

/* ─── Nav links config ─────────────────────────────────── */
const NAV_LINKS = [
  { to: "/",        label: "Home"    },
  { to: "/work",    label: "Work"    },
  { to: "/about",   label: "About"   },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const mobileMenuRef = useRef(null);

  /* ── Scroll-based glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Close menu on route change (escape key) ── */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-cyan-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      ref={mobileMenuRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 lg:px-16">

        {/* ── Logo ── */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent transition-all duration-300 hover:scale-105"
        >
          KK.dev
        </NavLink>

        {/* ── Desktop Menu ── */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={navLinkClass} end={to === "/"}>
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop Resume CTA ── */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                isActive
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                  : "border-cyan-400/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10"
              }`
            }
          >
            Resume
          </NavLink>
        </div>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/resume"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                }`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
