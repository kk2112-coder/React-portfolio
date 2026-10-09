import React, { useState } from "react";
import { StandingCharacterIllustration } from "./CharacterIllustrations";
import myDp from "./Images/MyDp.jpg";

/**
 * AppleBentoGrid Component
 * Replicates Apple's iconic "Bento Box" feature grid.
 * Highlights:
 * 1) K1 Pro Silicon / Full-Stack Architecture Chip with interactive benchmarks
 * 2) Liquid Retina Glassmorphism & UI craft
 * 3) Real-Time Cyber Threat Security Core
 * 4) Academic Credentials (MCA at AKTU & BCA at CCSU)
 * 5) Male Developer Persona & Character Art
 */
export default function AppleBentoGrid() {
  const [benchmarkTab, setBenchmarkTab] = useState("speed"); // "speed" | "bundle" | "latency"
  const [photoMode, setPhotoMode] = useState(false);

  return (
    <section
      id="bento"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-[#86868b] tracking-wider uppercase">
            <span>Architecture &amp; Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Features at a glance. <br />
            <span className="apple-silver-text">Absurdly engineered.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868b]">
            Every layer from UI motion to server architecture is designed for peak speed, reliability, and human delight.
          </p>
        </div>

        {/* ── Apple Bento Grid Container ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ── CARD 1: K1 Silicon Full-Stack Architecture (Large 8 cols) ── */}
          <div className="md:col-span-12 lg:col-span-8 apple-card p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative group">
            {/* Ambient chip glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#0071e3]/20 via-[#bf5af2]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Apple Silicon "K1" Chip Emblem */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#161617] via-[#2c2c2e] to-[#3a3a3c] border border-white/20 shadow-2xl flex items-center justify-center font-black text-white text-lg tracking-wider">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      K1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      K1 Pro Architecture
                    </h3>
                    <p className="text-xs text-[#86868b]">Unified React 19, Tailwind v4 &amp; Node Core</p>
                  </div>
                </div>

                {/* Benchmark Selector */}
                <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/10 text-xs">
                  <button
                    onClick={() => setBenchmarkTab("speed")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      benchmarkTab === "speed" ? "bg-white/15 text-white" : "text-[#86868b] hover:text-white"
                    }`}
                  >
                    Speed
                  </button>
                  <button
                    onClick={() => setBenchmarkTab("bundle")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      benchmarkTab === "bundle" ? "bg-white/15 text-white" : "text-[#86868b] hover:text-white"
                    }`}
                  >
                    Bundle
                  </button>
                  <button
                    onClick={() => setBenchmarkTab("latency")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      benchmarkTab === "latency" ? "bg-white/15 text-white" : "text-[#86868b] hover:text-white"
                    }`}
                  >
                    Latency
                  </button>
                </div>
              </div>

              {/* Dynamic Benchmark Data Display */}
              <div className="pt-4 space-y-4">
                {benchmarkTab === "speed" && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-[#86868b]">
                      <span className="font-semibold text-white">DOM Render Throughput (React 19 Concurrent)</span>
                      <span className="text-[#30d158] font-bold">3.5x Faster</span>
                    </div>
                    {/* Bar 1: Krishan K1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[#a1a1a6]">
                        <span>Krishan K1 Pro Engine</span>
                        <span className="text-white font-mono">120 FPS Stable</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[96%] h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#30d158]" />
                      </div>
                    </div>
                    {/* Bar 2: Legacy */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[#86868b]">
                        <span>Standard Web Stack</span>
                        <span className="font-mono">35-45 FPS</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="w-[42%] h-full rounded-full bg-[#86868b]" />
                      </div>
                    </div>
                  </div>
                )}

                {benchmarkTab === "bundle" && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-[#86868b]">
                      <span className="font-semibold text-white">CSS &amp; JS Asset Optimization (Vite + Tailwind v4)</span>
                      <span className="text-[#2997ff] font-bold">68% Lighter</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[#a1a1a6]">
                        <span>Krishan Zero-Bloat Bundle</span>
                        <span className="text-white font-mono">14.8 KB Gzip</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[92%] h-full rounded-full bg-gradient-to-r from-[#bf5af2] to-[#0071e3]" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[#86868b]">
                        <span>Generic Web Boilerplate</span>
                        <span className="font-mono">1.2 MB Uncompressed</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="w-[30%] h-full rounded-full bg-[#86868b]" />
                      </div>
                    </div>
                  </div>
                )}

                {benchmarkTab === "latency" && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-[#86868b]">
                      <span className="font-semibold text-white">API Round-Trip &amp; Firestore Real-Time Sync</span>
                      <span className="text-[#ff9f0a] font-bold">&lt; 14ms Response</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[#a1a1a6]">
                        <span>Node.js / Express Express-Route</span>
                        <span className="text-white font-mono">Instantaneous</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="w-[95%] h-full rounded-full bg-gradient-to-r from-[#ff9f0a] to-[#30d158]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] text-white">React 19 Hooks</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] text-white">Tailwind v4 JIT</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] text-white">Node / Express</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] text-white">Firebase Firestore</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] text-white">RESTful Security</span>
            </div>
          </div>

          {/* ── CARD 2: Persona & Developer Character (4 cols) ── */}
          <div className="md:col-span-12 lg:col-span-4 apple-card p-6 sm:p-8 flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                Developer Identity
              </span>
              <button
                onClick={() => setPhotoMode(!photoMode)}
                className="text-[11px] text-[#2997ff] hover:underline"
              >
                {photoMode ? "Show Artwork" : "Show Real Photo"}
              </button>
            </div>

            {/* Character Showcase */}
            <div className="my-4 flex items-center justify-center">
              {photoMode ? (
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img src={myDp} alt="Krishan Kant" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="relative">
                  <StandingCharacterIllustration className="w-48 h-auto" />
                </div>
              )}
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Krishan Kant</h4>
              <p className="text-xs text-[#86868b]">
                Male Engineer • Based in India • Crafting global digital products
              </p>
            </div>
          </div>

          {/* ── CARD 3: Threat Defense Core / Cyber Security (4 cols) ── */}
          <div className="md:col-span-12 lg:col-span-4 apple-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🛡️</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#30d158]/20 text-[#30d158] border border-[#30d158]/30">
                Live Protection
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Threat Defense Core
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1 leading-relaxed">
                Full-stack threat intelligence engine scanning URLs for zero-day phishing indicators and spoofed domain signatures.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-[#a1a1a6] space-y-1">
              <div className="flex justify-between">
                <span>Threat Rating:</span>
                <span className="text-[#30d158]">0.02% (Safe)</span>
              </div>
              <div className="flex justify-between">
                <span>SSL Validation:</span>
                <span className="text-white">EV Verified</span>
              </div>
              <div className="flex justify-between">
                <span>Heuristic Inspection:</span>
                <span className="text-[#2997ff]">Passed (0ms)</span>
              </div>
            </div>
          </div>

          {/* ── CARD 4: Liquid Glass Retina UI (4 cols) ── */}
          <div className="md:col-span-12 lg:col-span-4 apple-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl">💎</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#bf5af2]/20 text-[#bf5af2] border border-[#bf5af2]/30">
                Tactile Polish
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Liquid Glass Retina UI
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1 leading-relaxed">
                High-density glassmorphism, responsive sub-pixel typography, and ultra-smooth dark &amp; light mode transitions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                <span className="font-bold text-white block text-sm">Dark &amp; Light</span>
                <span className="text-[10px] text-[#86868b]">Zero Flash Mode</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                <span className="font-bold text-white block text-sm">60+ FPS</span>
                <span className="text-[10px] text-[#86868b]">Hardware Acceleration</span>
              </div>
            </div>
          </div>

          {/* ── CARD 5: Academic Credentials & Rigor (4 cols) ── */}
          <div className="md:col-span-12 lg:col-span-4 apple-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🎓</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0071e3]/20 text-[#2997ff] border border-[#0071e3]/30">
                In Progress
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Rigor
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1 leading-relaxed">
                Rigorous computer science curriculum blending algorithms, systems architecture, and database theory.
              </p>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">M.C.A. (2025–2027)</span>
                  <span className="text-[10px] text-[#86868b]">AKTU University</span>
                </div>
                <span className="text-[11px] text-[#30d158] font-semibold">Active</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">B.C.A. (2022–2025)</span>
                  <span className="text-[10px] text-[#86868b]">CCSU University</span>
                </div>
                <span className="text-[11px] text-[#2997ff] font-semibold">Graduated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
