import React, { useState } from "react";
import { FaBrain, FaReact, FaShieldAlt, FaServer, FaMobileAlt, FaTerminal, FaCheck, FaPlay, FaTrash } from "react-icons/fa";

const CAPABILITIES = [
  {
    icon: FaBrain,
    category: "AI & Agentic Systems",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(56,189,248,0.3)",
    tag: "Generative AI",
    title: "LLM & Autonomous Agent Engineering",
    description:
      "Architecting intelligent prompt interfaces, tool-calling pipelines, structured schema validation, and real-time generative UI feedback loops.",
    technologies: ["Prompt Engineering", "Tool Orchestration", "Generative UI", "RAG Concepts", "JSON Heuristics"],
    metric: "Sub-100ms Inference Simulation",
  },
  {
    icon: FaReact,
    category: "Frontend Architecture",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.3)",
    tag: "Next-Gen Web",
    title: "React 19 & Kinetic Canvas Interfaces",
    description:
      "Crafting high-speed, accessible, component-driven web applications with Tailwind CSS, custom glassmorphism, 3D CSS physics, and seamless dark/light switching.",
    technologies: ["React 19", "JavaScript (ES6+)", "Tailwind CSS v4", "Vite", "Responsive Design"],
    metric: "60 FPS Render Smoothness",
  },
  {
    icon: FaShieldAlt,
    category: "Cybersecurity & Heuristics",
    color: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.3)",
    tag: "Threat Intelligence",
    title: "Phishing Detection Heuristic Engine",
    description:
      "Engineering heuristic classifiers and threat analysis services. Evaluates domain entropy, homoglyph attacks, SSL anomaly scores, and URL token patterns.",
    technologies: ["Node.js API", "Lexical Analysis", "Threat Scoring", "Express.js", "Cyber Defense"],
    metric: "99.8% Heuristic Precision",
  },
  {
    icon: FaServer,
    category: "Backend & Cloud Systems",
    color: "from-amber-400 to-orange-600",
    glow: "rgba(251,146,60,0.3)",
    tag: "Micro-Services",
    title: "REST APIs & Cloud Database Pipelines",
    description:
      "Constructing resilient backend endpoints with Express, handling CORS, JSON telemetry, and integrating Firebase Firestore for real-time document sync.",
    technologies: ["Node.js", "Express.js", "Firebase Firestore", "REST APIs", "Vercel / Netlify"],
    metric: "99.9% Uptime Deployment",
  },
  {
    icon: FaMobileAlt,
    category: "Mobile Intelligence",
    color: "from-indigo-400 to-purple-600",
    glow: "rgba(129,140,248,0.3)",
    tag: "Cross-Platform",
    title: "React Native & Expo Ecosystem",
    description:
      "Developing native-grade mobile applications with personal intelligence dashboards (LifeOS Mobile), fluid gestural interactions, and cross-platform consistency.",
    technologies: ["React Native", "Expo", "Mobile Security", "Async Storage", "Component Systems"],
    metric: "Universal iOS & Android Build",
  },
];

const INITIAL_TERMINAL_LOGS = [
  "// Initializing Krishan Kant AI Neural Kernel v2.6.4...",
  "// Node runtime: v20.x | React engine: 19.3.0 | Heuristic core: ready",
  "// Type 'help' or click quick commands below to interrogate the system.",
];

export default function AICapabilities() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState(INITIAL_TERMINAL_LOGS);

  const runCommand = (cmdText) => {
    const raw = (cmdText || terminalInput).trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    let response = [];

    if (lower === "help") {
      response = [
        `> ${raw}`,
        "AVAILABLE SYSTEM COMMANDS:",
        "  • skills        - Print full technical competencies & proficiencies",
        "  • projects      - List deployed flagship AI & web systems",
        "  • security      - Show Phishing Detector threat analysis engine specs",
        "  • education     - Display academic credentials (AKTU M.C.A. & CCSU B.C.A.)",
        "  • hire          - View contact & recruitment channels for Krishan",
        "  • clear         - Clear the neural terminal buffer",
      ];
    } else if (lower === "skills") {
      response = [
        `> ${raw}`,
        "NEURAL SKILLS INVENTORY:",
        "  [AI & Agents]     Prompt Engineering, Tool Calling, Generative UI, Heuristics",
        "  [Frontend Core]   React 19, JavaScript ES6+, Next.js, Tailwind CSS, Glassmorphic UI",
        "  [Backend / API]   Node.js, Express.js REST APIs, Firebase Firestore, WebSockets",
        "  [Mobile Systems]  React Native, Expo, Cross-Platform Architecture",
        "  [DevOps / Tools]  Git, GitHub, Vite, Postman, Netlify, Vercel",
      ];
    } else if (lower === "projects") {
      response = [
        `> ${raw}`,
        "ACTIVE DEPLOYED PRODUCTION SYSTEMS:",
        "  1. Phishing Website Detector -> https://phishguard00.netlify.app/",
        "  2. LifeOS Mobile -> Futuristic Personal Intelligence OS (React Native)",
        "  3. AI User Interface Portfolio -> Cosmic Glassmorphic Architecture",
        "  4. Women Security App -> https://womensecurity.netlify.app/",
        "  5. NowFloat Experience -> https://nowfloat1.netlify.app/",
        "  6. Phishing Detector App (Mobile) -> Cross-platform Threat Scanner",
      ];
    } else if (lower === "security") {
      response = [
        `> ${raw}`,
        "HEURISTIC THREAT SCANNER SPECS:",
        "  • Algorithm: Lexical entropy + Hostname spoofing + SSL signature verification",
        "  • Latency: < 75ms per scanned URL",
        "  • Precision: 99.8% on known adversarial phishing sets",
        "  • Backend: Express.js REST micro-service with JSON heuristics database",
      ];
    } else if (lower === "education") {
      response = [
        `> ${raw}`,
        "ACADEMIC CREDENTIALS:",
        "  • M.C.A. (2025 – 2027) -> Dr. A.P.J. Abdul Kalam Technical University (AKTU) [Pursuing]",
        "  • B.C.A. (2022 – 2025) -> Chaudhary Charan Singh University (CCSU) [Graduated 1st Div]",
        "  • Core Focus: Algorithms, Distributed Architectures, Database Systems & AI",
      ];
    } else if (lower === "hire" || lower === "contact") {
      response = [
        `> ${raw}`,
        "DIRECT NEURAL TRANSMISSION CHANNELS:",
        "  • Email: kkrishankant17@gmail.com",
        "  • GitHub: https://github.com/kk2112-coder",
        "  • Instagram: https://www.instagram.com/kkrajput_002/",
        "  • Status: OPEN for Full-Time Roles & High-Impact Contracts",
      ];
    } else if (lower === "clear") {
      setTerminalLogs(["// Terminal reset. Ready for input."]);
      setTerminalInput("");
      return;
    } else {
      response = [
        `> ${raw}`,
        `Command not recognized: '${raw}'. Type 'help' for available commands.`,
      ];
    }

    setTerminalLogs((prev) => [...prev, ...response]);
    setTerminalInput("");
  };

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-mono font-bold text-cyan-300">
            <span>✦</span>
            <span>SYSTEM ARCHITECTURE &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for the Intelligence Era.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From algorithmic cybersecurity engines to autonomous agent interfaces and high-performance React frontends, discover the foundational pillars of Krishan’s engineering practice.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.04)`,
                }}
              >
                {/* Ambient Top Glow Line */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${cap.color} mb-5 group-hover:w-full transition-all duration-500`} />

                <div className="space-y-4">
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/15 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {cap.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-200 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cap.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Telemetry Benchmark:</span>
                  <span className="font-mono font-bold text-cyan-300">{cap.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Interactive Neural Terminal / Playground (#terminal) ── */}
        <div id="terminal" className="pt-8">
          <div className="rounded-2xl bg-[#070919] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Terminal Window Header Bar */}
            <div className="px-5 py-3 bg-[#0d102b] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <FaTerminal className="text-cyan-400 text-xs" />
                  <span>krishan@neural-core:~ (AI CLI v2.6)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => runCommand("clear")}
                  className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-white/[0.04] border border-white/10"
                  title="Clear Buffer"
                >
                  <FaTrash className="text-[10px]" /> Clear
                </button>
              </div>
            </div>

            {/* Terminal Output Area */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 max-h-72 overflow-y-auto select-text">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    log.startsWith(">")
                      ? "text-cyan-300 font-bold"
                      : log.startsWith("//")
                      ? "text-slate-500"
                      : "text-slate-300 pl-2"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Quick Command Chips */}
            <div className="px-5 py-2.5 bg-[#090b20] border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500">Quick Commands:</span>
              {["help", "skills", "projects", "security", "education", "hire"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono text-cyan-300 hover:text-white transition-all cursor-pointer"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand();
              }}
              className="p-3 bg-[#0a0d26] border-t border-white/10 flex items-center gap-3"
            >
              <span className="font-mono text-cyan-400 font-bold pl-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'skills', 'projects', 'education', 'hire'..."
                className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaPlay className="text-[9px]" /> Exec
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
