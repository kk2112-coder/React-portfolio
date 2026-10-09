import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaCode, FaUserCheck, FaDownload, FaAward } from "react-icons/fa";
import myDp from "./Images/MyDp.jpg";
import { StandingCharacterIllustration } from "./CharacterIllustrations";
import { PlanetaryOrbitFrame } from "./IridescentSpheres";

const SKILL_METRICS = [
  { name: "React 19 & Next.js", level: 92, category: "Frontend Core", color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript / Modern ES6+", level: 90, category: "Languages", color: "from-amber-400 to-orange-500" },
  { name: "Tailwind CSS & Glassmorphism", level: 94, category: "UI/UX & Design", color: "from-teal-400 to-cyan-500" },
  { name: "Generative AI & Agent Workflows", level: 88, category: "AI Engineering", color: "from-purple-400 to-pink-500" },
  { name: "Node.js & Express REST APIs", level: 84, category: "Backend Architecture", color: "from-emerald-400 to-green-600" },
  { name: "Cyber Threat & Heuristic Engines", level: 86, category: "Security & Heuristics", color: "from-rose-400 to-red-600" },
  { name: "React Native & Expo (Mobile)", level: 78, category: "Mobile Systems", color: "from-indigo-400 to-purple-600" },
  { name: "Firebase Firestore & Cloud", level: 82, category: "Databases & DevOps", color: "from-amber-400 to-yellow-500" },
];

const EDUCATION_TIMELINE = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2025 – 2027",
    status: "Currently Pursuing",
    badge: "Active Scholar",
    highlight: true,
    focus: "Advanced Algorithms, AI Systems, Distributed Computing & Architecture",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Chaudhary Charan Singh University (CCSU)",
    period: "2022 – 2025",
    status: "Graduated with 1st Division",
    badge: "Completed",
    focus: "Software Engineering, Object-Oriented Programming, Database Management",
  },
];

const EXPERIENCE_LOG = [
  {
    role: "Frontend Developer",
    organization: "Webroj",
    period: "July 2025",
    contributions: [
      "Engineered responsive, accessible UI components in React and modern Tailwind CSS.",
      "Optimized rendering pipelines, reducing initial layout shift and improving load metrics.",
      "Integrated REST API endpoints and handled asynchronous state flows seamlessly.",
    ],
  },
];

export default function AIAbout() {
  const [viewMode, setViewMode] = useState("illustration"); // "illustration" | "photo"
  const [activeTab, setActiveTab] = useState("skills"); // "skills" | "education" | "experience"

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-mono font-bold text-cyan-300">
            <FaUserCheck />
            <span>NEURAL IDENTITY &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Krishan Kant.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer passionate about crafting fluid, intelligent digital experiences that merge rigorous software engineering with futuristic generative AI interfaces.
          </p>
        </div>

        {/* Main Grid: Left Orbit Illustration / Photo, Right Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ── Left Column: Concentric Planetary Orbit with Male Character Illustration / Photo ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <PlanetaryOrbitFrame size={380} className="w-full max-w-[380px] h-[380px]">
              {viewMode === "illustration" ? (
                <StandingCharacterIllustration />
              ) : (
                <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_40px_rgba(56,189,248,0.5)]">
                  <img
                    src={myDp}
                    alt="Krishan Kant"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </PlanetaryOrbitFrame>

            {/* Toggle: Male Developer Art vs Real Photograph */}
            <div className="mt-6 flex items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setViewMode("illustration")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  viewMode === "illustration"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ✦ Male Developer Art
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  viewMode === "photo"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Real Photograph
              </button>
            </div>

            {/* Quick Status Tagline */}
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-cyan-300">
                Krishan Kant • M.C.A. Candidate @ AKTU
              </span>
            </div>
          </div>

          {/* ── Right Column: Interactive Tabs (Skills, Education, Experience) ── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Selectors */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 w-fit backdrop-blur-md">
              <button
                onClick={() => setActiveTab("skills")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTab === "skills"
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaCode /> Technical Matrix
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTab === "education"
                    ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaGraduationCap /> Education
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaBriefcase /> Experience
              </button>
            </div>

            {/* TAB CONTENT: Skills Matrix */}
            {activeTab === "skills" && (
              <div className="rounded-2xl bg-[#090b20]/90 border border-white/10 p-6 sm:p-7 space-y-5 backdrop-blur-xl shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Core Technical Benchmarks
                  </span>
                  <span className="text-xs font-mono text-slate-500">Evaluated on Production Deliverables</span>
                </div>

                <div className="space-y-4">
                  {SKILL_METRICS.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-slate-500 text-[10px]">{skill.category}</span>
                          <span className="text-cyan-300 font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      {/* Meter Bar */}
                      <div className="h-2 w-full rounded-full bg-slate-900 border border-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Want the comprehensive technical breakdown?</span>
                  <Link
                    to="/resume"
                    className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1.5 underline"
                  >
                    <FaDownload className="text-xs" /> View Full Resume
                  </Link>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Education Timeline */}
            {activeTab === "education" && (
              <div className="rounded-2xl bg-[#090b20]/90 border border-white/10 p-6 sm:p-7 space-y-6 backdrop-blur-xl shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                    Academic Milestones &amp; Research
                  </span>
                  <span className="text-xs font-mono text-slate-500">Formal CS Training</span>
                </div>

                <div className="space-y-6">
                  {EDUCATION_TIMELINE.map((edu, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all ${
                        edu.highlight
                          ? "bg-purple-500/10 border-purple-400/30"
                          : "bg-white/[0.02] border-white/10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-purple-300 border border-purple-400/30">
                          {edu.period}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                          <FaAward className="text-xs" /> {edu.badge}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-cyan-300/90 font-mono mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        <strong className="text-slate-300">Curriculum Focus:</strong> {edu.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: Work Experience */}
            {activeTab === "experience" && (
              <div className="rounded-2xl bg-[#090b20]/90 border border-white/10 p-6 sm:p-7 space-y-6 backdrop-blur-xl shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Professional Industry History
                  </span>
                  <span className="text-xs font-mono text-slate-500">Engineering Work</span>
                </div>

                <div className="space-y-4">
                  {EXPERIENCE_LOG.map((exp, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-white">{exp.role}</h4>
                          <span className="text-xs font-mono text-cyan-400">@ {exp.organization}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc">
                        {exp.contributions.map((point, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
