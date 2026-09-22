import { useEffect, useRef, useState } from "react";
import image1 from "./Images/NowFloat.png";
import image2 from "./Images/WomanSecurity.png";
import image3 from "./Images/PortFolio.png";
import image4 from "./Images/PhishingDetector.png"
import image5 from "./Images/Phishing-DetectorURL.jpg"
import image6 from "./Images/LifeOs.jpg"


/* ─── Projects data ─────────────────────────────────────── */
const PROJECTS = [
  {
    title: "NowFloat",
    description:
      "A modern web application built with HTML, CSS, and JavaScript featuring responsive design and an interactive user interface.",
    image: image1,
    live: "https://nowfloat1.netlify.app/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "HTML/CSS", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    title: "Women Security App",
    description:
      "A safety-focused web application designed to enhance women's security with emergency features and real-time assistance.",
    image: image2,
    live: "https://womensecurity.netlify.app/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "HTML/CSS", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Security"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing skills and projects with dynamic animations and a dark cyber theme.",
    image: image3,
    live: "/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "React"],
    technologies: ["React", "Tailwind CSS", "Vite", "Animations"],
  },
  {
    title: "Phishing Website Detector",
    description:
      "A full-stack tool that analyses URLs to detect potential phishing threats using a Node.js backend and a JSON database.",
    image: image4,
    live: "https://phishguard00.netlify.app/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "JavaScript"],
    technologies: ["React", "Vite", "Node.js", "Express.js"],
  },
  {
    title: "Phishing Website Detector App",
    description:
      "A full-stack tool that analyses URLs to detect potential phishing threats using a Node.js backend and a JSON database.",
    image: image5,
    live: "/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "React Native"],
    technologies: ["React Native", "Node.js", "API's", "Expo"],
  },
  {
    title: "LifeOs",
    description:
      "A futuristic React Native app integrating AI, tasks, goals, history, and insights into one advanced personal operating system.",
    image: image6,
    live: "/",
    code: "https://github.com/kk2112-coder",
    categories: ["All", "React Native"],
    technologies: ["React Native","Node.js", "API's", "Expo"],
  },
];

/* ─── Skills data ───────────────────────────────────────── */
const SKILLS = [
  { name: "HTML5",            icon: "HTML", desc: "Semantic markup & modern web standards",           color: "from-orange-400/20 to-red-500/20",   text: "text-orange-400" },
  { name: "CSS3",             icon: "CSS",  desc: "Advanced styling and responsive design",           color: "from-blue-400/20 to-cyan-500/20",     text: "text-blue-400"   },
  { name: "JavaScript",       icon: "JS",   desc: "Interactive functionality and modern ES6+",        color: "from-yellow-400/20 to-amber-500/20",  text: "text-yellow-400" },
  { name: "React",            icon: "⚛",   desc: "Component-based UI and state management",          color: "from-cyan-400/20 to-blue-500/20",     text: "text-cyan-400"   },
  { name: "Tailwind CSS",     icon: "TW",   desc: "Utility-first CSS for rapid UI building",          color: "from-teal-400/20 to-cyan-500/20",     text: "text-teal-400"   },
  { name: "React Native",     icon: "RN",  desc: "Mobile-first, cross-device Android / IOS App ",      color: "from-purple-400/20 to-pink-500/20",   text: "text-purple-400" },
  { name: "Git & GitHub",     icon: "Git",  desc: "Version control and collaborative development",    color: "from-gray-400/20 to-slate-500/20",    text: "text-gray-300"   },
  { name: "Node.js",          icon: "Node", desc: "Server-side JavaScript and REST APIs",             color: "from-green-400/20 to-emerald-500/20", text: "text-green-400"  },
];

const FILTER_TABS = ["All", "HTML/CSS", "JavaScript", "React","React Native"];

/* ─── External link icon ─────────────────────────────────── */
function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0 0 21,19V12H19V19Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ─── Project Card ───────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cyan-950 to-purple-950">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Shine sweep */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/70 opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              <ExternalIcon /> Live Demo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            <GithubIcon /> Code
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Skill Card ─────────────────────────────────────────── */
function SkillCard({ skill, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-lg font-black ${skill.text}`}
      >
        {skill.icon}
      </div>
      <h3 className="text-sm font-bold text-white">{skill.name}</h3>
      <p className="mt-2 text-xs leading-5 text-gray-400">{skill.desc}</p>
    </div>
  );
}

/* ─── Work page ──────────────────────────────────────────── */
export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) =>
    p.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%]  top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-cyan-500/10  blur-3xl" />
        <div className="absolute bottom-[10%] left-[35%] h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        {/* Floating dots */}
        <div className="absolute left-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400"   />
        <div className="absolute right-[20%] top-[40%] h-2 w-2 animate-pulse rounded-full bg-purple-400"/>
        <div className="absolute bottom-[30%] left-[70%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"   />
      </div>

      <main className="relative z-10">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="flex min-h-screen flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
              Portfolio
            </p>

            <h1 className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
              My Work
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Explore my portfolio of web development projects, showcasing
              modern design and cutting-edge technologies.
            </p>

            {/* Decorative */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section className="px-5 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">

            {/* Section heading */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Featured{" "}
                <span className="text-cyan-400">Projects</span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>

            {/* Filter Tabs */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeFilter === tab
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-400/10"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-400/40 hover:text-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <p className="py-20 text-center text-gray-500">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* ── Skills / Tech ─────────────────────────────────── */}
        <section className="border-y border-white/5 bg-white/[0.02] px-5 py-24 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Technologies I{" "}
                <span className="text-cyan-400">Work With</span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {SKILLS.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── GitHub CTA ───────────────────────────────────── */}
        <section className="px-5 py-20 text-center sm:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold">
              See All on{" "}
              <span className="text-cyan-400">GitHub</span>
            </h2>
            <p className="mt-4 leading-7 text-gray-400">
              Explore more of my open-source projects, experiments, and code
              contributions on GitHub.
            </p>
            <a
              href="https://github.com/kk2112-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <GithubIcon />
              View GitHub Profile
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}