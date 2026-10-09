import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaShieldAlt, FaMobileAlt, FaLayerGroup, FaInfoCircle, FaTimes, FaCheckCircle } from "react-icons/fa";

import image1 from "./Images/NowFloat.png";
import image2 from "./Images/WomanSecurity.png";
import image3 from "./Images/PortFolio.png";
import image4 from "./Images/PhishingDetector.png";
import image5 from "./Images/Phishing-DetectorURL.jpg";
import image6 from "./Images/LifeOs.jpg";

const PROJECTS = [
  {
    id: 1,
    title: "Phishing Website Detector",
    tagline: "Heuristic Cyber Threat & Spoof Detection Engine",
    category: "AI & Cyber Defense",
    badge: "Flagship AI Project",
    image: image4,
    live: "https://phishguard00.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "A full-stack cybersecurity platform engineered to evaluate URLs for malicious intent, deceptive hostnames, and phishing anomalies using a Node.js REST API and heuristic scoring algorithm.",
    architecture: {
      challenge: "Phishing URLs mutate rapidly with homoglyph attacks, nested subdomains, and obfuscated SSL certs.",
      solution: "Engineered a multi-layered heuristic pipeline analyzing URL lexical entropy, brand spoofing signatures, and SSL validity with JSON database caching.",
      highlights: ["Lexical Entropy Parsing", "Node.js & Express REST Backend", "Real-Time Classification in <75ms", "Clean Cyber HUD Interface"],
    },
    technologies: ["React", "Node.js", "Express.js", "Heuristic Algorithms", "Tailwind CSS", "Netlify"],
  },
  {
    id: 2,
    title: "LifeOS Mobile",
    tagline: "Futuristic Personal Intelligence Operating System",
    category: "Mobile Intelligence",
    badge: "Mobile Architecture",
    image: image6,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "A futuristic React Native mobile application integrating personal intelligence, task architecture, circadian rhythm tracking, and analytics into a unified mobile dashboard.",
    architecture: {
      challenge: "Personal productivity tools are fragmented across tasks, notes, health telemetry, and habits.",
      solution: "Engineered a centralized mobile OS architecture using React Native & Expo with reactive local state and modular widget layout.",
      highlights: ["Modular Widget System", "Gestural Interaction Physics", "Offline-First Persistence", "Futuristic Cyber-Glass Aesthetic"],
    },
    technologies: ["React Native", "Expo", "JavaScript (ES6+)", "Mobile UX", "Async Storage"],
  },
  {
    id: 3,
    title: "AI User Interface Portfolio",
    tagline: "Cosmic Glassmorphic Web Architecture & Agent Copilot",
    category: "Web Architecture",
    badge: "This Project",
    image: image3,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "An intelligent developer portfolio featuring interactive neural terminal, floating ambient iridescent orbs, generative prompt engine, and custom dark/light cosmic theming.",
    architecture: {
      challenge: "Traditional portfolios are static resumes without interactive engagement or personality.",
      solution: "Designed an AI copilot ecosystem with in-hero prompt engine, interactive terminal CLI, and high-performance React 19 architecture.",
      highlights: ["React 19 & Tailwind v4", "Interactive Terminal & Prompt Engine", "Keyboard-driven Cmd+K Copilot", "Accessible Glassmorphic System"],
    },
    technologies: ["React 19", "Tailwind CSS v4", "Vite", "Interactive Canvas", "CSS3 Physics"],
  },
  {
    id: 4,
    title: "Women Security App",
    tagline: "Emergency Safety & Real-Time SOS Rescue Network",
    category: "Web Architecture",
    badge: "Social Impact",
    image: image2,
    live: "https://womensecurity.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "A responsive safety portal engineered for rapid emergency alerting, instant location transmission, and direct police/guardian SOS routing.",
    architecture: {
      challenge: "Emergency alert interfaces must load instantaneously with zero latency and ultra-reliable controls.",
      solution: "Constructed lightweight, zero-dependency responsive frontend with quick-trigger SOS dispatch and emergency contact routing.",
      highlights: ["Instant Distress Beacon", "Geolocation Coordinates Dispatch", "High-Contrast Rapid Touch UI", "Cross-Device Reliability"],
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Protocols", "Netlify"],
  },
  {
    id: 5,
    title: "NowFloat Experience",
    tagline: "Kinetic Interactive Floating Web Platform",
    category: "Web Architecture",
    badge: "Kinetic UI",
    image: image1,
    live: "https://nowfloat1.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "An interactive web platform designed with smooth kinetic animations, fluid responsive grids, and clean component interactions.",
    architecture: {
      challenge: "Building high-framerate fluid animations without jank or CPU throttling.",
      solution: "Leveraged GPU-accelerated CSS transforms and lightweight component design.",
      highlights: ["GPU-Accelerated Transitions", "Adaptive Fluid Grid", "Micro-Interaction Polish", "Responsive Viewport Scaling"],
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "Interactive Motion"],
  },
  {
    id: 6,
    title: "Phishing Detector Mobile",
    tagline: "Cross-Platform Threat Scanner for Handheld Devices",
    category: "Mobile Intelligence",
    badge: "Mobile Security",
    image: image5,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "Mobile threat scanning client developed with React Native and Expo for real-time verification of SMS links and mobile browsing URLs.",
    architecture: {
      challenge: "Mobile users are prime targets for SMS-based smishing and shortened deceptive links.",
      solution: "Constructed an Expo client communicating with the cloud threat engine to instantly classify URLs with visual safety indicators.",
      highlights: ["Instant Threat Flagging", "Low Battery Footprint", "Cross-Platform Compatibility", "Secure REST Handshake"],
    },
    technologies: ["React Native", "Expo", "REST API", "Mobile Security"],
  },
];

const CATEGORIES = ["All Systems", "AI & Cyber Defense", "Mobile Intelligence", "Web Architecture"];

export default function AIProjects() {
  const [activeCategory, setActiveCategory] = useState("All Systems");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Systems"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-mono font-bold text-cyan-300">
              <FaLayerGroup />
              <span>PRODUCTION ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured AI &amp; Web Systems.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore intelligent security engines, mobile operating systems, and high-performance interactive architectures engineered by Krishan.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#090b20]/80 border border-white/10 hover:border-cyan-400/50 overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b20] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-400/40 backdrop-blur-md text-[11px] font-mono font-bold text-cyan-300 shadow-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-400">
                    <span>{project.category}</span>
                    <span className="text-slate-500">v1.0</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-cyan-300/80 font-mono">
                    {project.tagline}
                  </p>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-white/[0.08] mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer py-3"
                >
                  <FaInfoCircle /> Inspect Architecture
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all text-xs"
                    title="View Source Code"
                  >
                    <FaGithub />
                  </a>

                  {project.live && project.live !== "/" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    >
                      <span>Live System</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <span>Overview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Architecture Inspection Modal ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0b0e26] border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#0e1231]">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  System Architecture Inspection
                </span>
                <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                <p className="text-xs text-purple-300 font-mono">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Close Modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              {/* Image banner */}
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <span className="text-xs font-mono text-rose-400 font-bold uppercase">
                    Core Technical Challenge
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architecture.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    Architectural Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architecture.solution}
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-300 font-bold uppercase">
                  Engineering Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.architecture.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <FaCheckCircle className="text-cyan-400 text-xs shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tech Stack */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-purple-300 font-bold uppercase">
                  Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-white/10 bg-[#0e1231] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Status: Verified Artifact</span>
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium flex items-center gap-2"
                >
                  <FaGithub /> Repository
                </a>
                {selectedProject.live && selectedProject.live !== "/" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                  >
                    <span>Launch Live System</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
