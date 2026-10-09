import React, { useState } from "react";

/**
 * AppleTechSpecs Component
 * Replicates Apple's iconic "Compare Mac Models" / Tech Specs matrix.
 * Allows visitors, recruiters, and engineering leads to compare Krishan Kant's
 * core competencies across Frontend, Full-Stack, AI Engineering, and Mobile Systems.
 */
export default function AppleTechSpecs() {
  const [selectedPillar, setSelectedPillar] = useState("all");

  const pillars = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "React 19 & Next.js",
      highlight: "120 FPS Fluidity",
      stack: "React 19, JavaScript ES6+, Next.js, HTML5, CSS3",
      styling: "Tailwind CSS v4, Glassmorphism, CSS Custom Props",
      state: "React Context, Custom Hooks, Redux Toolkit",
      speed: "Sub-100ms LCP, Zero Layout Shifts, Concurrent Rendering",
      scenarios: "High-density SaaS dashboards, Interactive AI tools, Flagship web apps",
    },
    {
      id: "backend",
      title: "Backend & Cloud",
      subtitle: "Node.js & Firestore",
      highlight: "< 14ms Latency",
      stack: "Node.js, Express.js, Firebase Firestore, REST APIs",
      styling: "JSON Schema, Structured Payloads, Semantic Status Codes",
      state: "Firestore Real-time Listeners, WebSockets, JWT Auth",
      speed: "High-throughput asynchronous event loops, Cloud DB indexing",
      scenarios: "Threat analysis APIs, Real-time user dashboards, Cloud sync",
    },
    {
      id: "ai",
      title: "AI & Intelligence",
      subtitle: "Agentic Systems & LLMs",
      highlight: "Contextual Inference",
      stack: "Generative UI, Gemini API Dev, Prompt Architecture, Vector Logic",
      styling: "Apple Intelligence Siri Orbs, Fluid Waveforms, Real-time Typing",
      state: "Multi-turn Conversational Context, Ephemeral Sessions",
      speed: "Streaming tokens, Zero-latency fallbacks, Client-side caching",
      scenarios: "In-app AI copilot, Intelligent threat heuristic detectors, Smart assistants",
    },
    {
      id: "mobile",
      title: "Mobile Architecture",
      subtitle: "React Native & Expo",
      highlight: "Cross-Platform Unity",
      stack: "React Native, Expo, React Navigation, Mobile Sensor APIs",
      styling: "NativeWind, Platform-adaptive typography, Fluid Gestures",
      state: "AsyncStorage, Real-time push listeners, Offline caching",
      speed: "Hardware-accelerated native driver animations, 60fps transitions",
      scenarios: "LifeOS personal systems, Mobile cyber scanners, Emergency rescue tools",
    },
  ];

  return (
    <section
      id="specs"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-[#86868b] tracking-wider uppercase">
            <span>Engineering Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Compare capabilities. <br />
            <span className="apple-silver-text">Find the right fit for your team.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868b]">
            Inspect Krishan's technical competencies formatted in Apple's signature specification matrix.
          </p>
        </div>

        {/* ── Desktop & Tablet Comparison Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="apple-card p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-[#2997ff]/40 transition-all"
            >
              {/* Header */}
              <div className="space-y-1 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#2997ff] uppercase tracking-wide">
                  {p.highlight}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">{p.title}</h3>
                <p className="text-xs text-[#86868b]">{p.subtitle}</p>
              </div>

              {/* Specs Rows */}
              <div className="space-y-4 text-xs text-[#a1a1a6] flex-1">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#86868b] block mb-0.5">
                    Core Technologies
                  </span>
                  <p className="text-white font-medium">{p.stack}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#86868b] block mb-0.5">
                    Design &amp; Styling System
                  </span>
                  <p className="text-white font-medium">{p.styling}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#86868b] block mb-0.5">
                    Data &amp; State Synchronization
                  </span>
                  <p className="text-white font-medium">{p.state}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#86868b] block mb-0.5">
                    Performance Benchmark
                  </span>
                  <p className="text-[#30d158] font-medium">{p.speed}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#86868b] block mb-0.5">
                    Best Applied To
                  </span>
                  <p className="text-[#d2d2d7]">{p.scenarios}</p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="apple-btn-secondary w-full py-2 text-xs flex items-center justify-center gap-1"
                >
                  <span>Inquire for {p.title}</span>
                  <span>&rsaquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
