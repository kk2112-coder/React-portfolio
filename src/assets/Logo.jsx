import React from "react";

/**
 * Professional Krishan Kant Engineering Logo
 * High-precision vector emblem featuring:
 * - Frosted squircle chassis with holographic cyan-to-purple gradient border
 * - Interlocking geometric dual "K" monogram (KK) merged with forward code execution chevrons (>> / </>)
 * - Specular glass highlight & quantum AI core node
 */
export function LogoIcon({ size = 38, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 40 40"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_4px_12px_rgba(6,182,212,0.25)]"
        aria-hidden="true"
      >
        <defs>
          {/* Chassis Background */}
          <linearGradient id="kk-chassis-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#090d16" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0.98" />
          </linearGradient>

          {/* Holographic Border */}
          <linearGradient id="kk-chassis-border" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="45%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Primary K (Cyan / Electric Sky) */}
          <linearGradient id="kk-primary-grad" x1="10" y1="10" x2="22" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          {/* Secondary K / Fast-Forward Chevrons (Indigo / Purple) */}
          <linearGradient id="kk-secondary-grad" x1="20" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* AI Spark Core Glow */}
          <radialGradient id="kk-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="60%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Squircle Chassis with Holographic Bevel */}
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          fill="url(#kk-chassis-bg)"
          stroke="url(#kk-chassis-border)"
          strokeWidth="1.5"
        />

        {/* Frosted Specular Inner Rim */}
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="9.5"
          fill="none"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* ── Monogram: First "K" Vertical Spine ── */}
        <path
          d="M12.5 11V29"
          stroke="url(#kk-primary-grad)"
          strokeWidth="2.75"
          strokeLinecap="round"
        />

        {/* ── First "K" Upper & Lower Diagonal Arms ── */}
        <path
          d="M14 20L21 12"
          stroke="url(#kk-primary-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 20L21 28"
          stroke="url(#kk-primary-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* ── Second "K" Interlocking Fast-Forward Chevrons (>> / Code Prompt) ── */}
        <path
          d="M20.5 19.5L27.5 12"
          stroke="url(#kk-secondary-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20.5 20.5L27.5 28"
          stroke="url(#kk-secondary-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* ── Central Quantum AI Vertex Spark ── */}
        <circle cx="20.5" cy="20" r="1.6" fill="url(#kk-core-glow)" />
        <circle cx="20.5" cy="20" r="0.75" fill="#ffffff" />

        {/* ── Terminal Code Prompt Accent Notch ── */}
        <circle cx="28" cy="12" r="1" fill="#38bdf8" />
      </svg>
    </div>
  );
}

/**
 * Full Professional Logo with Wordmark and Status Telemetry
 */
export default function Logo({
  variant = "full", // "icon" | "full" | "compact"
  size = 38,
  showStatus = true,
  className = "",
}) {
  if (variant === "icon") {
    return <LogoIcon size={size} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={size} />

      <div className="flex flex-col">
        {/* Wordmark */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-sm font-extrabold text-slate-100 dark:text-slate-100 tracking-tight">
            Krishan
          </span>
          <span className="text-sm font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
            Kant
          </span>
        </div>

        {/* Subtitle / Availability Badge */}
        {showStatus ? (
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] text-emerald-400 font-medium tracking-tight">
              Available for work
            </span>
          </div>
        ) : (
          <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase pt-0.5">
            Full-Stack &amp; AI
          </span>
        )}
      </div>
    </div>
  );
}
