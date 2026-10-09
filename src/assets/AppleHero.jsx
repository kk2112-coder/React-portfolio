import React, { useState } from "react";
import image4 from "./Images/PhishingDetector.png";
import image6 from "./Images/LifeOs.jpg";
import image3 from "./Images/PortFolio.png";

/**
 * AppleHero Component
 * Replicates the Apple MacBook Neo / Pro launch hero experience:
 * - Giant SF Pro-style typography with Apple Intelligence rainbow gradient
 * - Interactive MacBook display hardware mockup with 3 switchable modes:
 *    1) Live Interface View
 *    2) Apple Intelligence AI Terminal
 *    3) K1 Architecture Chip Specs
 * - Ambient Apple Intelligence glow beneath hardware chassis
 * - Classic Apple Blue CTA & subtle text link with chevron
 */
export default function AppleHero({ onOpenAI }) {
  const [screenTab, setScreenTab] = useState("preview"); // "preview" | "terminal" | "architecture"
  const [copiedNotification, setCopiedNotification] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kkrishankant17@gmail.com");
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#000000] text-white"
    >
      {/* Ambient Apple Intelligence top glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[360px] pointer-events-none opacity-25 dark:opacity-30 blur-[130px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #0072ff 0%, #7e0fff 40%, #ff007f 75%, transparent 100%)",
        }}
      />

      {/* ── 1. Apple Hero Header & Typography ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[11px] sm:text-xs font-semibold text-[#86868b] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>New Release • Krishan Kant Pro</span>
        </div>

        {/* Massive Apple Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Mind-blowing speed. <br />
          <span className="apple-intelligence-text">
            Built for Apple Intelligence.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#86868b] font-normal leading-relaxed pt-2">
          Full-Stack Web Architect • React 19 &amp; Next.js Specialist • Creative AI Engineer.
          Absurdly capable, intuitively engineered.
        </p>

        {/* Apple CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo("projects")}
            className="apple-btn-blue px-6 py-2.5 text-sm sm:text-base font-medium shadow-lg"
          >
            Explore Flagships
          </button>

          {onOpenAI && (
            <button
              onClick={onOpenAI}
              className="text-sm sm:text-base text-[#2997ff] hover:text-[#0077ed] transition-colors flex items-center gap-1 font-medium group"
            >
              <span>Ask Krishan AI Assistant</span>
              <span className="group-hover:translate-x-1 transition-transform">&rsaquo;</span>
            </button>
          )}

          <a
            href="/Krishan-Kant-Resume.pdf"
            download="Krishan-Kant-Resume.pdf"
            className="apple-btn-secondary px-5 py-2.5 text-sm font-medium"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>

      {/* ── 2. Interactive MacBook Display Hardware Frame ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-14">
        {/* Screen Switcher Controls on top of hardware */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="inline-flex p-1 rounded-xl bg-[#161617] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setScreenTab("preview")}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                screenTab === "preview"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              🖥️ Live Interface
            </button>
            <button
              onClick={() => setScreenTab("terminal")}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                screenTab === "terminal"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              ⚡ Apple AI Engine
            </button>
            <button
              onClick={() => setScreenTab("architecture")}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                screenTab === "architecture"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-[#86868b] hover:text-white"
              }`}
            >
              🧬 K1 Chip Specs
            </button>
          </div>
        </div>

        {/* MacBook Outer Aluminum Chassis */}
        <div className="relative rounded-t-3xl border-t-2 border-x-2 border-[#38383a] bg-[#1d1d1f] p-3 sm:p-5 shadow-2xl">
          {/* Top Notch & Camera Bezel */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-[#000000] rounded-b-md flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e] ring-1 ring-white/10" />
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Liquid Retina XDR Screen Glass */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0c] border border-black min-h-[340px] sm:min-h-[460px] flex flex-col justify-between">
            {/* Screen Inner Header / Mock Browser Address Bar */}
            <div className="h-9 bg-[#161617]/95 border-b border-white/[0.08] px-4 flex items-center justify-between text-xs">
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Pill */}
              <div className="px-4 py-1 rounded-md bg-[#000000]/60 border border-white/10 text-[11px] text-[#86868b] flex items-center gap-1.5 font-mono">
                <span className="text-[#30d158]">🔒</span>
                <span>krishankant.apple-ai.dev</span>
              </div>

              {/* Quick action */}
              <button
                onClick={copyEmail}
                className="text-[11px] text-[#86868b] hover:text-white transition-colors"
                title="Copy developer email"
              >
                {copiedNotification ? "✓ Copied!" : "kkrishankant17@gmail.com"}
              </button>
            </div>

            {/* Screen Content - Mode 1: Live Interface */}
            {screenTab === "preview" && (
              <div className="p-6 sm:p-8 flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/15 text-[#2997ff] text-xs font-semibold">
                    <span>⚡ Unified Full-Stack Architecture</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Engineered for high fidelity &amp; responsive grace.
                  </h3>
                  <p className="text-sm text-[#86868b] leading-relaxed">
                    Krishan Kant specializes in building frictionless web applications, interactive AI interfaces,
                    and performant cross-platform mobile apps with React 19, Tailwind v4, Node.js, and Firebase.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-white/[0.08] text-xs text-white">React 19 Ready</span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.08] text-xs text-white">Tailwind CSS v4</span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.08] text-xs text-white">Apple Intelligence UI</span>
                    <span className="px-3 py-1 rounded-lg bg-white/[0.08] text-xs text-white">Node / Firebase</span>
                  </div>
                </div>

                <div className="md:col-span-5 relative flex items-center justify-center">
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <img
                      src={image4}
                      alt="Phishing Detection System"
                      className="w-full h-48 sm:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-3 bg-[#161617]/90 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Phishing Threat Engine</span>
                      <span className="text-[#30d158]">Active Protection</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen Content - Mode 2: Apple Intelligence AI Terminal */}
            {screenTab === "terminal" && (
              <div className="p-6 sm:p-8 flex-1 font-mono text-xs sm:text-sm text-[#f5f5f7] space-y-3 bg-[#000000]/90">
                <div className="flex items-center gap-2 text-[#86868b] border-b border-white/10 pb-2">
                  <span className="text-[#30d158]">&bull;</span>
                  <span>Krishan AI Core v2.4 initialized • Neural Engine ready</span>
                </div>

                <div className="space-y-2 text-[#a1a1a6]">
                  <p className="text-[#2997ff]">
                    &gt; system.status.verify()
                  </p>
                  <p className="text-[#30d158]">
                    &check; React 19 Concurrent Renderer: 0ms latency
                  </p>
                  <p className="text-[#30d158]">
                    &check; Cyber Defense Heuristic API: 99.4% detection rate
                  </p>
                  <p className="text-[#30d158]">
                    &check; Master of Computer Applications (AKTU): Active 2025–2027
                  </p>
                  <p className="text-[#bf5af2]">
                    &gt; ai.executeTask("Craft next-generation intelligent user interface")
                  </p>
                  <p className="text-white bg-white/[0.05] p-3 rounded-lg border border-white/10">
                    &quot;Blending Apple-standard minimalism, tactile glassmorphic depth, and real-time LLM agentic assistance to elevate digital products.&quot;
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-cyan-400">
                  <span className="animate-pulse">&gt; Ready for new challenges. Prompt Krishan AI anytime.</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-ping inline-block" />
                </div>
              </div>
            )}

            {/* Screen Content - Mode 3: K1 Architecture Engine */}
            {screenTab === "architecture" && (
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#86868b]">Apple Silicon Analogy</span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    K1 Pro Full-Stack Neural Engine
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full">
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#2997ff]">100%</span>
                    <p className="text-[11px] text-[#86868b] mt-1">Core Web Vitals</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#bf5af2]">6+</span>
                    <p className="text-[11px] text-[#86868b] mt-1">Flagship Apps</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#30d158]">MCA</span>
                    <p className="text-[11px] text-[#86868b] mt-1">AKTU (2025-27)</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#ff9f0a]">0ms</span>
                    <p className="text-[11px] text-[#86868b] mt-1">UI Bottlenecks</p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => scrollTo("bento")}
                    className="text-xs text-[#2997ff] hover:underline"
                  >
                    View detailed Bento Box architecture &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="h-7 bg-[#121214] border-t border-white/[0.08] px-4 flex items-center justify-between text-[11px] text-[#86868b]">
              <span>Architecture: React 19 • Tailwind v4 • Vite</span>
              <span className="hidden sm:inline">Designed &amp; Developed by Krishan Kant</span>
            </div>
          </div>
        </div>

        {/* MacBook Lower Aluminum Lip & Notch */}
        <div className="relative h-4 bg-[#2c2c2e] rounded-b-xl border-b border-x border-[#3a3a3c] shadow-2xl flex items-center justify-center">
          <div className="w-20 h-1.5 bg-[#1c1c1e] rounded-b-sm" />
        </div>

        {/* Ambient Reflective Light Beneath Laptop */}
        <div className="w-4/5 mx-auto h-6 bg-gradient-to-r from-transparent via-[#0072ff]/30 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* Floating Specs Ribbon */}
      <div className="relative z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto w-full border-t border-white/10 pt-8 text-xs text-[#86868b]">
        <div>
          <span className="block text-xl sm:text-2xl font-bold text-white">React 19</span>
          <span>Next-gen component model</span>
        </div>
        <div>
          <span className="block text-xl sm:text-2xl font-bold text-white">Apple AI</span>
          <span>Integrated intelligence</span>
        </div>
        <div>
          <span className="block text-xl sm:text-2xl font-bold text-white">Tailwind v4</span>
          <span>Fluid glass design</span>
        </div>
        <div>
          <span className="block text-xl sm:text-2xl font-bold text-white">Node / Firebase</span>
          <span>Real-time persistence</span>
        </div>
      </div>
    </section>
  );
}
