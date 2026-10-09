import React, { useState } from "react";
import image1 from "./Images/NowFloat.png";
import image2 from "./Images/WomanSecurity.png";
import image3 from "./Images/PortFolio.png";
import image4 from "./Images/PhishingDetector.png";
import image5 from "./Images/Phishing-DetectorURL.jpg";
import image6 from "./Images/LifeOs.jpg";

const FLAGSHIPS = [
  {
    id: "phishing",
    title: "Phishing Website Detector",
    tagline: "Threat neutralized in milliseconds.",
    category: "AI & Security",
    description:
      "A full-stack cyber intelligence system that parses suspicious URLs, detects zero-day phishing characteristics, evaluates SSL and DNS anomalies, and outputs actionable threat telemetry via an Express.js engine.",
    image: image4,
    liveUrl: "https://phishguard00.netlify.app/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["Node.js API", "React 19", "Express.js", "Heuristic Rules", "Tailwind CSS"],
    badge: "Security Flagship",
    color: "#30d158",
  },
  {
    id: "lifeos",
    title: "LifeOS Mobile",
    tagline: "Personal intelligence in your pocket.",
    category: "Mobile Systems",
    description:
      "A next-generation React Native mobile operating interface. Integrates daily task sequencing, health & focus tracking, real-time analytics, and intelligent scheduling into one unified distraction-free mobile dashboard.",
    image: image6,
    liveUrl: "/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["React Native", "Expo", "Node.js", "Mobile UX", "REST APIs"],
    badge: "Mobile Release",
    color: "#bf5af2",
  },
  {
    id: "portfolio",
    title: "AI User Interface Portfolio",
    tagline: "Cosmic aesthetics. Apple-grade refinement.",
    category: "Web Experiences",
    description:
      "A state-of-the-art interactive digital portfolio featuring 3D iridescent planetary spheres, animated Siri-style Apple Intelligence assistant, real-time benchmarks, and responsive dark/light transitions.",
    image: image3,
    liveUrl: "/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["React 19", "Tailwind v4", "Vite", "Apple Intelligence", "Glassmorphism"],
    badge: "Interactive Core",
    color: "#2997ff",
  },
  {
    id: "womensecurity",
    title: "Women Security Portal",
    tagline: "Emergency rescue network on standby.",
    category: "Web Experiences",
    description:
      "A high-reliability safety web application engineered for instant emergency alerting, real-time location broadcast, and direct police/guardian escalation channels with zero friction.",
    image: image2,
    liveUrl: "https://womensecurity.netlify.app/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["HTML5", "CSS3", "JavaScript", "Security Escalation", "Responsive Web"],
    badge: "Public Good",
    color: "#ff375f",
  },
  {
    id: "nowfloat",
    title: "NowFloat Experience",
    tagline: "Fluid kinetic motion without compromise.",
    category: "Web Experiences",
    description:
      "An interactive web platform designed with smooth kinetic physics, fluid responsive component grids, dynamic animations, and tactile feedback.",
    image: image1,
    liveUrl: "https://nowfloat1.netlify.app/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["JavaScript", "HTML5/CSS3", "Kinetic Physics", "Smooth Motion"],
    badge: "Interactive UI",
    color: "#ff9f0a",
  },
  {
    id: "phishing-mobile",
    title: "Phishing Threat Scanner Mobile",
    tagline: "Cross-platform cyber defense client.",
    category: "Mobile Systems",
    description:
      "Mobile threat scanning client developed with React Native and Expo for real-time mobile URL validation and instant scam protection.",
    image: image5,
    liveUrl: "/",
    githubUrl: "https://github.com/kk2112-coder",
    specs: ["React Native", "Expo", "Mobile Security", "REST API"],
    badge: "Mobile Security",
    color: "#30d158",
  },
];

const CATEGORIES = ["All Flagships", "AI & Security", "Mobile Systems", "Web Experiences"];

export default function AppleProjects() {
  const [activeFilter, setActiveFilter] = useState("All Flagships");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "All Flagships"
      ? FLAGSHIPS
      : FLAGSHIPS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-[#86868b] tracking-wider uppercase">
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Flagship Releases. <br />
            <span className="apple-silver-text">Engineered to perform.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868b]">
            Explore prominent applications built with high standards of security, user interface fluidity, and full-stack rigor.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/[0.08] text-[#86868b] hover:text-white hover:bg-white/[0.14]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Flagship Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="apple-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container with hardware-inspired bezel */}
              <div className="relative h-64 sm:h-72 w-full bg-[#0a0a0c] overflow-hidden border-b border-white/[0.08]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161617] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md"
                    style={{
                      backgroundColor: `${item.color}25`,
                      color: item.color,
                      border: `1px solid ${item.color}50`,
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/80 border border-white/10 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: item.color }}>
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tech Specs */}
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.05] text-[#a1a1a6] border border-white/5"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex items-center gap-3">
                    {item.liveUrl && item.liveUrl !== "/" ? (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn-blue text-xs sm:text-sm px-5 py-2 flex items-center gap-1.5"
                      >
                        <span>Try Live Demo</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="apple-btn-secondary text-xs sm:text-sm px-5 py-2"
                      >
                        Inspect Architecture
                      </button>
                    )}

                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#2997ff] hover:text-[#0077ed] font-medium flex items-center gap-1 transition-colors ml-auto"
                    >
                      <span>Source Code</span>
                      <span>&rsaquo;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="apple-card max-w-lg w-full p-6 sm:p-8 space-y-5 border border-white/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#86868b] font-semibold">
                Architecture Specs
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#86868b] hover:text-white text-lg p-1"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">{selectedProject.title}</h4>
              <p className="text-xs text-[#2997ff] mt-0.5">{selectedProject.tagline}</p>
            </div>

            <p className="text-sm text-[#d2d2d7] leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-white">Implemented Technologies:</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.specs.map((s, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white/10 text-xs text-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-blue text-xs px-4 py-2"
              >
                Explore GitHub Repo &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
