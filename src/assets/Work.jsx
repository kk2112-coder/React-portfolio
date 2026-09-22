import React, { useState } from "react";
import image1 from "./Images/NowFloat.png";
import image2 from "./Images/WomanSecurity.png";
import image3 from "./Images/PortFolio.png";
import image4 from "./Images/PhishingDetector.png";
import image5 from "./Images/Phishing-DetectorURL.jpg";
import image6 from "./Images/LifeOs.jpg";
import { IridescentOrb, CrystalPrism } from "./IridescentSpheres";

const PROJECTS = [
  {
    id: 1,
    title: "Phishing Website Detector",
    tagline: "AI & Full-Stack Security Engine",
    category: "AI & Full Stack",
    description:
      "A comprehensive intelligent security platform that evaluates URLs for phishing indicators and cyber threats using a Node.js API backend and JSON heuristic analysis.",
    image: image4,
    live: "https://phishguard00.netlify.app/",
    code: "https://github.com/kk2112-coder",
    technologies: ["React", "Node.js", "Express.js", "Threat Analysis", "Tailwind CSS"],
    badge: "Featured AI Project",
  },
  {
    id: 2,
    title: "LifeOS Mobile",
    tagline: "Futuristic Personal Intelligence Operating System",
    category: "Mobile / React Native",
    description:
      "A futuristic React Native mobile app integrating task intelligence, goal architecture, analytics, and intelligent insights into a unified personal dashboard.",
    image: image6,
    live: "/",
    code: "https://github.com/kk2112-coder",
    technologies: ["React Native", "Expo", "Node.js", "Mobile UX", "APIs"],
    badge: "Mobile OS",
  },
  {
    id: 3,
    title: "AI User Interface Portfolio",
    tagline: "Cosmic Glassmorphic Web Architecture",
    category: "UI Designs",
    description:
      "A state-of-the-art developer portfolio featuring 3D iridescent floating spheres, planetary orbits, interactive AI assistant, and a frosted glass interface.",
    image: image3,
    live: "/",
    code: "https://github.com/kk2112-coder",
    technologies: ["React", "Tailwind CSS", "Vite", "3D Motion", "Firebase"],
    badge: "This Project",
  },
  {
    id: 4,
    title: "Women Security App",
    tagline: "Emergency Safety & Real-Time Rescue Portal",
    category: "Web Apps",
    description:
      "A responsive safety portal engineered for rapid emergency alerting, location transmission, and instant police/guardian communication.",
    image: image2,
    live: "https://womensecurity.netlify.app/",
    code: "https://github.com/kk2112-coder",
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Protocols"],
    badge: "Public Good",
  },
  {
    id: 5,
    title: "NowFloat Experience",
    tagline: "Interactive Floating Web Architecture",
    category: "Web Apps",
    description:
      "An interactive web platform designed with smooth kinetic animations, fluid responsive grids, and clean component interactions.",
    image: image1,
    live: "https://nowfloat1.netlify.app/",
    code: "https://github.com/kk2112-coder",
    technologies: ["HTML5", "CSS3", "JavaScript", "Interactive UI"],
  },
  {
    id: 6,
    title: "Phishing Detector App (Mobile)",
    tagline: "Cross-Platform Threat Scanner",
    category: "Mobile / React Native",
    description:
      "Mobile threat scanning client developed with React Native and Expo for real-time mobile URL verification.",
    image: image5,
    live: "/",
    code: "https://github.com/kk2112-coder",
    technologies: ["React Native", "Expo", "Mobile Security", "REST API"],
  },
];

const CATEGORIES = ["All", "UI Designs", "AI & Full Stack", "Mobile / React Native", "Web Apps"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Safe active project
  const currentProject = filteredProjects[activeIndex] || filteredProjects[0];
  const prevProject =
    filteredProjects[(activeIndex - 1 + filteredProjects.length) % filteredProjects.length];
  const nextProject = filteredProjects[(activeIndex + 1) % filteredProjects.length];

  return (
    <section
      id="work"
      className="relative min-h-screen py-24 px-5 sm:px-10 lg:px-16 overflow-hidden cosmic-nebula flex flex-col justify-center"
    >
      {/* Background accents */}
      <div className="absolute top-20 left-10 hidden xl:block opacity-70">
        <IridescentOrb size={70} glowColor="pink" />
      </div>
      <div className="absolute bottom-10 right-10 hidden xl:block opacity-60">
        <CrystalPrism size={90} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Centered Heading matching reference UI ("My recent work") */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My recent work
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-400">
            Showcase of web applications, AI tools, mobile designs, and responsive UI mockups.
          </p>
        </div>

        {/* Category Filter Pills matching reference UI */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.6)] scale-105"
                  : "bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── 3D Showcase Carousel matching Reference UI ── */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto my-8">
          
          {/* Ambient Glow behind carousel */}
          <div className="absolute w-[600px] h-[300px] rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-pink-500/20 blur-[80px] pointer-events-none" />

          {/* Left Flanking Card (Mockup) */}
          {filteredProjects.length > 1 && (
            <div
              onClick={handlePrev}
              className="hidden md:block w-64 lg:w-72 h-80 rounded-2xl overflow-hidden glass-card opacity-50 hover:opacity-80 transform -translate-x-12 scale-90 -rotate-3 transition-all duration-500 cursor-pointer shadow-xl select-none"
            >
              <div className="h-44 w-full bg-slate-950 overflow-hidden">
                <img
                  src={prevProject?.image}
                  alt={prevProject?.title}
                  className="w-full h-full object-cover object-top opacity-70"
                />
              </div>
              <div className="p-4 bg-slate-900/80">
                <span className="text-[11px] text-cyan-400 font-medium">Mockup</span>
                <h4 className="text-sm font-bold text-white truncate">{prevProject?.title}</h4>
                <p className="text-xs text-slate-400 truncate mt-1">{prevProject?.tagline}</p>
              </div>
            </div>
          )}

          {/* Center Elevated Active Card ("UI Designs" / Active Project) */}
          {currentProject && (
            <div className="relative z-20 w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden glass-panel border border-cyan-400/40 shadow-[0_20px_60px_rgba(56,189,248,0.25)] transform scale-105 transition-all duration-500">
              {/* Card Image Banner with Mockup Frame */}
              <div className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden group">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070817] via-transparent to-transparent opacity-80" />

                {/* Badge */}
                {currentProject.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/90 text-slate-950 shadow-md backdrop-blur-md">
                    {currentProject.badge}
                  </span>
                )}

                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/80 border border-purple-400/30 text-purple-200 backdrop-blur-md">
                  {currentProject.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-cyan-400 mt-0.5">
                    {currentProject.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {currentProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.06] text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  {currentProject.live && currentProject.live !== "/" ? (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm text-center shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(currentProject)}
                      className="flex-1 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 font-semibold text-xs sm:text-sm text-center transition-all"
                    >
                      View Details
                    </button>
                  )}

                  <a
                    href={currentProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5"
                  >
                    <span>Code</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Right Flanking Card (Mockup) */}
          {filteredProjects.length > 2 && (
            <div
              onClick={handleNext}
              className="hidden md:block w-64 lg:w-72 h-80 rounded-2xl overflow-hidden glass-card opacity-50 hover:opacity-80 transform translate-x-12 scale-90 rotate-3 transition-all duration-500 cursor-pointer shadow-xl select-none"
            >
              <div className="h-44 w-full bg-slate-950 overflow-hidden">
                <img
                  src={nextProject?.image}
                  alt={nextProject?.title}
                  className="w-full h-full object-cover object-top opacity-70"
                />
              </div>
              <div className="p-4 bg-slate-900/80">
                <span className="text-[11px] text-purple-400 font-medium">Mockup</span>
                <h4 className="text-sm font-bold text-white truncate">{nextProject?.title}</h4>
                <p className="text-xs text-slate-400 truncate mt-1">{nextProject?.tagline}</p>
              </div>
            </div>
          )}
        </div>

        {/* Carousel Navigation Arrows & Dots */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all"
            aria-label="Previous Project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-cyan-400 shadow-[0_0_10px_#38bdf8]" : "w-2 bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all"
            aria-label="Next Project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-4 flex gap-3">
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}