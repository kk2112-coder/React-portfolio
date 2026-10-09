import React, { useState, useRef } from "react";
import {
  FaSyncAlt,
  FaQrcode,
  FaWifi,
  FaShieldAlt,
  FaBuilding,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import myDp from "./Images/MyDp.jpg";

/**
 * OfficeIdCard Component
 * Modern Office Employee/Engineer Badge with 3D Tilt, Realistic Lanyard,
 * Holographic Shimmer, and Interactive Flip Card Transitions.
 * Perfectly aligned with pixel-level precision.
 */
export default function OfficeIdCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Mouse move handler for smooth 3D tilt & dynamic reflection
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12 to +12 deg)
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;

    // Calculate sheen position percentage
    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, sheenX, sheenY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth spring reset
    setTilt({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="office-id-card flex flex-col items-center justify-center w-full select-none">
      
      {/* ── Realistic Office Lanyard Strap (Centered on Badge Axis) ── */}
      <div className="flex flex-col items-center relative z-20 -mb-2 animate-badge-sway">
        {/* Lanyard Fabric Ribbon */}
        <div className="w-9 h-9 bg-gradient-to-b from-slate-900 via-cyan-950 to-slate-900 border-x border-cyan-500/40 relative shadow-md flex items-center justify-center overflow-hidden rounded-t-sm">
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_4px)]" />
          <div className="rotate-90 text-[7px] font-mono tracking-widest text-cyan-300 font-bold whitespace-nowrap">
            DEV • STAFF
          </div>
        </div>

        {/* Metallic Badge Clip & Ring */}
        <div className="flex flex-col items-center -mt-1">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 bg-gradient-to-tr from-slate-400 via-white to-slate-500 shadow-inner -mb-1 z-10" />
          <div className="w-5 h-3.5 rounded-sm bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 border border-slate-300 shadow-md flex items-center justify-center">
            <div className="w-2 h-0.5 bg-slate-700/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* ── 3D Perspective Card Container ── */}
      <div
        className="perspective-1000 w-[290px] sm:w-[305px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
        role="button"
        tabIndex={0}
        aria-label="Office ID Card - Click to Flip"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleFlip();
          }
        }}
      >
        <div
          ref={cardRef}
          className="relative w-full h-[420px] rounded-3xl transition-transform duration-300 ease-out preserve-3d shadow-2xl"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${
              tilt.rotateY + (isFlipped ? 180 : 0)
            }deg)`,
            transition: isHovered
              ? "transform 0.08s ease-out"
              : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* Punch Hole Slot at top of card */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 h-1.5 rounded-full bg-slate-950/90 border border-white/20 z-30 shadow-inner" />

          {/* ══════════════════════════════════════════════════
              CARD FRONT: Official Corporate / Tech Engineer Badge
             ══════════════════════════════════════════════════ */}
          <div
            className={`absolute inset-0 w-full h-full rounded-3xl p-5 flex flex-col justify-between overflow-hidden border border-white/20 backface-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-2xl transition-opacity duration-300 ${
              isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Holographic Sheen Layer */}
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-40 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.45) 0%, rgba(56,189,248,0.25) 30%, rgba(236,72,153,0.15) 55%, transparent 75%)`,
              }}
            />

            {/* Subtle background tech glow */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-8 -top-8 w-44 h-44 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />

            {/* ── Header: Organization & Clearance ── */}
            <div className="pt-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    KK
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 block leading-tight">
                      CORE SYSTEMS
                    </span>
                    <span className="text-[8px] font-mono text-slate-400 tracking-wider">
                      FULL-STACK LABS
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[9px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>

            {/* ── Mid Section: Photo + Verification + Title ── */}
            <div className="flex flex-col items-center my-auto py-0.5">
              {/* Photo Frame with Holographic Border */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/60 p-0.5 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 shadow-lg">
                  <img
                    src={myDp}
                    alt="Krishan Kant ID Photo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Verified Watermark Badge */}
                <div className="absolute -bottom-2 -right-2 px-1.5 py-0.5 rounded-md bg-slate-900 border border-cyan-400/50 shadow-md flex items-center gap-1 text-[8px] font-mono font-semibold text-cyan-300">
                  <FaShieldAlt className="text-[8px] text-cyan-400" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mt-2.5 space-y-0.5">
                <h3 className="text-base font-extrabold tracking-tight text-white flex items-center justify-center gap-1">
                  <span>Krishan Kant</span>
                  <FaCheckCircle className="text-cyan-400 text-[11px]" />
                </h3>
                <p className="text-[10px] font-mono text-cyan-300 font-medium">
                  Full-Stack &amp; AI Engineer
                </p>
                <div className="text-[8px] font-mono text-slate-400 tracking-wider">
                  AKTU SCHOLAR • M.C.A.
                </div>
              </div>

              {/* Smart Chip & RFID Contact Icon */}
              <div className="flex items-center justify-between w-full px-2 pt-2 text-slate-400">
                {/* Metallic Gold EMV Chip */}
                <div className="w-7 h-5 rounded-md bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 border border-amber-300 shadow-sm flex flex-col justify-between p-0.5 opacity-90">
                  <div className="w-full h-[1px] bg-amber-700/40" />
                  <div className="flex justify-between">
                    <div className="w-1.5 h-1.5 rounded-full border border-amber-700/40" />
                    <div className="w-1.5 h-1.5 rounded-full border border-amber-700/40" />
                  </div>
                  <div className="w-full h-[1px] bg-amber-700/40" />
                </div>

                <div className="flex items-center gap-1.5">
                  <FaWifi className="rotate-90 text-cyan-400/80 text-xs" title="Contactless RFID" />
                  <span className="text-[9px] font-mono text-slate-400">CLEARANCE L4</span>
                </div>
              </div>
            </div>

            {/* ── Footer: Barcode & Identification Data ── */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <div className="grid grid-cols-3 gap-1 text-center font-mono text-[8px]">
                <div className="bg-white/[0.04] p-1 rounded-md border border-white/5">
                  <span className="text-slate-500 block">BADGE ID</span>
                  <span className="text-slate-200 font-bold">KK-2112</span>
                </div>
                <div className="bg-white/[0.04] p-1 rounded-md border border-white/5">
                  <span className="text-slate-500 block">ACCESS</span>
                  <span className="text-emerald-300 font-bold">LEVEL 4</span>
                </div>
                <div className="bg-white/[0.04] p-1 rounded-md border border-white/5">
                  <span className="text-slate-500 block">VALID THRU</span>
                  <span className="text-slate-200 font-bold">2025–2027</span>
                </div>
              </div>

              {/* Simulated Authentic Barcode */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-[1.5px] h-3.5 opacity-80">
                  {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2, 1, 3].map((w, i) => (
                    <div
                      key={i}
                      className="h-full bg-slate-300 rounded-[0.5px]"
                      style={{ width: `${w * 1.3}px` }}
                    />
                  ))}
                </div>
                <span className="text-[7px] font-mono text-slate-400 tracking-wider">
                  SCAN FOR RFID
                </span>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════
              CARD BACK: Magnetic Stripe, Comprehensive Profile, Scannable QR
             ══════════════════════════════════════════════════ */}
          <div
            className={`absolute inset-0 w-full h-full rounded-3xl p-4 sm:p-4.5 flex flex-col justify-between overflow-hidden border border-white/20 backface-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl transition-opacity duration-300 ${
              !isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Holographic Sheen Layer */}
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${100 - tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.4) 0%, rgba(192,132,252,0.2) 35%, transparent 70%)`,
              }}
            />

            {/* ── Top: Magnetic Stripe & Authorized Signature ── */}
            <div className="space-y-1.5">
              <div className="w-full h-7 bg-slate-950 border-y border-white/10 rounded-sm relative overflow-hidden shadow-inner flex items-center">
                <div className="w-full h-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 opacity-90" />
                <div className="absolute inset-x-0 h-[1px] bg-cyan-400/25" />
                <div className="absolute right-2 text-[7px] font-mono text-cyan-400/80 tracking-widest">
                  TRACK 1/2 ENCRYPTED
                </div>
              </div>

              {/* Signature Strip */}
              <div className="flex items-center justify-between gap-2 px-0.5">
                <div className="flex-1 bg-white/95 text-slate-900 px-2.5 py-0.5 rounded font-serif italic text-[11px] tracking-wide shadow-inner flex items-center justify-between">
                  <span className="font-bold text-slate-900">Krishan Kant</span>
                  <span className="text-[6.5px] font-mono text-slate-600 not-italic uppercase font-extrabold">
                    AUTHORIZED SIGNATURE
                  </span>
                </div>
                <div className="w-9 h-5 bg-slate-800/90 rounded border border-white/10 flex items-center justify-center text-[7.5px] font-mono text-cyan-300 font-bold">
                  L4-SEC
                </div>
              </div>
            </div>

            {/* ── Mid Section: Comprehensive Profile & Informations ── */}
            <div className="space-y-2 py-0.5 text-left font-mono">
              
              {/* Profile Cardlet */}
              <div className="bg-white/[0.04] p-2 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span className="text-cyan-400 font-bold">EMPLOYEE DOSSIER</span>
                  <span className="text-emerald-400 font-bold">PASS #KK-2112</span>
                </div>
                <div className="text-[10px] text-white font-bold tracking-tight">
                  Krishan Kant
                </div>
                <div className="text-[8.5px] text-cyan-300 font-medium leading-none">
                  Full-Stack Web &amp; AI Engineer
                </div>
              </div>

              {/* Education & Academic Credentials */}
              <div className="bg-white/[0.03] p-2 rounded-xl border border-white/5 space-y-1 text-[8px]">
                <div className="flex items-center gap-1.5 text-slate-200">
                  <FaGraduationCap className="text-cyan-400 text-[10px] shrink-0" />
                  <span className="font-semibold text-slate-100">M.C.A. (2025–2027)</span>
                  <span className="text-slate-400">• AKTU</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300 pl-3.5">
                  <span className="text-slate-400">B.C.A. (2022–2025) • CCSU 1st Div</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-200 pt-0.5">
                  <FaCode className="text-purple-400 text-[9px] shrink-0" />
                  <span className="text-[7.5px] text-purple-300">
                    React 19 • Node.js • Next.js • React Native
                  </span>
                </div>
              </div>

              {/* Direct Contact Channels */}
              <div className="bg-white/[0.03] p-2 rounded-xl border border-white/5 space-y-1 text-[8px]">
                <div className="flex items-center gap-1.5 text-slate-300 truncate">
                  <FaEnvelope className="text-cyan-400 text-[8px] shrink-0" />
                  <span className="truncate text-slate-200">krishankantrajput2112@gmail.com</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <FaGithub className="text-purple-400 text-[8px] shrink-0" />
                    <span>kk2112-coder</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaInstagram className="text-pink-400 text-[8px] shrink-0" />
                    <span>@kkrajput_002</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[7.5px] text-slate-400 pt-0.5">
                  <FaMapMarkerAlt className="text-emerald-400 text-[8px] shrink-0" />
                  <span>Uttar Pradesh, India (IST UTC+5:30)</span>
                </div>
              </div>

            </div>

            {/* ── Bottom Section: Scannable QR & Official Return Notice ── */}
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <span className="text-[8px] font-mono font-bold text-cyan-300 block">
                  PROPERTY OF KRISHAN KANT
                </span>
                <span className="text-[7px] font-mono text-slate-400 block leading-tight">
                  If found, please return via email.
                </span>
                <span className="text-[6.5px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RFID UID: 04:A2:8F:B1:9C
                </span>
              </div>

              {/* High-tech QR Code Box */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-10 h-10 rounded-lg bg-white p-1 shadow-md flex items-center justify-center">
                  <FaQrcode className="text-slate-950 text-xl" />
                </div>
                <span className="text-[6px] font-mono text-slate-400">SCAN PASS</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── Interactive Flip Controls & Hints ── */}
      <div className="mt-2.5 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={toggleFlip}
          className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 text-xs font-medium flex items-center gap-1.5 shadow-sm transition-all cursor-pointer group"
          title="Flip Office ID Card"
        >
          <FaSyncAlt className={`text-[10px] group-hover:rotate-180 transition-transform duration-500 ${isFlipped ? "rotate-180" : ""}`} />
          <span>{isFlipped ? "View Front Badge" : "Flip ID Card"}</span>
        </button>

        <span className="text-[10px] text-slate-400 font-mono">
          Tilt in 3D • Tap to Flip
        </span>
      </div>

    </div>
  );
}
