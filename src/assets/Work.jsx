import React, { useEffect, useRef, useState } from "react";
import image1 from "./Images/NowFloat.png"
import image2 from "./Images/WomanSecurity.png"
import image3 from "./Images/Portfolio.png"
import Navbar from "./Navbar";
const projects = [
  {
    title: "NowFloat",
    description:
      "A modern web application built with HTML, CSS, and JavaScript featuring responsive design and interactive user interface.",
    image: image1,
    live: "https://nowfloat1.netlify.app/",
    code: "#",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
  },
  {
    title: "Women Security App",
    description:
      "A safety-focused web application designed to enhance women's security with emergency features and real-time assistance.",
    image: image2,
    live: "https://womensecurity.netlify.app/",
    code: "#",
    technologies: ["HTML5", "CSS3", "JavaScript", "Security"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my skills and projects with dynamic animations and dark theme.",
    image: image3,
    live: "/",
    code: "#",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations"],
  },
];

const skills = [
  {
    name: "HTML5",
    description: "Semantic markup and modern web standards",
    icon: "HTML",
  },
  {
    name: "CSS3",
    description: "Advanced styling and responsive design",
    icon: "CSS",
  },
  {
    name: "JavaScript",
    description: "Interactive functionality and modern ES6+",
    icon: "JS",
  },
  {
    name: "Responsive Design",
    description: "Mobile-first approach and cross-device compatibility",
    icon: "RWD",
  },
];

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0 0 21,19V12H19V19Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Work() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[10%] left-[35%] h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute left-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        <div className="absolute right-[20%] top-[40%] h-2 w-2 animate-pulse rounded-full bg-purple-400" />
        <div className="absolute bottom-[30%] left-[70%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
      </div>

      {/* ================= NAVBAR ================= */}
<Navbar />

      {/* ================= MAIN ================= */}
      <main className="relative z-10">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center px-6 pb-20 pt-28 text-center md:pt-36 min-h-screen">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </p>

            <h1 className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
              My Work
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400 sm:text-xl">
              Explore my portfolio of web development projects, showcasing
              modern design and cutting-edge technologies.
            </p>

            {/* Decorative Line */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </div>
        </section>


        {/* PROJECTS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Featured{" "}
                <span className="text-cyan-400">Projects</span>
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="border-y border-white/5 bg-white/[0.02] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Technologies I{" "}
                <span className="text-cyan-400">Work With</span>
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition-all duration-700 ${visible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
        } hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-950 to-purple-950">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              <ExternalIcon />
              Live Demo
            </a>

            <a
              href={project.code}
              className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <GithubIcon />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[90px] text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ================= SKILL CARD ================= */

function SkillCard({ skill, index }) {
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
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      className={`rounded-2xl border border-white/10 bg-[#0d1220] p-7 text-center transition-all duration-700 ${visible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
        } hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10`}
    >
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-xl font-black text-cyan-400">
        {skill.icon}
      </div>

      <h3 className="text-lg font-bold">{skill.name}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {skill.description}
      </p>
    </div>
  );
}

export default Work;