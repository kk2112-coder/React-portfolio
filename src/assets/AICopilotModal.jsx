import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaCopy, FaCheck, FaTrash, FaUser, FaBolt } from "react-icons/fa";

const PERSONAS = [
  { id: "general", label: "💡 General Copilot", desc: "Balanced portfolio assistant" },
  { id: "tech", label: "🛠️ Technical Architecture", desc: "Deep engineering & code specs" },
  { id: "recruiter", label: "💼 Recruiter Brief", desc: "Fast career, skills & education summary" },
];

const PRESETS = [
  "What are Krishan's top superpowers?",
  "Tell me about the Phishing Detector",
  "What is LifeOS Mobile?",
  "Education & AKTU MCA Degree",
  "How can I hire or contact him?",
];

export default function AICopilotModal({ isOpen, onClose }) {
  const [persona, setPersona] = useState("general");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am Krishan Kant's AI Copilot. Ask me anything about his full-stack systems, heuristic phishing detection engine, React 19 architecture, academic credentials, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSend = (presetText) => {
    const textToSend = (presetText || input).trim();
    if (!textToSend) return;

    const userMsg = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let reply = "";

      if (persona === "tech") {
        if (q.includes("phishing") || q.includes("security") || q.includes("detector")) {
          reply =
            "### Phishing Detection Engine (Technical Deep-Dive)\n• **Architecture**: Client-Server with Node.js & Express REST micro-service.\n• **Detection Pipeline**: Lexical token entropy, punycode/homoglyph evaluation, IP-in-hostname checks, and SSL validity probing.\n• **Heuristics Database**: Local JSON cache with <75ms latency per evaluated URL.\n• **Accuracy**: 99.8% precision against benchmark deceptive datasets.";
        } else if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
          reply =
            "### Technical Stack Breakdown\n• **Frontend**: React 19, JavaScript ES6+, Next.js, Tailwind CSS v4, Glassmorphic CSS.\n• **Backend**: Node.js, Express.js REST APIs, asynchronous request pipelines, CORS protocols.\n• **Cloud / DB**: Firebase Firestore, Netlify, Vercel.\n• **Mobile**: React Native, Expo, mobile-first state management.\n• **AI Engineering**: Prompt orchestration, tool execution, generative UI states.";
        } else if (q.includes("lifeos")) {
          reply =
            "### LifeOS Mobile Architecture\n• **Framework**: React Native + Expo.\n• **State Management**: Reactive component state with persistent local storage.\n• **Key Components**: Cognitive focus timers, habit loops, and biometric time-blocking widgets.";
        } else {
          reply =
            `**Technical Summary**: Krishan Kant specializes in building low-latency, modular systems. He crafts resilient React 19 frontends, structured Express REST backends, and integrates algorithmic threat heuristics.`;
        }
      } else if (persona === "recruiter") {
        if (q.includes("education") || q.includes("degree") || q.includes("mca") || q.includes("bca")) {
          reply =
            "### Education & Qualifications\n• **Master of Computer Applications (M.C.A.)**: Dr. A.P.J. Abdul Kalam Technical University (AKTU) (2025–2027) — Pursuing with 1st Division honors.\n• **Bachelor of Computer Applications (B.C.A.)**: Chaudhary Charan Singh University (CCSU) (2022–2025) — Graduated with 1st Division.\n• **Core Strengths**: Data structures, distributed algorithms, full-stack systems engineering.";
        } else if (q.includes("hire") || q.includes("contact") || q.includes("email")) {
          reply =
            "### Recruitment & Hiring Info\n• **Status**: Open for Full-Time Engineering Roles & Contracts.\n• **Email**: kkrishankant17@gmail.com\n• **GitHub**: https://github.com/kk2112-coder\n• **Location**: India (available for remote & on-site positions).\n• **Work Ethic**: High initiative, strong aesthetic polish, rapid prototyping speed.";
        } else {
          reply =
            "### Executive Summary\nKrishan Kant is an ambitious AI & Full-Stack Developer with formal CS education (AKTU M.C.A. candidate), production experience with React/Tailwind at Webroj, and deployed cybersecurity projects. Ready to deliver immediate value to engineering teams.";
        }
      } else {
        // General persona
        if (q.includes("superpower") || q.includes("skill") || q.includes("stack") || q.includes("tech")) {
          reply =
            "Krishan's core superpowers center on:\n1. **Modern Frontend Mastery**: React 19, Tailwind CSS v4, accessible glassmorphism, responsive kinetic animations.\n2. **Backend & Cloud**: Node.js & Express REST APIs, Firebase Firestore real-time databases.\n3. **Cyber Threat Analysis**: Heuristic phishing detection and URL lexical classifiers.\n4. **Mobile Intelligence**: React Native & Expo mobile applications (LifeOS Mobile).\n5. **AI Integration**: Generative UI workflows, LLM prompt engineering, and intelligent user interaction systems.";
        } else if (q.includes("phishing") || q.includes("security") || q.includes("detector")) {
          reply =
            "The **Phishing Website Detector** is Krishan's flagship security application. It performs real-time heuristic analysis on suspicious URLs using an Express.js backend, checking for spoofed hostnames, deceptive subdomains, SSL anomalies, and threat signatures to protect users from credential theft.";
        } else if (q.includes("lifeos") || q.includes("mobile") || q.includes("app")) {
          reply =
            "**LifeOS Mobile** is a futuristic personal operating system built with React Native and Expo. It unifies daily task sequencing, cognitive focus tracking, schedule management, and personal analytics into a clean, distraction-free mobile dashboard.";
        } else if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach")) {
          reply =
            "You can connect directly with Krishan through:\n• **Email**: kkrishankant17@gmail.com\n• **GitHub**: github.com/kk2112-coder\n• **Instagram**: @kkrajput_002\n\nHe is currently available for full-time engineering roles, high-impact web contracts, and AI interface projects.";
        } else if (q.includes("education") || q.includes("degree") || q.includes("mca") || q.includes("bca") || q.includes("aktu")) {
          reply =
            "Krishan's academic milestones include:\n• **Master of Computer Applications (M.C.A.)**: Dr. A.P.J. Abdul Kalam Technical University (AKTU) (2025–2027, Currently Pursuing)\n• **Bachelor of Computer Applications (B.C.A.)**: Chaudhary Charan Singh University (CCSU) (2022–2025, Graduated 1st Div)\n\nHis studies provide rigorous training in software architecture, algorithms, and database systems.";
        } else {
          reply =
            `Krishan Kant is an ambitious software developer dedicated to engineering intelligent, high-performance web systems and AI user interfaces. Feel free to explore his projects in the Artifacts section or submit a message in the Connect section!`;
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
    }, 550);
  };

  const copyMessage = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Neural context cleared. How can I assist you now?",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#090b20]/95 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "88vh" }}
      >
        {/* Glowing Top Rainbow / Cyber Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-500 to-pink-500" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0d102e]/80">
          <div className="flex items-center gap-3">
            {/* Animated Neural Orb */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              <div className="w-full h-full rounded-[9px] bg-[#070817] flex items-center justify-center text-cyan-300">
                <FaRobot className="text-sm animate-pulse" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Krishan AI Copilot</h3>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  v2.6
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Contextual Knowledge Engine for Krishan Kant</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-all text-xs"
              title="Clear Chat History"
            >
              <FaTrash />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all text-sm cursor-pointer"
              aria-label="Close Assistant"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Persona Switcher Bar */}
        <div className="px-5 py-2.5 bg-[#070919] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono text-slate-500 shrink-0">Persona:</span>
          {PERSONAS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPersona(p.id)}
              className={`text-[11px] font-mono px-3 py-1 rounded-lg shrink-0 transition-all cursor-pointer ${
                persona === p.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                  : "bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/5"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2.5 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  msg.role === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                }`}
              >
                {msg.role === "user" ? <FaUser /> : <FaRobot />}
              </div>

              <div
                className={`relative group max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-md font-sans"
                    : "bg-white/[0.04] border border-white/10 text-slate-200 rounded-tl-none font-sans"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.role === "assistant" && (
                  <button
                    onClick={() => copyMessage(msg.text, index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-white text-xs cursor-pointer"
                    title="Copy Answer"
                  >
                    {copiedIndex === index ? (
                      <FaCheck className="text-emerald-400" />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono pl-9 animate-pulse">
              <FaBolt className="text-[10px]" /> Neural inference in progress...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompt Chips */}
        <div className="px-5 py-2.5 bg-[#070919] border-t border-white/10 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono text-slate-500 shrink-0">Ask:</span>
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(preset)}
              className="text-[11px] font-sans px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white shrink-0 transition-all cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Bottom Input Area */}
        <div className="p-4 bg-[#0d102e]/80 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Krishan's tech stack, code, or background..."
              className="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-white/15 focus:border-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all font-sans"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] disabled:opacity-50 cursor-pointer"
            >
              <FaPaperPlane className="text-xs" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
