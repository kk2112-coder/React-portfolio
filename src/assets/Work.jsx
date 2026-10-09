import React, { useState, useRef, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaTimes,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaThLarge,
  FaSlidersH,
  FaShieldAlt,
  FaBolt,
  FaMobileAlt,
  FaCodeBranch,
} from "react-icons/fa";

import image1 from "./Images/NowFloat.png";
import image2 from "./Images/WomanSecurity.png";
import image3 from "./Images/PortFolio.png";
import image4 from "./Images/PhishingDetector.png";
import image5 from "./Images/Phishing-DetectorURL.jpg";
import image6 from "./Images/LifeOs.jpg";
import Tilt3DCard from "./Tilt3DCard";

const PROJECTS = [
  {
    id: 1,
    sysId: "SYS.01",
    title: "Phishing Website Detector",
    tagline: "Heuristic Threat & Deceptive URL Scanner",
    category: "AI & Cyber Defense",
    badge: "Flagship AI Project",
    status: "Live Engine",
    metric: "<75ms Response",
    metricLabel: "Classification Speed",
    image: image4,
    live: "https://phishguard00.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "A full-stack cybersecurity web tool that scans URLs for phishing signatures, deceptive subdomains, and SSL anomalies via a Node.js API and heuristic analysis.",
    architecture: {
      challenge:
        "Phishing attacks use deceptive homoglyphs, multiple nested subdomains, and obfuscated redirects that bypass static rule engines.",
      solution:
        "Built a multi-heuristic classifier scanning lexical entropy, character distributions, domain reputation, and SSL signatures with Node.js.",
    },
    highlights: [
      "Real-time URL lexical feature parsing",
      "Node.js & Express REST API backend",
      "Sub-75ms response classification",
      "Clean cyber defense user interface",
    ],
    technologies: ["React", "Node.js", "Express.js", "Heuristic Logic", "Tailwind CSS"],
  },
  {
    id: 2,
    sysId: "SYS.02",
    title: "LifeOS Mobile",
    tagline: "Futuristic Personal Intelligence Operating System",
    category: "Mobile Apps",
    badge: "React Native",
    status: "Expo Mobile",
    metric: "Offline-First",
    metricLabel: "Local State Cache",
    image: image6,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "A cross-platform mobile application uniting daily focus architecture, routines, habit tracking, and personal analytics into a clean mobile operating system.",
    architecture: {
      challenge:
        "Productivity apps are often overly complex or require constant internet connectivity, disrupting workflow in low-connectivity areas.",
      solution:
        "Architected an offline-first mobile engine in React Native & Expo with reactive storage and low-friction gestural routines.",
    },
    highlights: [
      "Cross-platform React Native & Expo build",
      "Offline-first local state persistence",
      "Interactive gestural widgets",
      "Minimalist distraction-free dashboard",
    ],
    technologies: ["React Native", "Expo", "JavaScript (ES6+)", "Mobile UX", "Async Storage"],
  },
  {
    id: 3,
    sysId: "SYS.03",
    title: "AI User Interface Portfolio",
    tagline: "Next-Gen Web Architecture with AI Copilot",
    category: "Web Apps",
    badge: "This Website",
    status: "Production UI",
    metric: "Sub-50ms",
    metricLabel: "Client Interaction",
    image: image3,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "A modern, highly interactive personal portfolio featuring an interactive in-hero AI Q&A prompt box, dark/light theme switching, and smooth glassmorphism.",
    architecture: {
      challenge:
        "Standard developer portfolios feel static and resume-like without interactive proof of engineering mastery.",
      solution:
        "Engineered an interactive copilot modal, in-hero natural query answers, 3D interactive office ID card, and fluid glassmorphism.",
    },
    highlights: [
      "React 19 & Tailwind CSS v4",
      "Interactive in-hero AI prompt widget",
      "Full conversational AI Copilot (⌘K)",
      "Accessible dark and light themes with persistence",
    ],
    technologies: ["React 19", "Tailwind CSS", "Vite", "AI Assistant", "CSS Motion"],
  },
  {
    id: 4,
    sysId: "SYS.04",
    title: "Women Security App",
    tagline: "Emergency Safety & Real-Time SOS Rescue Network",
    category: "Web Apps",
    badge: "Social Impact",
    status: "Live Portal",
    metric: "Instant Dispatch",
    metricLabel: "Emergency Trigger",
    image: image2,
    live: "https://womensecurity.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "A safety-first responsive web portal designed for rapid emergency alerting, location transmission, and instant police/guardian communication.",
    architecture: {
      challenge:
        "Emergency alerting tools fail if they require multiple taps, complex navigation, or heavy client bundles during crisis situations.",
      solution:
        "Implemented high-contrast one-tap emergency triggers and direct GPS coordinate forwarding to guardian networks.",
    },
    highlights: [
      "Instant SOS emergency dispatch trigger",
      "Real-time location coordinate transmission",
      "High-contrast, one-touch mobile interface",
      "Zero-latency lightweight frontend",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Protocols", "Netlify"],
  },
  {
    id: 5,
    sysId: "SYS.05",
    title: "NowFloat Experience",
    tagline: "Kinetic Interactive Floating Web Architecture",
    category: "Web Apps",
    badge: "Interactive UI",
    status: "Live Web",
    metric: "60 FPS",
    metricLabel: "GPU Physics",
    image: image1,
    live: "https://nowfloat1.netlify.app/",
    code: "https://github.com/kk2112-coder",
    description:
      "An interactive web platform featuring smooth physics-driven floating animations, kinetic hover interactions, and responsive card layouts.",
    architecture: {
      challenge:
        "Complex floating animations often trigger layout thrashing and drop frames on non-desktop hardware.",
      solution:
        "Used CSS transforms and requestAnimationFrame timing to guarantee butter-smooth 60fps rendering without CPU spikes.",
    },
    highlights: [
      "Hardware-accelerated CSS animations",
      "Smooth kinetic hover effects",
      "Clean fluid typography and spacing",
      "Full cross-browser responsiveness",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Interactive Motion"],
  },
  {
    id: 6,
    sysId: "SYS.06",
    title: "Phishing Detector Mobile",
    tagline: "Handheld Threat Scanner for Mobile Browsing",
    category: "Mobile Apps",
    badge: "Mobile Security",
    status: "Mobile Native",
    metric: "Portable",
    metricLabel: "Handheld Defense",
    image: image5,
    live: "/",
    code: "https://github.com/kk2112-coder",
    description:
      "A handheld mobile threat scanner designed to evaluate deceptive SMS links and phishing URLs on Android and iOS devices.",
    architecture: {
      challenge:
        "Mobile SMS phishing ('smishing') is increasing exponentially while native mobile browsers have limited inspection telemetry.",
      solution:
        "Built a mobile companion app running cross-platform on Android and iOS to quickly parse SMS payloads and evaluate risk scores.",
    },
    highlights: [
      "Built with React Native & Expo",
      "Fast cloud API integration",
      "Visual threat indicator cards",
      "Minimalist mobile layout",
    ],
    technologies: ["React Native", "Expo", "REST API", "Mobile Security"],
  },
];

const CATEGORIES = ["All", "AI & Cyber Defense", "Mobile Apps", "Web Apps"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [viewMode, setViewMode] = useState("gallery"); // "gallery" | "grid"
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const galleryRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update current slide index on horizontal scroll
  const handleScroll = () => {
    if (!galleryRef.current) return;
    const { scrollLeft, clientWidth } = galleryRef.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / (clientWidth * 0.75));
      setCurrentSlide(Math.min(Math.max(idx, 0), filteredProjects.length - 1));
    }
  };

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const cardWidth = 420;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToSlide = (index) => {
    if (!galleryRef.current) return;
    const cardWidth = 420;
    galleryRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setCurrentSlide(index);
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentSlide(0);
    if (galleryRef.current) {
      galleryRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Auto horizontally scroll projects showcase
  useEffect(() => {
    if (viewMode !== "gallery" || isHovered || !isAutoPlay) return;

    const interval = setInterval(() => {
      if (!galleryRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 30) {
        // Loop back smoothly to the beginning
        galleryRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentSlide(0);
      } else {
        const itemWidth = galleryRef.current.firstElementChild?.offsetWidth || 420;
        const gap = 24; // gap-6
        galleryRef.current.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [viewMode, isHovered, isAutoPlay, filteredProjects.length]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
      {/* ── Section Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>Interactive System Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Projects &amp; Systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A curated horizontal showcase of AI cybersecurity engines, mobile intelligence apps, and interactive web architecture.
          </p>
        </div>

        {/* Controls Bar: Category Filters & View Mode */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                aria-label={cat}
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

          {/* View Mode Switcher (Gallery Reel vs Grid Matrix) */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-sm">
            <button
              onClick={() => setViewMode("gallery")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "gallery"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Horizontal Gallery Reel"
              aria-label="Gallery View"
            >
              <FaSlidersH className="text-xs" />
              <span className="hidden sm:inline">Gallery</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Standard Grid Matrix"
              aria-label="Grid View"
            >
              <FaThLarge className="text-xs" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Gallery Reel Navigation Header (Only in Gallery Mode) ── */}
      {viewMode === "gallery" && (
        <div className="pt-6 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/25 font-semibold backdrop-blur-md">
              INDEX [{String(currentSlide + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}]
            </span>
            <button
              type="button"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-all cursor-pointer ${
                isAutoPlay
                  ? "bg-cyan-500/10 text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/20"
                  : "bg-slate-800/50 text-slate-400 border-white/10 hover:text-white"
              }`}
              title={
                isAutoPlay
                  ? "Auto-scrolling active (hover card to pause). Click to turn off."
                  : "Auto-scroll paused. Click to turn on."
              }
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isAutoPlay
                    ? isHovered
                      ? "bg-amber-400"
                      : "bg-emerald-400 animate-pulse"
                    : "bg-slate-500"
                }`}
              />
              <span>{isAutoPlay ? (isHovered ? "Auto: Paused" : "Auto: On") : "Auto: Off"}</span>
            </button>
            <span className="hidden md:inline text-slate-500">
              Hover to pause • Smooth horizontal glide
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollGallery("left")}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              title="Next Project"
              aria-label="Next Project"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      )}

      {/* ── Main Showcase Display: Gallery or Grid ── */}
      <div className="pt-4">
        {viewMode === "gallery" ? (
          /* ── Horizontal Gallery Reel Mode ── */
          <div className="relative">
            <div
              ref={galleryRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredProjects.map((project, idx) => (
                <Tilt3DCard
                  key={project.id}
                  maxTilt={10}
                  className="project-card group shrink-0 w-[300px] sm:w-[380px] md:w-[420px] snap-center rounded-3xl bg-slate-900/65 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 overflow-hidden shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] hover:shadow-[0_18px_50px_0_rgba(56,189,248,0.22)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Telemetry Strip */}
                    <div className="px-5 py-3 border-b border-white/[0.08] bg-slate-950/40 backdrop-blur-md flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wider">
                        <span>{project.sysId}</span>
                        <span className="text-slate-600">//</span>
                        <span className="text-slate-300 uppercase truncate max-w-[140px]">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] uppercase font-semibold">{project.status}</span>
                      </div>
                    </div>

                    {/* Cinematic Media Window */}
                    <div className="relative h-52 overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-cyan-300 shadow-md">
                          {project.badge}
                        </span>
                      </div>

                      {/* Micro Metric Badge */}
                      <div className="absolute bottom-3 right-3">
                        <div className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 text-right">
                          <span className="block text-[9px] font-mono text-slate-400 leading-none">
                            {project.metricLabel}
                          </span>
                          <span className="text-xs font-mono font-bold text-cyan-300">
                            {project.metric}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-cyan-400/80 font-medium mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-300 border border-white/10 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.05] text-slate-500 font-mono">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-5 pt-3 border-t border-white/[0.08] bg-slate-950/40 backdrop-blur-md flex items-center justify-between text-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1.5 cursor-pointer py-1.5 transition-colors group/btn"
                    >
                      <FaInfoCircle className="text-xs group-hover/btn:scale-110 transition-transform" />
                      <span>Quick Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10 transition-all"
                        title="Source Code"
                        aria-label={`Source Code for ${project.title}`}
                      >
                        <FaGithub className="text-sm" />
                      </a>

                      {project.live && project.live !== "/" ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                        >
                          <span>Live Demo</span>
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10 text-xs font-medium cursor-pointer transition-all"
                        >
                          Details
                        </button>
                      )}
                    </div>
                  </div>
                </Tilt3DCard>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentSlide === i
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Jump to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── Standard Grid Matrix Mode ── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Tilt3DCard
                key={project.id}
                maxTilt={12}
                className="project-card group rounded-3xl bg-slate-900/65 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/50 overflow-hidden shadow-[0_10px_35px_0_rgba(0,0,0,0.3)] hover:shadow-[0_16px_45px_0_rgba(56,189,248,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top System Bar */}
                  <div className="px-4 py-2 border-b border-white/[0.06] bg-slate-950/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-cyan-400 font-bold">{project.sysId}</span>
                    <span className="text-emerald-400 uppercase font-semibold">● {project.status}</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-medium text-cyan-300">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                      {project.category}
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-500 font-mono">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-5 pt-0 border-t border-white/[0.06] mt-3 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer py-2"
                  >
                    <FaInfoCircle className="text-xs" />
                    <span>Quick Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all"
                      title="Source Code"
                    >
                      <FaGithub className="text-sm" />
                    </a>

                    {project.live && project.live !== "/" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs flex items-center gap-1 transition-all"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 text-xs font-medium cursor-pointer"
                      >
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        )}
      </div>

      {/* ── Interactive Project Details Modal ── */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-fade-in">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project Details"
            className="relative w-full max-w-2xl rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/20 p-6 sm:p-7 shadow-[0_25px_60px_0_rgba(0,0,0,0.65)] space-y-5 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-cyan-400 font-bold">{activeModalProject.sysId}</span>
                  <span className="text-slate-600">//</span>
                  <span className="text-purple-400 uppercase font-semibold">
                    {activeModalProject.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-300">
                  {activeModalProject.badge}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-cyan-300 font-bold">
                  Telemetry: {activeModalProject.metric}
                </span>
              </div>
            </div>

            {/* In-Depth Architecture Analysis */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <FaCodeBranch />
                <span>Architecture &amp; Engineering Solution</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-slate-200 font-semibold block text-[11px] uppercase tracking-wider text-rose-400">
                    Challenge
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {activeModalProject.architecture?.challenge || activeModalProject.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-slate-200 font-semibold block text-[11px] uppercase tracking-wider text-emerald-400">
                    Solution
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {activeModalProject.architecture?.solution || activeModalProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-200">Key Engineering Features:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-white/[0.02]">
                    <FaCheck className="text-emerald-400 text-[10px] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-200">Technologies Applied:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Krishan Kant // Systems Portfolio
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={activeModalProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  <FaGithub /> View Code
                </a>
                {activeModalProject.live && activeModalProject.live !== "/" && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <span>Open Live App</span>
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