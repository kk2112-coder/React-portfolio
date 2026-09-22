import React from "react";

/**
 * Male Developer Character Illustrations matching the portfolio UI design:
 * - Standing male developer with folded arms inside planetary orbit (About section)
 * - Sitting male developer with laptop on celestial pedestal (Contact section)
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
        <ellipse cx="120" cy="308" rx="65" ry="10" fill="rgba(56,189,248,0.25)" filter="blur(8px)" />

        {/* Sneaker Shadows */}
        <ellipse cx="98" cy="300" rx="16" ry="5" fill="#0b0e24" opacity="0.6" />
        <ellipse cx="142" cy="300" rx="16" ry="5" fill="#0b0e24" opacity="0.6" />

        {/* Sneaker Soles & Shoes (Modern white/blue sneakers) */}
        {/* Left Shoe */}
        <path d="M84 288 Q96 283 112 288 L112 299 Q96 301 84 299 Z" fill="#1e3a8a" />
        <path d="M83 296 Q96 300 113 296 L113 300 L83 300 Z" fill="#ffffff" />
        <rect x="88" y="286" width="10" height="2" rx="1" fill="#38bdf8" />
        {/* Right Shoe */}
        <path d="M128 288 Q144 283 156 288 L156 299 Q144 301 128 299 Z" fill="#1e3a8a" />
        <path d="M127 296 Q144 300 157 296 L157 300 L127 300 Z" fill="#ffffff" />
        <rect x="142" y="286" width="10" height="2" rx="1" fill="#38bdf8" />

        {/* Male Chinos / Jeans (Tailored slim dark navy pants) */}
        {/* Left Leg */}
        <path
          d="M86 142 L116 142 L112 288 L88 288 Z"
          fill="#1e293b"
        />
        {/* Right Leg */}
        <path
          d="M124 142 L154 142 L152 288 L128 288 Z"
          fill="#1e293b"
        />
        {/* Center crotch seam & pant creases */}
        <path d="M116 142 L120 195 L124 142" fill="#0f172a" />
        <path d="M90 200 Q96 210 92 230" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <path d="M148 200 Q144 210 146 230" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

        {/* Belt */}
        <rect x="84" y="138" width="72" height="7" rx="2" fill="#090d16" />
        <rect x="115" y="137" width="10" height="9" rx="1.5" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />

        {/* Torso: Fitted Crisp White Developer Tee */}
        <path
          d="M82 82 Q120 80 158 82 L154 140 L86 140 Z"
          fill="#f8fafc"
        />
        {/* Subtle shadow on side */}
        <path d="M82 82 L86 140 L92 140 L88 83 Z" fill="#e2e8f0" />
        <path d="M158 82 L154 140 L148 140 L152 83 Z" fill="#e2e8f0" />

        {/* Neckline / Collar */}
        <path d="M108 81 Q120 92 132 81" fill="#e2e8f0" />
        <path d="M110 81 Q120 90 130 81" fill="#f8fafc" />

        {/* Folded Arms (Masculine confident crossed posture) */}
        {/* Left Arm & Bicep */}
        <path
          d="M74 88 Q62 120 86 134 Q116 138 148 130"
          stroke="#f6c7a4"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* Tee Short Sleeves */}
        <path d="M82 82 L70 106 L92 112 L96 84 Z" fill="#f8fafc" />
        <path d="M158 82 L170 106 L148 112 L144 84 Z" fill="#f8fafc" />
        
        {/* Right Arm folded firmly over left */}
        <path
          d="M166 88 Q178 120 154 134 Q124 138 92 130"
          stroke="#f6c7a4"
          strokeWidth="13.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Smartwatch on left wrist */}
        <rect x="136" y="125" width="6" height="11" rx="2" fill="#0f172a" />
        <rect x="137" y="127" width="4" height="7" rx="1" fill="#38bdf8" />

        {/* Neck (Firm masculine neck) */}
        <rect x="111" y="68" width="18" height="18" rx="4" fill="#f6c7a4" />
        <path d="M111 76 Q120 82 129 76" stroke="#e0a98b" strokeWidth="1.5" fill="none" />

        {/* Head & Jawline */}
        <path
          d="M103 48 C103 36 137 36 137 48 C137 60 135 72 120 74 C105 72 103 60 103 48 Z"
          fill="#f6c7a4"
        />

        {/* Ears */}
        <ellipse cx="102" cy="52" rx="3.5" ry="5.5" fill="#f6c7a4" />
        <ellipse cx="138" cy="52" rx="3.5" ry="5.5" fill="#f6c7a4" />

        {/* Confident Masculine Face Details */}
        {/* Strong Defined Eyebrows */}
        <path d="M108 45 Q114 42 118 45" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M122 45 Q126 42 132 45" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        
        {/* Expressive Eyes */}
        <ellipse cx="113" cy="51" rx="2.5" ry="3" fill="#171717" />
        <circle cx="114" cy="50" r="0.9" fill="#ffffff" />
        <ellipse cx="127" cy="51" rx="2.5" ry="3" fill="#171717" />
        <circle cx="128" cy="50" r="0.9" fill="#ffffff" />

        {/* Nose */}
        <path d="M120 49 L120 57 L123 57" stroke="#e0a98b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Confident Friendly Smile */}
        <path d="M115 63 Q120 67 125 63" stroke="#991b1b" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Stylish Modern Male Hair (Short textured quiff / side fade) */}
        <path
          d="M101 48 C99 35 106 24 120 22 C134 24 141 32 139 46 C138 43 134 38 126 36 C118 34 112 36 108 40 C104 44 102 46 101 48 Z"
          fill="#171717"
        />
        {/* Volumetric Quiff Top */}
        <path
          d="M105 34 C110 20 128 19 135 26 C138 29 135 34 126 33 C117 32 110 32 105 34 Z"
          fill="#262626"
        />
        {/* Subtle Beard / Stubble shadow along jaw */}
        <path
          d="M107 58 Q120 72 133 58"
          stroke="#171717"
          strokeWidth="1.2"
          strokeDasharray="1.5 2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

/**
 * Male Developer Sitting with Laptop on Glowing Celestial Pedestal
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
          <radialGradient id="pedestalGlowMale" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b0e24" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        <ellipse cx="130" cy="245" rx="85" ry="32" fill="url(#pedestalGlowMale)" filter="drop-shadow(0 0 20px rgba(56,189,248,0.4))" />
        <ellipse cx="130" cy="245" rx="75" ry="26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* Male Chinos (Folded comfortable sitting posture) */}
        {/* Left Leg */}
        <path
          d="M105 145 Q75 168 80 220 L118 224"
          stroke="#1e293b"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Leg */}
        <path
          d="M145 145 Q175 168 170 220 L135 224"
          stroke="#1e293b"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* Shoes */}
        <path d="M68 222 L88 222 L88 232 L66 232 Z" fill="#1e3a8a" />
        <path d="M66 231 L88 231 L88 234 L66 234 Z" fill="#ffffff" />

        <path d="M158 222 L178 222 L180 232 L158 232 Z" fill="#1e3a8a" />
        <path d="M158 231 L180 231 L180 234 L158 234 Z" fill="#ffffff" />

        {/* Torso & White Developer Tee */}
        <path
          d="M92 78 Q125 76 158 78 L154 148 L92 148 Z"
          fill="#f8fafc"
        />
        <path d="M110 77 Q125 87 140 77" fill="#e2e8f0" />

        {/* Arms holding and typing on laptop */}
        <path
          d="M88 84 Q72 118 106 132"
          stroke="#f6c7a4"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M162 84 Q178 118 144 132"
          stroke="#f6c7a4"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />

        {/* Smartwatch */}
        <rect x="96" y="122" width="5" height="10" rx="1.5" fill="#0f172a" />
        <rect x="97" y="124" width="3" height="6" rx="1" fill="#38bdf8" />

        {/* Laptop open on lap */}
        <polygon points="104,108 146,108 149,135 101,135" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
        {/* Screen back facing viewer with cyan AI glow emblem */}
        <polygon points="106,110 144,110 147,133 103,133" fill="#0f172a" />
        <circle cx="125" cy="121" r="3.5" fill="#38bdf8" filter="drop-shadow(0 0 5px #38bdf8)" />
        {/* Laptop Base */}
        <polygon points="96,135 154,135 160,145 90,145" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

        {/* Soft screen glow on male face/chest */}
        <ellipse cx="125" cy="95" rx="22" ry="12" fill="rgba(56,189,248,0.25)" filter="blur(6px)" />

        {/* Neck */}
        <rect x="116" y="65" width="18" height="15" rx="3" fill="#f6c7a4" />

        {/* Head & Masculine Chin */}
        <path
          d="M109 46 C109 34 141 34 141 46 C141 58 138 68 125 70 C112 68 109 58 109 46 Z"
          fill="#f6c7a4"
        />
        {/* Ears */}
        <ellipse cx="107" cy="50" rx="3" ry="5" fill="#f6c7a4" />
        <ellipse cx="143" cy="50" rx="3" ry="5" fill="#f6c7a4" />

        {/* Facial details looking focused on the code */}
        <path d="M114 43 Q118 41 122 43" stroke="#171717" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M128 43 Q132 41 136 43" stroke="#171717" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Focused eyes */}
        <path d="M115 48 Q118 52 121 48" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M129 48 Q132 52 135 48" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Nose */}
        <path d="M125 46 L125 54 L127 54" stroke="#e0a98b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Relaxed Smile */}
        <path d="M121 60 Q125 64 129 60" stroke="#991b1b" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Stylish Short Haircut for Male Developer */}
        <path
          d="M107 45 C105 32 112 21 125 19 C138 21 145 30 143 43 C141 40 137 34 128 33 C120 32 115 34 111 38 C109 42 108 44 107 45 Z"
          fill="#171717"
        />
        <path
          d="M111 32 C115 18 132 17 139 24 C141 27 138 31 130 30 C122 29 116 29 111 32 Z"
          fill="#262626"
        />
      </svg>
    </div>
  );
}
