import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import myDp from "./Images/MyDp.jpg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

/* ─── Typewriter config ──────────────────────────────────── */
const ROLES = [
  "Web Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "React Developer",
];

/* ─── Social links ───────────────────────────────────────── */
const SOCIALS = [
  {
    href: "https://github.com/kk2112-coder",
    label: "GitHub",
    icon: <FaGithub className="text-lg" />,
    hover: "hover:bg-gray-700 hover:border-gray-500",
  },
  {
    href: "https://www.linkedin.com/in/krishan-kant-615740305/",
    label: "LinkedIn",
    icon: <FaLinkedin className="text-lg" />,
    hover: "hover:bg-blue-700 hover:border-blue-500",
  },
  {
    href: "https://x.com/",
    label: "Twitter / X",
    icon: <FaTwitter className="text-lg" />,
    hover: "hover:bg-sky-700 hover:border-sky-500",
  },
  {
    href: "https://www.instagram.com/kkrajput_002/",
    label: "Instagram",
    icon: <FaInstagram className="text-lg" />,
    hover: "hover:bg-pink-700 hover:border-pink-500",
  },
];

/* ─── Stats ──────────────────────────────────────────────── */
const STATS = [
  { value: "5+",   label: "Projects" },
  { value: "6+",   label: "Technologies" },
  { value: "1yr",  label: "Experience" },
  { value: "100%", label: "Dedication" },
];

/* ─── Particle component ─────────────────────────────────── */
function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        dur: Math.random() * 8 + 4,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-drift ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Ambient blobs */}
      <div className="absolute left-[10%] top-[20%] h-80 w-80 rounded-full bg-cyan-600/10 blur-[100px]" />
      <div className="absolute right-[5%] top-[30%] h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
    </div>
  );
}

/* ─── Social link button ─────────────────────────────────── */
function SocialLink({ href, label, icon, hover }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white ${hover}`}
    >
      {icon}
    </a>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text,      setText]      = useState("");
  const [deleting,  setDeleting]  = useState(false);
  const [visible,   setVisible]   = useState(false);

  /* Fade-in on mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter */
  useEffect(() => {
    const current = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) setDeleting(true);
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
          }
        }
      },
      deleting ? 55 : text === current ? 1800 : 95
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      <Particles />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 transition-all duration-1000 sm:px-8 lg:grid-cols-2 lg:pt-0 xl:px-16 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ── Left ─────────────────────────────────────────── */}
        <section className="order-2 lg:order-1">

          {/* Available badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for hire
          </div>

          {/* Greeting */}
          <p className="mb-2 text-base font-medium text-gray-400 sm:text-lg">
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold text-transparent">
              Krishan Kant
            </span>
          </p>

          {/* Typewriter heading */}
          <h1 className="mb-5 min-h-[1.2em] text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-0.5 animate-blink text-cyan-400">|</span>
          </h1>

          {/* Bio */}
          <p className="mb-8 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            A passionate and self-motivated Web Developer with a strong interest
            in building user-friendly and visually appealing websites. I
            specialize in creating responsive front-end designs using HTML, CSS,
            JavaScript, and modern frameworks like React. Always eager to learn,
            solve real-world problems, and contribute to meaningful projects.
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="https://nowfloat1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              View Project
            </a>

            <Link
              to="/resume"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-gray-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              View Resume
            </Link>

            <a
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              className="rounded-xl border border-purple-400/30 bg-purple-400/5 px-6 py-3 text-sm font-bold text-purple-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-400/10"
            >
              ⬇ Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* ── Right ────────────────────────────────────────── */}
        <section className="order-1 flex flex-col items-center gap-8 lg:order-2">

          {/* Profile image with rings */}
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">

            {/* Spinning outer ring */}
            <div
              className="absolute inset-0 animate-spin rounded-full border border-dashed border-cyan-400/20"
              style={{ animationDuration: "25s" }}
            />

            {/* Spinning mid ring */}
            <div
              className="absolute -inset-4 animate-spin rounded-full border border-purple-400/15"
              style={{ animationDuration: "18s", animationDirection: "reverse" }}
            />

            {/* Gradient glow ring */}
            <div className="absolute inset-0 animate-glow-pulse rounded-full" />

            {/* Image */}
            <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-0.5 shadow-2xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                <img
                  src={myDp}
                  alt="Krishan Kant — Web Developer"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge — top */}
            <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-semibold backdrop-blur sm:-right-6">
              <span className="text-base">⚡</span>
              <span className="text-gray-200">React Dev</span>
            </div>

            {/* Floating badge — bottom */}
            <div className="absolute -left-2 bottom-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-semibold backdrop-blur sm:-left-6">
              <span className="text-base">🎨</span>
              <span className="text-gray-200">UI/UX Design</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid w-full max-w-sm grid-cols-4 gap-3 sm:max-w-md">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.04] py-3 px-1 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <span className="text-lg font-extrabold text-cyan-400 sm:text-xl">
                  {value}
                </span>
                <span className="mt-0.5 text-[10px] leading-tight text-gray-400 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
          Scroll
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-1.5 w-1.5 animate-bounce-arrow rounded-full bg-cyan-400" />
        </div>
      </div>
    </main>
  );
}