import React, { useState } from "react";

/**
 * AppleIntelligenceSection Component
 * Replicates Apple's signature Apple Intelligence feature section.
 * Includes:
 * - Animated Apple Intelligence glowing fluid rainbow border
 * - Pulsating Siri iridescent orb
 * - In-page live conversational AI assistant
 * - Quick prompt chips and simulated generative inference
 * - 3 Apple-style feature cards with rich visual icons
 */
export default function AppleIntelligenceSection({ onOpenFullAI }) {
  const [activePrompt, setActivePrompt] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResponse, setAiResponse] = useState({
    title: "Krishan's AI Assistant is Ready",
    text: "Ask me anything about Krishan Kant's engineering stack, flagship applications, academic background at AKTU, or hiring availability. I generate real-time intelligent responses.",
    tags: ["React 19", "AI Interfaces", "Full-Stack", "Fast Inference"],
  });

  const promptLibrary = {
    skills: {
      question: "What are Krishan's core engineering superpowers?",
      title: "Core Superpowers & Stack",
      text: "Krishan Kant is an expert in React 19, JavaScript ES6+, Next.js, and Tailwind CSS v4 for UI engineering. On the backend, he architected Node.js/Express REST APIs and Firebase Firestore real-time databases. He specializes in creating Apple-standard glassmorphism user interfaces and integrating LLM agentic capabilities into production workflows.",
      tags: ["React 19", "Next.js", "Tailwind CSS", "Node.js", "Firebase", "AI Workflows"],
    },
    phishing: {
      question: "How does the Phishing Website Detector work?",
      title: "Phishing Website Detector Engine",
      text: "The Phishing Detector is a full-stack cyber security platform. It performs real-time heuristic inspection on URLs to identify spoofed domains, phishing patterns, suspicious SSL certs, and zero-day threat signals through an Express.js API backend, returning a comprehensive security rating to protect users.",
      tags: ["Cyber Defense", "Node.js", "Express API", "Heuristic Analysis", "React UI"],
    },
    lifeos: {
      question: "Tell me about LifeOS Mobile",
      title: "LifeOS: Mobile Intelligence Architecture",
      text: "LifeOS is a futuristic personal operating system built with React Native and Expo. It consolidates daily task intelligence, goal management, schedule optimization, and real-time metrics into a unified, distraction-free mobile dashboard designed for ultra-productive lifestyles.",
      tags: ["React Native", "Expo", "Mobile UX", "Cross-Platform", "Task Intelligence"],
    },
    education: {
      question: "What is Krishan's academic background?",
      title: "Academic Excellence & Degrees",
      text: "Krishan is currently pursuing his Master of Computer Applications (M.C.A.) from Dr. A.P.J. Abdul Kalam Technical University (AKTU) (2025–2027). He previously graduated with a Bachelor of Computer Applications (B.C.A.) from CCSU, building rigorous foundations in data structures, web architecture, and algorithmic design.",
      tags: ["M.C.A. (AKTU)", "B.C.A. (CCSU)", "Computer Science", "Academic Honors"],
    },
  };

  const handlePromptSelect = (key) => {
    const item = promptLibrary[key];
    if (!item) return;
    setActivePrompt(key);
    setIsProcessing(true);

    setTimeout(() => {
      setAiResponse(item);
      setIsProcessing(false);
    }, 450);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setIsProcessing(true);
    const q = inputVal.toLowerCase();

    setTimeout(() => {
      if (q.includes("contact") || q.includes("hire") || q.includes("email")) {
        setAiResponse({
          title: "Direct Contact Information",
          text: "You can reach Krishan directly via email at kkrishankant17@gmail.com, connect on LinkedIn (linkedin.com/in/krishan-kant-615740305/), or check his code repositories at github.com/kk2112-coder. He is open to exciting software engineering roles and freelance innovations.",
          tags: ["Email", "LinkedIn", "GitHub", "Available for Hire"],
        });
      } else if (q.includes("project") || q.includes("work")) {
        setAiResponse({
          title: "Flagship Portfolio Releases",
          text: "Krishan has engineered 6+ prominent digital products: Phishing Website Detector (cyber threat analyzer), LifeOS (personal mobile OS), Women Security App (emergency rescue network), and NowFloat (fluid kinetic web system). Scroll to the Flagships section to inspect live deployments!",
          tags: ["Flagship Apps", "Live Demos", "Full-Stack Code"],
        });
      } else {
        setAiResponse({
          title: `Intelligent Insight: "${inputVal}"`,
          text: `Krishan Kant combines artistic Apple-grade visual precision with high-performance modern web engineering. Whether building responsive React 19 web applications, designing intelligent LLM conversational agents, or developing cross-platform mobile apps, he delivers absurdly capable digital experiences.`,
          tags: ["React 19", "AI Agentic Workflows", "Apple-Standard Design"],
        });
      }
      setIsProcessing(false);
      setInputVal("");
    }, 550);
  };

  return (
    <section
      id="intelligence"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden"
    >
      {/* Background ambient Apple Intelligence iridescent fluid aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#00c6ff]/15 via-[#7e0fff]/20 to-[#ff007f]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* ── 1. Section Eyebrow & Headline ── */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-[#86868b] tracking-wider uppercase">
            <span>✨ Integrated Intelligence</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Apple Intelligence. <br />
            <span className="apple-intelligence-text">
              Personal, responsive, powerful.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
            Krishan Kant builds interfaces that don’t just display content — they understand context.
            Experience live in-browser generative intelligence right now.
          </p>
        </div>

        {/* ── 2. Live Interactive Apple Intelligence Command Center ── */}
        <div className="apple-intelligence-border p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Animated Siri Orb & Question Controls */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Siri Glowing Orb */}
              <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32">
                <div className="absolute inset-0 rounded-full siri-orb opacity-80" />
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#000000]/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "14s" }}>
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Krishan Intelligence Engine
                </h3>
                <p className="text-xs sm:text-sm text-[#86868b] mt-1">
                  Click a suggested query or type your own question below.
                </p>
              </div>

              {/* Suggested Query Buttons */}
              <div className="w-full flex flex-col gap-2">
                <button
                  onClick={() => handlePromptSelect("skills")}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                    activePrompt === "skills"
                      ? "bg-white/20 border-cyan-400 text-white shadow-md"
                      : "bg-white/[0.04] border-white/10 text-[#d2d2d7] hover:bg-white/[0.08]"
                  }`}
                >
                  ⚡ Core superpowers &amp; tech stack
                </button>

                <button
                  onClick={() => handlePromptSelect("phishing")}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                    activePrompt === "phishing"
                      ? "bg-white/20 border-cyan-400 text-white shadow-md"
                      : "bg-white/[0.04] border-white/10 text-[#d2d2d7] hover:bg-white/[0.08]"
                  }`}
                >
                  🛡️ Phishing Detector Security Engine
                </button>

                <button
                  onClick={() => handlePromptSelect("lifeos")}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                    activePrompt === "lifeos"
                      ? "bg-white/20 border-cyan-400 text-white shadow-md"
                      : "bg-white/[0.04] border-white/10 text-[#d2d2d7] hover:bg-white/[0.08]"
                  }`}
                >
                  📱 LifeOS Mobile architecture
                </button>

                <button
                  onClick={() => handlePromptSelect("education")}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                    activePrompt === "education"
                      ? "bg-white/20 border-cyan-400 text-white shadow-md"
                      : "bg-white/[0.04] border-white/10 text-[#d2d2d7] hover:bg-white/[0.08]"
                  }`}
                >
                  🎓 Academic credentials (MCA at AKTU)
                </button>
              </div>
            </div>

            {/* Right Column: AI Response Display & Custom Query Input */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
              {/* Output Display Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#121214]/90 border border-white/10 shadow-xl min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse" />
                      Live Neural Inference
                    </span>
                    <span className="text-[11px] text-[#86868b] font-mono">0ms latency</span>
                  </div>

                  {isProcessing ? (
                    <div className="py-12 flex flex-col items-center justify-center space-y-3">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                      <p className="text-xs text-[#86868b]">Generating intelligent insight...</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {aiResponse.title}
                      </h4>
                      <p className="text-sm text-[#d2d2d7] leading-relaxed">
                        {aiResponse.text}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {aiResponse.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.06] text-[#86868b] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {onOpenFullAI && (
                    <button
                      onClick={onOpenFullAI}
                      className="text-xs text-[#2997ff] hover:text-[#0077ed] font-medium flex items-center gap-1"
                    >
                      <span>Open Full AI Modal</span>
                      <span>&rsaquo;</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Custom Input Form */}
              <form onSubmit={handleCustomSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask anything about Krishan's work, experience, or hire readiness..."
                  className="flex-1 px-4 py-3 rounded-xl bg-[#161617] border border-white/10 focus:border-[#2997ff] text-sm text-white placeholder-[#86868b] outline-none transition"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isProcessing}
                  className="apple-btn-blue px-5 py-3 text-xs sm:text-sm font-semibold disabled:opacity-40"
                >
                  Ask
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── 3. Three Apple-Style Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="apple-card p-6 sm:p-8 space-y-3">
            <span className="text-3xl">⚡</span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Agentic UI Workflows
            </h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Synthesizing user intent directly into interactive components, dynamic state transitions, and responsive feedback loops.
            </p>
          </div>

          <div className="apple-card p-6 sm:p-8 space-y-3">
            <span className="text-3xl">🛡️</span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Threat Intelligence Core
            </h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Applying heuristic algorithmic scanning and automated cyber protection protocols through high-throughput REST APIs.
            </p>
          </div>

          <div className="apple-card p-6 sm:p-8 space-y-3">
            <span className="text-3xl">🎨</span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Liquid Glass Precision
            </h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Meticulous typography, tactile glassmorphism, responsive fluid layouts, and flawless 60fps interaction polish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
