import React, { useState } from "react";
import { Link } from "react-router-dom";
import myDp from "./Images/MyDp.jpg";
import { StandingCharacterIllustration } from "./CharacterIllustrations";
import { PlanetaryOrbitFrame, IridescentOrb, CrystalPrism } from "./IridescentSpheres";

const SKILLS = [
  { name: "React & Next.js", level: 90, category: "Frontend" },
  { name: "JavaScript / ES6+", level: 88, category: "Frontend" },
  { name: "Tailwind CSS & Glassmorphism", level: 92, category: "UI/UX" },
  { name: "React Native (Mobile)", level: 75, category: "Mobile" },
  { name: "Node.js & Express APIs", level: 78, category: "Backend" },
  { name: "Firebase & Firestore", level: 82, category: "Backend" },
  { name: "AI UI & Prompt Interfaces", level: 85, category: "AI Engineering" },
  { name: "Git & Collaborative Dev", level: 80, category: "Tools" },
];

const EDUCATION = [
  {
    year: "2025 – 2027",
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    status: "Currently Pursuing",
    badge: "In Progress",
    highlight: true,
  },
  {
    year: "2022 – 2025",
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Chaudhary Charan Singh University (CCSU)",
    status: "Completed",
    badge: "Graduated",
  },
  {
    year: "2022",
    degree: "Higher Secondary (12th)",
    institution: "Central Board of Secondary Education (C.B.S.E)",
    status: "Completed",
  },
];

export default function About() {
  const [viewMode, setViewMode] = useState("illustration"); // "illustration" | "photo"
  const [activeTab, setActiveTab] = useState("skills"); // "skills" | "education" | "story"

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-5 sm:px-10 lg:px-16 overflow-hidden cosmic-nebula flex flex-col justify-center"
    >
      {/* Background Floating Orbs */}
      <div className="absolute top-10 right-10 hidden lg:block opacity-60">
        <IridescentOrb size={80} glowColor="cyan" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-semibold text-purple-300">
            <span>✦</span>
            <span>Creative Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
            Passionate developer blending artistic visual design with robust engineering and modern AI concepts.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ── Left / Center Column: Concentric Planetary Orbit with Character Illustration ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <PlanetaryOrbitFrame size={380} className="w-full max-w-[380px] h-[380px]">
              {viewMode === "illustration" ? (
                <StandingCharacterIllustration />
              ) : (
                <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                  <img
                    src={myDp}
                    alt="Krishan Kant"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </PlanetaryOrbitFrame>

            {/* Toggle view: Illustration vs Real Photo */}
            <div className="mt-6 flex items-center gap-2 p-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setViewMode("illustration")}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "illustration"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Art Illustration
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "photo"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Real Photo
              </button>
            </div>
          </div>

          {/* ── Right Column: Frosted Glass Bio, Skills & Education Tabs ── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Glass Navigation Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md w-fit">
              {[
                { id: "skills", label: "Skills & AI Stack" },
                { id: "education", label: "Education" },
                { id: "story", label: "Bio & Journey" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Skills & AI Stack */}
            {activeTab === "skills" && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Technical Proficiencies</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      Frontend &amp; AI
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Modern frameworks, design tools, and intelligent user interaction models.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILLS.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Competencies Banner */}
                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">AI-Powered Portfolio &amp; Interfaces</h4>
                      <p className="text-xs text-slate-400">Integrating conversational agents, generative UI, and smart predictive UX.</p>
                    </div>
                  </div>
                  <Link
                    to="/resume"
                    className="shrink-0 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10"
                  >
                    View All
                  </Link>
                </div>
              </div>
            )}

            {/* Tab 2: Education */}
            {activeTab === "education" && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all ${
                        edu.highlight
                          ? "bg-purple-900/20 border-purple-400/40 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                          : "bg-white/[0.03] border-white/10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {edu.year}
                        </span>
                        {edu.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                            {edu.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white mt-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Bio & Journey */}
            {activeTab === "story" && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-white">About Krishan Kant</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  I am a passionate software developer focused on frontend innovation, interactive user experiences, and web applications. My philosophy is grounded in creating designs that are not only aesthetically breathtaking through glassmorphism and motion, but also intuitive, accessible, and fast.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Whether developing full-stack security tools like the Phishing Detector, emergency response apps like the Women Security App, or futuristic mobile systems like LifeOS, I embrace solving complex problems with elegance.
                </p>
                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    Clean Code
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-300 border border-purple-400/20">
                    Generative UI &amp; AI
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-pink-500/10 text-pink-300 border border-pink-400/20">
                    Full Responsive
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}