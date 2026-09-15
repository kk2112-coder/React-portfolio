import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import myDp from "./Images/MyDp.jpg";

/* ─── Skills ─────────────────────────────────────────────── */
const SKILLS = [
  { name: "HTML5", percentage: 92 },
  { name: "CSS3", percentage: 88 },
  { name: "JavaScript", percentage: 82 },
  { name: "React", percentage: 75 },
  { name: "React Native", percentage: 60 },
  { name: "Tailwind CSS", percentage: 70 },
  { name: "Responsive Design", percentage: 90 },
  { name: "Git & GitHub", percentage: 72 },
  { name: "C Programming", percentage: 75 },
];

/* ─── Education ──────────────────────────────────────────── */
const EDUCATION = [
  {
    year: "2025 – 2027",
    title: "Master of Computer Applications (M.C.A.)",
    institute: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    status: "Currently Pursuing",
    current: true,
  },
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Applications (B.C.A.)",
    institute: "Chaudhary Charan Singh University (CCSU)",
    status: "Completed",
  },
  {
    year: "2022",
    title: "Higher Secondary Education (12th)",
    institute: "Central Board of Secondary Education (C.B.S.E)",
    status: "Completed",
  },
  {
    year: "2020",
    title: "Secondary Education (10th)",
    institute: "Central Board of Secondary Education (C.B.S.E)",
    status: "Completed",
  },
];

/* ─── Interests ──────────────────────────────────────────── */
const INTERESTS = [
  {
    icon: "✈️",
    title: "Travel & Exploration",
    description:
      "I love exploring new places and experiencing different cultures. Travel broadens my perspective and inspires creativity in my work.",
  },
  {
    icon: "⚽",
    title: "Sports & Fitness",
    description:
      "Staying active through outdoor games and sports helps me maintain a healthy work-life balance and keeps my mind sharp.",
  },
  {
    icon: "✦",
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I'm passionate about staying updated with the latest trends, frameworks, and best practices in web development.",
  },
];

/* ─── Background shapes ──────────────────────────────────── */
function BgShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-20 top-[15%] h-72 w-72 rounded-full bg-cyan-500/10   blur-3xl" />
      <div className="absolute -right-16 top-[25%] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-[15%] top-[20%]  h-2 w-2 animate-pulse rounded-full bg-cyan-400   shadow-[0_0_20px_#22d3ee]" />
      <div className="absolute right-[20%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
      <div className="absolute bottom-[25%] left-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
      <div className="absolute bottom-[15%] right-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
    </div>
  );
}

/* ─── Animated Skill Bar ─────────────────────────────────── */
function SkillBar({ skill, index }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.percentage), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.percentage, index]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium text-gray-200">{skill.name}</span>
        <span className="font-semibold text-cyan-400">{skill.percentage}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Scroll-reveal wrapper ──────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }) {
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── About page ─────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <BgShapes />

      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* Text */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Get To Know Me
                </p>

                <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                  About{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>

                <p className="mt-4 text-lg font-medium text-gray-300">
                  Passionate Web Developer &amp; Creative Problem Solver
                </p>

                {/* Available badge */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Available for hire
                </div>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                  I'm a dedicated web developer with a passion for creating
                  beautiful, functional, and user-friendly websites. Currently
                  pursuing my Master's in Computer Applications, I combine
                  academic knowledge with practical experience to deliver
                  exceptional digital solutions.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl" />
                  <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.2)] sm:h-80 sm:w-80">
                    <img
                      src={myDp}
                      alt="Krishan Kant"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              ["5+", "Projects Completed"],
              ["5+", "Years Learning"],
              ["8+", "Technologies"],
              ["100%", "Dedication"],
            ].map(([num, label], i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
                  <div className="text-4xl font-extrabold text-cyan-400">{num}</div>
                  <div className="mt-2 text-sm text-gray-400">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Story + Skills ────────────────────────────────── */}
        <section className="px-5 py-24 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2">

              {/* Story */}
              <Reveal>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  My <span className="text-cyan-400">Story</span>
                </h2>
                <div className="mt-7 space-y-5 leading-8 text-gray-400">
                  <p>
                    My journey into web development began during my Bachelor's
                    in Computer Applications at CCSU. What started as curiosity
                    about how websites work quickly evolved into a deep passion
                    for creating digital experiences that make a difference.
                  </p>
                  <p>
                    Currently pursuing my Master's degree at AKTU, I'm
                    constantly expanding my knowledge and staying up-to-date
                    with the latest web technologies. I believe in the power of
                    continuous learning and always strive to improve my skills.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new places,
                    playing outdoor games, or researching the latest trends in
                    web development. I'm always excited to take on new
                    challenges and create something amazing.
                  </p>
                </div>
              </Reveal>

              {/* Skills */}
              <Reveal delay={150}>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Technical{" "}
                  <span className="text-purple-400">Skills</span>
                </h2>
                <div className="mt-8 space-y-6">
                  {SKILLS.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ── Education ─────────────────────────────────────── */}
        <section className="bg-white/[0.02] px-5 py-24 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                My Academic Background
              </p>
              <h2 className="mt-3 text-4xl font-bold">Education Journey</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2" />

              <div className="space-y-10">
                {EDUCATION.map((item, i) => (
                  <Reveal key={item.title} delay={i * 100}>
                    <div className={`ml-10 md:ml-0 md:w-[calc(50%-30px)] ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur transition hover:border-cyan-400/30">
                        <span className="text-sm font-semibold text-cyan-400">
                          {item.year}
                        </span>
                        <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-400">{item.institute}</p>
                        <span
                          className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${item.current
                              ? "bg-cyan-400/10 text-cyan-400"
                              : "bg-green-400/10 text-green-400"
                            }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-0 top-7 h-7 w-7 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] md:left-1/2 md:-translate-x-1/2" />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Interests ─────────────────────────────────────── */}
        <section className="px-5 py-24 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold">
                Beyond <span className="text-cyan-400">Coding</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {INTERESTS.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-sm text-gray-400">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 px-6 py-16 text-center sm:px-12">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Let's Work Together
                </h2>
                <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
                  I'm always excited to collaborate on new projects and bring
                  creative ideas to life. Let's create something amazing!
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="rounded-lg bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    to="/resume"
                    className="rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}