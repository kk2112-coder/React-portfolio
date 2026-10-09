import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaBolt, FaShieldAlt, FaCode, FaArrowRight, FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";
import { IridescentOrb } from "./IridescentSpheres";

const ROLES = [
  "Generative AI & LLM Systems Engineer",
  "Full-Stack Architect • React 19 & Node.js",
  "Cybersecurity Heuristics & Threat Defense",
  "Autonomous Agent & Interactive UI Designer",
];

const PRESET_QUERIES = [
  "What are Krishan's core superpowers?",
  "Explain the Phishing Detection AI",
  "What is LifeOS Mobile?",
  "How can I hire or contact him?",
];

const KNOWLEDGE_BASE = {
  superpowers:
    "Krishan Kant specializes in modern AI-integrated full-stack systems: React 19, JavaScript (ES6+), Tailwind CSS, Node.js & Express REST APIs, Firebase Firestore, and React Native mobile architecture. He crafts responsive, low-latency, resilient web platforms with intelligent user experiences.",
  phishing:
    "The Phishing Website Detector is Krishan's flagship cybersecurity engine. It inspects URLs using heuristic feature extraction, suspicious lexical entropy scoring, SSL certificate anomalies, and a Node.js threat analysis pipeline to shield users against phishing attacks.",
  lifeos:
    "LifeOS Mobile is a futuristic personal operating system built with React Native and Expo. It unifies daily cognitive focus, routine architecture, task intelligence, and health telemetry into a single streamlined dashboard.",
  hire:
    "Krishan is available for full-time software engineering roles, high-impact AI/Full-Stack contracts, and freelance projects! Reach out via email at kkrishankant17@gmail.com, GitHub @kk2112-coder, or submit the contact form below.",
};

export default function AIHero({ onOpenAI }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // In-hero prompt input & response
  const [promptInput, setPromptInput] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [isInferencing, setIsInferencing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1));
          if (displayText === current) {
            setIsDeleting(true);
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 40 : displayText === current ? 2000 : 75
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleInference = (queryText) => {
    const q = (queryText || promptInput).trim();
    if (!q) return;

    setIsInferencing(true);
    setAiResponse(null);

    setTimeout(() => {
      const lower = q.toLowerCase();
      let answer = "";

      if (lower.includes("superpower") || lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
        answer = KNOWLEDGE_BASE.superpowers;
      } else if (lower.includes("phishing") || lower.includes("security") || lower.includes("detector") || lower.includes("cyber")) {
        answer = KNOWLEDGE_BASE.phishing;
      } else if (lower.includes("lifeos") || lower.includes("mobile") || lower.includes("app")) {
        answer = KNOWLEDGE_BASE.lifeos;
      } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
        answer = KNOWLEDGE_BASE.hire;
      } else {
        answer = `Krishan Kant is an ambitious AI & Full-Stack Engineer based in India, pursuing his M.C.A. at AKTU. He engineers modern intelligent web apps, machine heuristics, and high-performance React architectures. Launch the AI Copilot for deeper queries!`;
      }

      setAiResponse({ query: q, answer });
      setIsInferencing(false);
    }, 450);
  };

  const handleCopy = () => {
    if (!aiResponse) return;
    navigator.clipboard.writeText(aiResponse.answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-8 lg:px-12 cosmic-nebula"
    >
      {/* ── Background Cyber Grid & Glow Orbs ── */}
      <div className="absolute top-16 left-6 lg:left-20 z-0 hidden sm:block opacity-40 animate-float pointer-events-none">
        <IridescentOrb size={90} glowColor="cyan" />
      </div>
      <div className="absolute bottom-16 right-8 lg:right-24 z-0 hidden sm:block opacity-35 animate-float-delayed pointer-events-none">
        <IridescentOrb size={110} glowColor="purple" />
      </div>

      {/* Cybernetic Matrix Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* ── Top Badge: Neural System Status ── */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.25)] animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
            ✦ NEXT-GEN AI &amp; FULL-STACK ARCHITECT
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-200">
            ONLINE
          </span>
        </div>

        {/* ── Main Headline ── */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white dark:text-white leading-[1.08]">
            Engineering Intelligent Systems with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
              AI Precision.
            </span>
          </h1>

          {/* Subtitle / Developer Identity */}
          <p className="text-base sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I am <strong className="text-white font-bold">Krishan Kant</strong> — bridging full-stack web engineering, cybersecurity heuristics, and modern generative AI interfaces.
          </p>

          {/* Dynamic Role Typewriter Bar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/70 border border-white/15 backdrop-blur-md font-mono text-xs sm:text-sm text-cyan-300 shadow-inner">
            <span className="text-purple-400 font-bold">&gt;</span>
            <span className="text-slate-300">agent.exec:</span>
            <span className="text-cyan-400 font-semibold">{displayText}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
          </div>
        </div>

        {/* ── Interactive In-Hero AI Prompt Console ── */}
        <div className="w-full max-w-2xl rounded-2xl bg-[#090b22]/90 border border-cyan-500/25 p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl text-left space-y-3">
          
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <FaRobot className="text-cyan-400" />
              <span className="font-mono font-semibold text-slate-200">Interactive Neural Query</span>
            </div>
            <span className="font-mono text-[10px] text-cyan-300">Latency: ~35ms</span>
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleInference();
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Ask about my skills, phishing detector, LifeOS, or hiring..."
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-all pr-10 font-sans"
              />
              <span className="absolute right-3 top-3.5 text-xs text-slate-500 font-mono hidden sm:inline">
                ↵ enter
              </span>
            </div>
            <button
              type="submit"
              disabled={isInferencing}
              className="px-4 sm:px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] disabled:opacity-50 cursor-pointer"
            >
              {isInferencing ? (
                <span className="animate-spin text-base">✦</span>
              ) : (
                <FaPaperPlane className="text-xs" />
              )}
              <span className="hidden sm:inline">Ask AI</span>
            </button>
          </form>

          {/* Preset Quick Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[11px] text-slate-500 self-center mr-1 hidden sm:inline">
              Try:
            </span>
            {PRESET_QUERIES.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setPromptInput(preset);
                  handleInference(preset);
                }}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-200 transition-all cursor-pointer font-sans"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* AI Response Card (if generated) */}
          {aiResponse && (
            <div className="mt-3 p-3.5 rounded-xl bg-black/60 border border-cyan-400/30 text-xs text-slate-200 space-y-2 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FaBolt /> Neural Synthesizer Answer
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                    title="Copy Answer"
                  >
                    {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <button
                    onClick={onOpenAI}
                    className="text-purple-300 hover:text-white text-[11px] underline flex items-center gap-1 cursor-pointer"
                  >
                    Ask Copilot More →
                  </button>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">{aiResponse.answer}</p>
            </div>
          )}
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={onOpenAI}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FaRobot className="text-base" />
            <span>Launch AI Copilot (⌘K)</span>
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Explore Flagship Work</span>
            <FaArrowRight className="text-xs text-cyan-400" />
          </button>

          <Link
            to="/resume"
            className="px-5 py-3.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-purple-300 hover:text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all"
          >
            <span>View Resume</span>
          </Link>
        </div>

        {/* ── Telemetry / HUD Metrics Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
              <FaShieldAlt /> Heuristic Precision
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Phishing Threat Detection</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
              <FaBolt /> Pipeline Latency
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">&lt;80ms</span>
            <span className="text-[11px] text-slate-400 mt-0.5">High-Speed Heuristics</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-pink-400 text-xs font-mono mb-1">
              <FaCode /> Modern Stack
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">React 19</span>
            <span className="text-[11px] text-slate-400 mt-0.5">+ Node.js &amp; Tailwind v4</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
              <FaRobot /> Autonomous Tech
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">Agentic</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Prompt &amp; Generative UI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
