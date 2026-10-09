import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown, FaPaperPlane, FaCopy, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import Tilt3DCard from "./Tilt3DCard";

const ROLES = [
  "Full-Stack Web Developer",
  "React 19 & Next.js Engineer",
  "AI & Threat Heuristics Builder",
  "Mobile App Creator (React Native)",
];

const QUICK_PROMPTS = [
  { label: "💡 Top Skills", q: "What are Krishan's top skills?" },
  { label: "🪪 Office ID Badge", q: "Show me Krishan's office ID card and credentials" },
  { label: "🛡️ Phishing Detector", q: "How does the Phishing Website Detector work?" },
  { label: "📱 LifeOS Mobile", q: "What is LifeOS Mobile?" },
  { label: "🎓 Education", q: "What is Krishan's education and degree?" },
  { label: "📬 How to Hire", q: "How can I contact or hire Krishan?" },
];

const ANSWERS = {
  skills:
    "Krishan specializes in modern full-stack web and AI architectures: React 19, JavaScript (ES6+), Next.js, Tailwind CSS, Node.js & Express REST APIs, Firebase, and React Native mobile development.",
  idcard:
    "Krishan's official 3D Office ID Card is featured in the About section! It features Level-4 engineering clearance, authentic RFID chip/barcode simulation, credentials at AKTU, and an interactive 3D flip card with scannable QR verification.",
  phishing:
    "The Phishing Website Detector is Krishan's flagship security project. It evaluates URLs for threat indicators, suspicious domain entropy, homoglyph spoofing, and SSL certificate anomalies via a Node.js API to protect users from malicious sites.",
  lifeos:
    "LifeOS Mobile is a personal intelligence operating system built with React Native and Expo. It unifies daily habits, task management, focus blocks, and telemetry into a clean, distraction-free mobile dashboard.",
  education:
    "Krishan is currently pursuing his Master of Computer Applications (M.C.A.) (2025–2027) at Dr. A.P.J. Abdul Kalam Technical University (AKTU). He completed his Bachelor of Computer Applications (B.C.A.) (2022–2025) at CCSU with 1st Division honors.",
  hire:
    "Krishan is open to full-time engineering roles, high-impact web contracts, and freelance projects! Reach him at kkrishankantrajput2112@gmail.com, on GitHub @kk2112-coder, or use the contact form below.",
};

export default function Hero({ onOpenAI, onOpenID }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // In-Hero Interactive AI Query Bar
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) {
            setIsDeleting(true);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 35 : text === current ? 2200 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const handleAsk = (queryText) => {
    const q = (queryText || input).trim();
    if (!q) return;

    setIsLoading(true);
    setResponse(null);

    setTimeout(() => {
      const lower = q.toLowerCase();
      let ans = "";

      if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
        ans = ANSWERS.skills;
      } else if (lower.includes("id") || lower.includes("card") || lower.includes("badge")) {
        ans = ANSWERS.idcard;
      } else if (lower.includes("phishing") || lower.includes("security") || lower.includes("detector")) {
        ans = ANSWERS.phishing;
      } else if (lower.includes("lifeos") || lower.includes("mobile") || lower.includes("app")) {
        ans = ANSWERS.lifeos;
      } else if (lower.includes("education") || lower.includes("degree") || lower.includes("mca") || lower.includes("aktu") || lower.includes("bca")) {
        ans = ANSWERS.education;
      } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("email") || lower.includes("reach")) {
        ans = ANSWERS.hire;
      } else {
        ans = `Krishan Kant is a Full-Stack & AI Developer based in India, pursuing his M.C.A. at AKTU. He builds high-performance web systems and AI tools. Ask the full AI assistant for more details!`;
      }

      setResponse({ query: q, answer: ans });
      setIsLoading(false);
    }, 400);
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response.answer);
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center space-y-8 relative z-10 flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-medium text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Full-Stack &amp; AI Developer • Based in India</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 text-center w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-center text-slate-100 dark:text-slate-100 leading-[1.12]">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Krishan Kant</span>.
            <br />
            I build modern web apps &amp; AI tools.
          </h1>

          {/* Dynamic Role Typewriter */}
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-mono text-cyan-400">
            <span className="text-slate-400">&gt;</span>
            <span className="font-semibold">{text}</span>
            <span className="w-1.5 h-4 bg-cyan-400 animate-pulse inline-block" />
          </div>

          <p className="max-w-xl mx-auto text-center text-sm sm:text-base text-slate-400 leading-relaxed pt-1">
            M.C.A. scholar at AKTU creating high-performance React frontends, resilient Node backends, and intelligent heuristic software with a focus on simplicity.
          </p>
        </div>

        {/* ── Interactive In-Hero AI Widget ── */}
        <div className="max-w-xl mx-auto rounded-3xl bg-slate-900/65 dark:bg-slate-900/65 border border-white/15 p-5 sm:p-6 shadow-[0_12px_40px_0_rgba(0,0,0,0.4)] backdrop-blur-2xl text-left space-y-3.5">
          
          <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
            <span className="font-medium text-slate-200 flex items-center gap-1.5">
              <span className="text-cyan-400">✦</span> Ask my AI anything:
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Instant Answer</span>
          </div>

          {/* Search/Prompt Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything... (skills, projects, education)"
              aria-label="Ask AI"
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border border-slate-200 dark:border-white/15 focus:border-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span className="animate-spin">✦</span>
              ) : (
                <FaPaperPlane className="text-[10px]" />
              )}
              <span>Ask</span>
            </button>
          </form>

          {/* Preset Chips */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-1">
            {QUICK_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInput(item.q);
                  handleAsk(item.q);
                }}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-200 backdrop-blur-md transition-all cursor-pointer shadow-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Instant AI Answer Card */}
          {response && (
            <div className="ai-response mt-3 p-4 rounded-2xl bg-black/45 backdrop-blur-xl border border-cyan-400/40 text-xs text-slate-200 space-y-2 shadow-lg animate-fade-in">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-cyan-400 flex items-center gap-1">
                  <span>✦</span> Answer
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    title="Copy Answer"
                  >
                    {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <button
                    onClick={onOpenAI}
                    className="text-purple-300 hover:text-white underline cursor-pointer"
                  >
                    Open Full Copilot →
                  </button>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">{response.answer}</p>
            </div>
          )}

        </div>

        {/* ── Call To Action Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2" data-testid="hero-cta-group">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <span>Explore Projects</span>
            <FaArrowDown className="text-xs" />
          </button>

          <button
            onClick={onOpenID}
            className="px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 backdrop-blur-xl transition-all cursor-pointer group shadow-sm"
            title="Inspect Official 3D Office ID Badge"
          >
            <span className="text-cyan-400 group-hover:scale-110 transition-transform">🪪</span>
            <span>View ID Pass</span>
          </button>

          <button
            onClick={onOpenAI}
            className="px-5 py-3 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-slate-200 font-semibold text-sm flex items-center gap-2 backdrop-blur-xl transition-all cursor-pointer shadow-sm"
          >
            <span>Ask AI</span>
            <span className="text-cyan-400">✦</span>
          </button>

          <Link
            to="/resume"
            className="px-5 py-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-purple-300 hover:text-white font-semibold text-sm flex items-center gap-1.5 backdrop-blur-xl transition-all shadow-sm"
          >
            <span>Resume</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </Link>
        </div>

        {/* ── Quick Stats Grid with 3D Perspective Tilt ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-4 text-center">
          <Tilt3DCard maxTilt={14} className="rounded-2xl">
            <div className="p-3.5 rounded-2xl bg-slate-900/55 backdrop-blur-xl border border-white/12 hover:border-cyan-400/30 transition-all shadow-sm">
              <div className="text-xl sm:text-2xl font-bold text-slate-100">6+</div>
              <div className="text-[11px] text-slate-400">Projects Built</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={14} className="rounded-2xl">
            <div className="p-3.5 rounded-2xl bg-slate-900/55 backdrop-blur-xl border border-white/12 hover:border-cyan-400/30 transition-all shadow-sm">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">React JS</div>
              <div className="text-[11px] text-slate-400">Modern Frontend</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={14} className="rounded-2xl">
            <div className="p-3.5 rounded-2xl bg-slate-900/55 backdrop-blur-xl border border-white/12 hover:border-cyan-400/30 transition-all shadow-sm">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">Node.js</div>
              <div className="text-[11px] text-slate-400">REST APIs</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={14} className="rounded-2xl">
            <div className="p-3.5 rounded-2xl bg-slate-900/55 backdrop-blur-xl border border-white/12 hover:border-cyan-400/30 transition-all shadow-sm">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400">AKTU</div>
              <div className="text-[11px] text-slate-400">M.C.A. Scholar</div>
            </div>
          </Tilt3DCard>
        </div>

      </div>
    </section>
  );
}