import React from "react";

/**
 * 3D Iridescent Floating Spheres, Planetary Rings, and Crystal Prisms
 * Exact aesthetic matching the reference portfolio UI
 */

export function IridescentOrb({ size = 120, className = "", glowColor = "purple" }) {
  const glowShadow =
    glowColor === "cyan"
      ? "shadow-[0_0_50px_rgba(56,189,248,0.5)]"
      : glowColor === "pink"
      ? "shadow-[0_0_50px_rgba(244,114,182,0.5)]"
      : "shadow-[0_0_60px_rgba(192,132,252,0.55)]";

  return (
    <div
      className={`relative rounded-full select-none pointer-events-none ${glowShadow} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* 3D Iridescent sphere body */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 32% 28%,
            #ffffff 0%,
            #f5d0fe 14%,
            #c084fc 32%,
            #818cf8 52%,
            #38bdf8 68%,
            #312e81 85%,
            #0f172a 100%)`,
          boxShadow: `
            inset -8px -12px 25px rgba(15, 23, 42, 0.95),
            inset 6px 8px 18px rgba(255, 255, 255, 0.75),
            0 10px 30px rgba(147, 51, 234, 0.45)
          `,
        }}
      />

      {/* Glossy specular highlight reflection */}
      <div
        className="absolute top-[14%] left-[20%] w-[32%] h-[22%] rounded-full bg-white/70 blur-[1px] transform -rotate-25 pointer-events-none"
      />
      <div
        className="absolute bottom-[16%] right-[18%] w-[25%] h-[15%] rounded-full bg-cyan-400/40 blur-[4px] pointer-events-none"
      />
    </div>
  );
}

/**
 * Hero Planetary Orb with Luminous Tilted Orbit Rings
 * Exact recreation of the planetary orb system in the reference hero screen
 */
export function HeroPlanetaryOrb({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      {/* Outer ambient cosmic nebula aura */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-purple-600/25 via-cyan-500/20 to-pink-500/20 blur-[70px] animate-pulse" />

      {/* Outer tilted planetary ring */}
      <div
        className="absolute w-[340px] h-[120px] rounded-[50%] border-[2px] border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.5)] transform -rotate-[28deg] animate-orbit-reverse"
        style={{
          background: "linear-gradient(90deg, rgba(56,189,248,0.2) 0%, transparent 50%, rgba(192,132,252,0.3) 100%)",
        }}
      />

      {/* Inner tilted planetary ring */}
      <div
        className="absolute w-[280px] h-[90px] rounded-[50%] border-[1.5px] border-purple-400/60 shadow-[0_0_20px_rgba(192,132,252,0.6)] transform -rotate-[28deg] animate-orbit"
        style={{
          background: "linear-gradient(90deg, rgba(244,114,182,0.25) 0%, transparent 60%, rgba(56,189,248,0.3) 100%)",
        }}
      />

      {/* Main 3D Iridescent Orb */}
      <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full animate-float">
        <div
          className="w-full h-full rounded-full shadow-[0_0_70px_rgba(168,85,247,0.6)]"
          style={{
            background: `radial-gradient(circle at 35% 28%,
              #ffffff 0%,
              #fae8ff 15%,
              #d8b4fe 30%,
              #a855f7 48%,
              #38bdf8 68%,
              #1e1b4b 86%,
              #090d16 100%)`,
            boxShadow: `
              inset -12px -16px 35px rgba(5, 7, 20, 0.95),
              inset 8px 12px 25px rgba(255, 255, 255, 0.8),
              0 20px 45px rgba(147, 51, 234, 0.5)
            `,
          }}
        />

        {/* Specular highlights */}
        <div className="absolute top-[16%] left-[22%] w-[36%] h-[24%] rounded-full bg-white/75 blur-[1px] transform -rotate-20" />
        <div className="absolute bottom-[20%] right-[16%] w-[30%] h-[18%] rounded-full bg-cyan-300/40 blur-[5px]" />
      </div>

      {/* Companion Small Floating Iridescent Orb (top-left) */}
      <div className="absolute -top-6 -left-4 z-20 animate-float-reverse">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-[0_0_35px_rgba(56,189,248,0.6)]"
          style={{
            background: `radial-gradient(circle at 32% 26%,
              #ffffff 0%,
              #e0f2fe 18%,
              #38bdf8 45%,
              #a855f7 70%,
              #0f172a 100%)`,
            boxShadow: `
              inset -5px -8px 18px rgba(15, 23, 42, 0.9),
              inset 4px 6px 12px rgba(255, 255, 255, 0.85)
            `,
          }}
        />
        {/* Ring around companion orb */}
        <div className="absolute -inset-2 rounded-[50%] border border-cyan-300/50 transform -rotate-[35deg] pointer-events-none" />
      </div>

      {/* Tiny luminous celestial particle */}
      <div className="absolute bottom-4 -right-2 z-20 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 shadow-[0_0_20px_#f472b6] animate-float-slow" />
    </div>
  );
}

/**
 * Prismatic Crystal Facet Gem
 * Matching bottom-left and bottom-right crystal gems in the reference UI
 */
export function CrystalPrism({ size = 100, className = "" }) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 1.3 }}
    >
      <svg
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] animate-float-slow"
      >
        <defs>
          <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="facet2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ec4899" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="facet4" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Crystal Facets */}
        <polygon points="50,5 85,38 50,75 15,38" fill="url(#facet1)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
        <polygon points="50,5 85,38 95,85 50,125" fill="url(#facet2)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
        <polygon points="50,5 15,38 5,85 50,125" fill="url(#facet3)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
        <polygon points="50,75 85,38 95,85 50,125" fill="url(#facet4)" opacity="0.85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
        <polygon points="50,75 15,38 5,85 50,125" fill="url(#facet1)" opacity="0.9" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />

        {/* Internal refraction lines */}
        <line x1="50" y1="5" x2="50" y2="125" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        <line x1="15" y1="38" x2="85" y2="38" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
        <line x1="5" y1="85" x2="95" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * Concentric Glowing Planetary Orbit Rings
 * Used in the About section and background frames
 */
export function PlanetaryOrbitFrame({ size = 380, className = "", children }) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer subtle ring */}
      <div
        className="absolute inset-0 rounded-full border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-orbit"
        style={{ animationDuration: "35s" }}
      />

      {/* Mid glowing elliptical orbit */}
      <div
        className="absolute inset-6 rounded-full border-[1.5px] border-cyan-400/35 shadow-[0_0_25px_rgba(56,189,248,0.25)] animate-orbit-reverse"
        style={{ animationDuration: "25s" }}
      />

      {/* Inner glowing ring */}
      <div className="absolute inset-14 rounded-full border border-pink-400/30 shadow-[0_0_20px_rgba(244,114,182,0.2)]" />

      {/* Ambient background glow */}
      <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-purple-900/30 via-indigo-950/40 to-cyan-950/30 blur-xl" />

      {/* Center content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
