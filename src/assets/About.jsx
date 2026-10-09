import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaCode, FaCheck, FaFileAlt } from "react-icons/fa";
import myDp from "./Images/MyDp.jpg";
import { StandingCharacterIllustration } from "./CharacterIllustrations";
import Tilt3DCard from "./Tilt3DCard";

const SKILLS_DATA = [
  {
    name: "React 19 & Next.js",
    category: "Frontend",
    level: 92,
    projects: "AI Portfolio, Phishing Detector, Webroj UI",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 90,
    projects: "All projects, REST API consumers",
  },
  {
    name: "Tailwind CSS & Glassmorphism",
    category: "Frontend",
    level: 94,
    projects: "Portfolio, Phishing Detector, NowFloat",
  },
  {
    name: "Node.js & Express.js",
    category: "Backend & APIs",
    level: 84,
    projects: "Phishing Threat API, REST services",
  },
  {
    name: "REST APIs & JSON Heuristics",
    category: "Backend & APIs",
    level: 86,
    projects: "Phishing Website Detector engine",
  },
  {
    name: "Firebase & Firestore",
    category: "Backend & APIs",
    level: 80,
    projects: "Document storage, Authentication",
  },
  {
    name: "AI Prompting & Copilot UIs",
    category: "AI & Security",
    level: 88,
    projects: "Interactive AI Copilot, Generative widgets",
  },
  {
    name: "Phishing Threat Analysis",
    category: "AI & Security",
    level: 86,
    projects: "Phishing Detector, Lexical scanner",
  },
  {
    name: "React Native & Expo",
    category: "Mobile & Tools",
    level: 78,
    projects: "LifeOS Mobile, Handheld Threat Scanner",
  },
  {
    name: "Git, GitHub & Vite",
    category: "Mobile & Tools",
    level: 85,
    projects: "Version control, Build pipelines",
  },
];

const CATEGORIES = ["All Skills", "Frontend", "Backend & APIs", "AI & Security", "Mobile & Tools"];

export default function About({ onOpenID }) {
  const [viewMode, setViewMode] = useState("illustration"); // "illustration" | "photo"
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills =
    activeCategory === "All Skills"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* ── Section Header ── */}
      <div className="text-center space-y-3 max-w-2xl mx-auto pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300">
          <span>✦</span>
          <span>Background &amp; Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          About &amp; Credentials.
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Scholarly background, verified engineering pass, and interactive skills linked directly to real-world code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ── Left Column: Interactive Avatar & Bio Card ── */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-900/65 dark:bg-slate-900/65 border border-white/15 p-6 sm:p-7 space-y-5 shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl flex flex-col items-center text-center min-h-[350px]" data-testid="about-avatar-column">
          
          {/* Avatar Display Frame */}
          <div className="relative w-52 h-52 flex items-center justify-center">
            {viewMode === "illustration" ? (
              <div className="w-full h-full flex items-center justify-center animate-fade-in">
                <StandingCharacterIllustration />
              </div>
            ) : (
              <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-cyan-400 shadow-xl animate-fade-in">
                <img
                  src={myDp}
                  alt="Krishan Kant"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Interactive Toggle */}
          <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl shadow-inner">
            <button
              onClick={() => setViewMode("illustration")}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === "illustration"
                  ? "bg-cyan-500 text-black font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ✦ Developer Art
            </button>
            <button
              onClick={() => setViewMode("photo")}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === "photo"
                  ? "bg-cyan-500 text-black font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Photograph
            </button>
          </div>

          {/* Dedicated 3D Office ID Badge Launcher Pill */}
          <button
            type="button"
            data-testid="about-id-button"
            onClick={onOpenID}
            className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 hover:from-cyan-500/25 hover:via-purple-500/25 hover:to-pink-500/25 border border-cyan-400/40 hover:border-cyan-400/60 text-slate-100 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-xl transition-all cursor-pointer group"
            title="Inspect 3D Office ID Badge"
          >
            <span className="text-cyan-400 group-hover:scale-110 transition-transform text-sm">🪪</span>
            <span>View 3D Office ID Pass</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-cyan-300 border border-cyan-400/20">
              L4 CLEARANCE
            </span>
          </button>

          {/* Bio text */}
          <div className="space-y-2 text-left w-full pt-2 border-t border-white/10">
            <h3 className="text-lg font-bold text-slate-100 text-center">
              Krishan Kant
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed text-center">
              Full-Stack Developer passionate about creating responsive user interfaces, algorithmic security tools, and intelligent software.
            </p>
          </div>

          {/* Quick Education / Career Milestones */}
          <div className="w-full space-y-2.5 text-left text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/12 hover:border-cyan-400/30 flex items-start gap-2.5 transition-all shadow-sm">
              <FaGraduationCap className="text-cyan-400 text-sm mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200 block">M.C.A. (2025–2027)</span>
                <span className="text-slate-400 text-[11px]">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/12 hover:border-cyan-400/30 flex items-start gap-2.5 transition-all shadow-sm">
              <FaGraduationCap className="text-purple-400 text-sm mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200 block">B.C.A. (2022–2025)</span>
                <span className="text-slate-400 text-[11px]">Chaudhary Charan Singh University</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/12 hover:border-cyan-400/30 flex items-start gap-2.5 transition-all shadow-sm">
              <FaGraduationCap className="text-cyan-400 text-sm mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200 block">Secondary Education (2022)</span>
                <span className="text-slate-400 text-[11px]">C.B.S.E</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/12 hover:border-cyan-400/30 flex items-start gap-2.5 transition-all shadow-sm">
              <FaGraduationCap className="text-cyan-400 text-sm mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200 block">Higher Education (2020)</span>
                <span className="text-slate-400 text-[11px]">C.B.S.E</span>
              </div>
            </div>
          </div>

          <Link
            to="/resume"
            className="w-full py-2.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-purple-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 backdrop-blur-md transition-all shadow-sm"
          >
            <FaFileAlt /> View Complete Resume
          </Link>
        </div>

        {/* ── Right Column: Interactive Skills Explorer ── */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Skill Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-sm w-fit">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedSkill(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-black font-semibold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Selected Skill Banner */}
          {selectedSkill && (
            <div className="p-4 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-xl text-xs text-slate-200 flex items-start justify-between gap-3 shadow-md animate-fade-in">
              <div>
                <span className="font-bold text-cyan-300">{selectedSkill.name}</span>
                <p className="text-slate-300 mt-1">
                  <strong>Projects utilizing this tech:</strong> {selectedSkill.projects}
                </p>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill, index) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <Tilt3DCard key={index} maxTilt={12} className="rounded-2xl">
                  <div
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500/20 border-cyan-400 shadow-[0_8px_30px_0_rgba(6,182,212,0.25)] scale-[1.02] backdrop-blur-xl"
                        : "bg-slate-900/55 hover:bg-slate-900/80 border-white/12 hover:border-cyan-400/50 backdrop-blur-xl shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-100">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-[11px]">{skill.level}%</span>
                    </div>

                    {/* Level Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Micro Hint */}
                    <div className="text-[10px] text-slate-400 truncate">
                      Used in: {skill.projects}
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>

          <div className="text-center sm:text-left text-xs text-slate-500 pt-2">
            💡 Tip: Click any skill to inspect where it was applied.
          </div>

        </div>

      </div>
    </section>
  );
}