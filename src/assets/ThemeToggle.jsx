import React from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Animated Theme Toggle Button (Dark / Light Mode)
 * Fits smoothly into the cosmic glassmorphism aesthetic
 */
export function ThemeToggle({ className = "", compact = false }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex items-center justify-center rounded-full transition-all duration-300 ${
        compact
          ? "w-9 h-9 border border-white/15 hover:border-cyan-400/50 bg-white/[0.06] hover:bg-white/[0.15]"
          : "px-3 py-1.5 gap-2 border border-white/15 hover:border-cyan-400/50 bg-white/[0.06] hover:bg-white/[0.15]"
      } shadow-md backdrop-blur-md cursor-pointer ${className}`}
    >
      {/* Icon container with flip/rotation animation */}
      <div className="relative flex items-center justify-center w-5 h-5 transition-transform duration-500 transform group-hover:scale-110">
        {darkMode ? (
          /* Moon Icon with cyan/purple glow */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)] transition-all duration-300"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          /* Sun Icon with golden amber glow */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </div>

      {!compact && (
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          {darkMode ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
