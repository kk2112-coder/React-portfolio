import React from "react";

/**
 * Character Illustrations matching the exact reference UI design:
 * - Standing developer character with folded arms inside planetary orbit (About section)
 * - Sitting developer character with laptop on celestial pedestal (Contact section)
 */

export function StandingCharacterIllustration({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[260px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Ambient glow under character */}
        <ellipse cx="120" cy="305" rx="65" ry="12" fill="rgba(56,189,248,0.25)" filter="blur(8px)" />

        {/* Sneaker Shadows */}
        <ellipse cx="98" cy="298" rx="16" ry="5" fill="#0b0e24" opacity="0.6" />
        <ellipse cx="142" cy="298" rx="16" ry="5" fill="#0b0e24" opacity="0.6" />

        {/* Legs & Socks */}
        <path d="M96 235 L96 280" stroke="#f6c7a4" strokeWidth="12" strokeLinecap="round" />
        <path d="M144 235 L144 280" stroke="#f6c7a4" strokeWidth="12" strokeLinecap="round" />
        {/* White Socks */}
        <rect x="90" y="270" width="12" height="15" rx="4" fill="#ffffff" />
        <rect x="138" y="270" width="12" height="15" rx="4" fill="#ffffff" />
        {/* Sneakers */}
        <path d="M85 285 Q92 280 108 285 L108 296 Q92 298 85 296 Z" fill="#2563eb" />
        <path d="M84 294 Q94 297 109 294 L109 297 L84 297 Z" fill="#ffffff" />
        <path d="M133 285 Q148 280 155 285 L155 296 Q148 298 133 296 Z" fill="#2563eb" />
        <path d="M132 294 Q148 297 156 294 L156 297 L132 297 Z" fill="#ffffff" />

        {/* Pleated Blue Skirt */}
        <path
          d="M82 148 L158 148 L176 235 L64 235 Z"
          fill="#1d4ed8"
        />
        {/* Skirt Pleat Highlights & Shadows */}
        <path d="M95 148 L88 235" stroke="#1e40af" strokeWidth="3" />
        <path d="M110 148 L108 235" stroke="#2563eb" strokeWidth="3" />
        <path d="M120 148 L120 235" stroke="#3b82f6" strokeWidth="3" />
        <path d="M130 148 L132 235" stroke="#2563eb" strokeWidth="3" />
        <path d="M145 148 L152 235" stroke="#1e40af" strokeWidth="3" />

        {/* Torso & White Top */}
        <path
          d="M88 88 Q120 85 152 88 L154 148 L86 148 Z"
          fill="#f8fafc"
        />
        <path d="M110 88 Q120 102 130 88" fill="#f6c7a4" />

        {/* Folded Arms */}
        {/* Left Arm folded */}
        <path
          d="M78 95 Q68 125 90 142 Q120 145 150 135"
          stroke="#f6c7a4"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* White Sleeves */}
        <path d="M80 88 L72 110 L94 116 L96 90 Z" fill="#ffffff" />
        <path d="M160 88 L168 110 L146 116 L144 90 Z" fill="#ffffff" />
        {/* Right Arm folded over left */}
        <path
          d="M162 95 Q172 125 150 142 Q120 145 92 135"
          stroke="#f6c7a4"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />

        {/* Necklace */}
        <circle cx="120" cy="115" r="4.5" fill="#a855f7" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M114 96 Q120 115 120 115 Q120 115 126 96" stroke="#9333ea" strokeWidth="1" fill="none" />

        {/* Neck */}
        <rect x="112" y="75" width="16" height="18" rx="4" fill="#f6c7a4" />

        {/* Head */}
        <ellipse cx="120" cy="65" rx="19" ry="22" fill="#f6c7a4" />

        {/* Cute Face Features */}
        {/* Eyebrows */}
        <path d="M110 57 Q113 54 116 57" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M124 57 Q127 54 130 57" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Eyes with friendly glance */}
        <ellipse cx="113" cy="63" rx="2.5" ry="3.5" fill="#171717" />
        <circle cx="114" cy="62" r="1" fill="#ffffff" />
        <ellipse cx="127" cy="63" rx="2.5" ry="3.5" fill="#171717" />
        <circle cx="128" cy="62" r="1" fill="#ffffff" />
        {/* Cheerful Blush */}
        <ellipse cx="109" cy="69" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />
        <ellipse cx="131" cy="69" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />
        {/* Soft Smile */}
        <path d="M116 73 Q120 77 124 73" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Voluminous Wavy Dark Hair */}
        <path
          d="M102 52 C95 30 145 28 138 52 C146 54 154 62 150 74 C146 84 138 90 140 100 C142 110 134 118 126 112 C122 108 120 95 120 95 C120 95 118 108 114 112 C106 118 98 110 100 100 C102 90 94 84 90 74 C86 62 94 54 102 52 Z"
          fill="#171717"
        />
        {/* Front Hair Strands & Bangs */}
        <path
          d="M104 54 Q120 62 136 54 Q130 46 120 46 Q110 46 104 54 Z"
          fill="#262626"
        />
      </svg>
    </div>
  );
}

/**
 * Sitting Developer Character with Laptop on Glowing Celestial Pedestal
 * (Used in the Contact / "Get in touch" section)
 */
export function SittingCharacterIllustration({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 260 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[280px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
      >
        {/* Glowing Celestial Pedestal / Sphere under character */}
        <defs>
          <radialGradient id="pedestalGlow" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b0e24" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        <ellipse cx="130" cy="245" rx="85" ry="32" fill="url(#pedestalGlow)" filter="drop-shadow(0 0 20px rgba(56,189,248,0.4))" />
        <ellipse cx="130" cy="245" rx="75" ry="26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* Legs crossed in sitting posture */}
        {/* Left leg folded */}
        <path
          d="M110 160 Q80 185 85 225 L120 228"
          stroke="#f6c7a4"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right leg folded */}
        <path
          d="M140 160 Q175 185 168 225 L135 228"
          stroke="#f6c7a4"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
        {/* White Socks & Sneakers */}
        <rect x="75" y="215" width="12" height="15" rx="3" fill="#ffffff" />
        <path d="M70 225 L88 225 L88 234 L68 234 Z" fill="#2563eb" />
        <path d="M68 233 L88 233 L88 235 L68 235 Z" fill="#ffffff" />

        <rect x="160" y="215" width="12" height="15" rx="3" fill="#ffffff" />
        <path d="M158 225 L176 225 L176 234 L156 234 Z" fill="#2563eb" />
        <path d="M156 233 L176 233 L176 235 L156 235 Z" fill="#ffffff" />

        {/* Pleated Blue Skirt */}
        <path
          d="M92 135 L158 135 L175 180 Q125 188 75 180 Z"
          fill="#1d4ed8"
        />
        <path d="M105 135 L98 180" stroke="#1e40af" strokeWidth="2.5" />
        <path d="M125 135 L125 182" stroke="#3b82f6" strokeWidth="2.5" />
        <path d="M145 135 L152 180" stroke="#1e40af" strokeWidth="2.5" />

        {/* Upper Body & White Top */}
        <path
          d="M95 80 Q125 78 155 80 L158 135 L92 135 Z"
          fill="#f8fafc"
        />

        {/* Arms holding laptop */}
        <path
          d="M90 85 Q75 115 105 130"
          stroke="#f6c7a4"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M160 85 Q175 115 145 130"
          stroke="#f6c7a4"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />

        {/* Laptop open on lap */}
        {/* Laptop Screen facing character */}
        <polygon points="105,108 145,108 148,135 102,135" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
        {/* Glowing Screen back (facing viewer with AI emblem) */}
        <polygon points="107,110 143,110 146,133 104,133" fill="#0f172a" />
        <circle cx="125" cy="121" r="3.5" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
        {/* Laptop Base */}
        <polygon points="98,135 152,135 158,145 92,145" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

        {/* Glow reflecting from screen onto character face/top */}
        <ellipse cx="125" cy="98" rx="22" ry="12" fill="rgba(56,189,248,0.2)" filter="blur(6px)" />

        {/* Neck */}
        <rect x="117" y="68" width="16" height="15" rx="3" fill="#f6c7a4" />

        {/* Head */}
        <ellipse cx="125" cy="56" rx="18" ry="20" fill="#f6c7a4" />

        {/* Face looking down towards laptop with smile */}
        <path d="M117 48 Q120 46 123 48" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M129 48 Q132 46 135 48" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Smiling eye curves (looking at code/laptop) */}
        <path d="M116 54 Q119 58 122 54" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M128 54 Q131 58 134 54" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Cheerful blush */}
        <ellipse cx="114" cy="60" rx="3" ry="1.5" fill="#fda4af" opacity="0.7" />
        <ellipse cx="136" cy="60" rx="3" ry="1.5" fill="#fda4af" opacity="0.7" />
        {/* Smile */}
        <path d="M122 63 Q125 66 128 63" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Voluminous Dark Wavy Hair */}
        <path
          d="M108 45 C100 24 150 22 142 45 C150 48 158 56 154 68 C150 78 142 84 144 95 C146 104 138 112 130 106 C126 102 125 90 125 90 C125 90 124 102 120 106 C112 112 104 104 106 95 C108 84 100 78 96 68 C92 56 100 48 108 45 Z"
          fill="#171717"
        />
        {/* Bangs */}
        <path d="M110 46 Q125 54 140 46 Q134 38 125 38 Q116 38 110 46 Z" fill="#262626" />
      </svg>
    </div>
  );
}
