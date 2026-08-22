import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myDp from "./Images/MyDp.jpg";
import Navbar from "./Navbar";


const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "Tailwind CSS", percentage: 60 },
  { name: "Responsive Design", percentage: 88 },
  { name: "C Programming", percentage: 75 },
];

const education = [
  {
    year: "2025 - 2027",
    title: "Master of Computer Applications (M.C.A.)",
    institute: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    status: "Currently Pursuing",
    current: true,
  },
  {
    year: "2022 - 2025",
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

const interests = [
  {
    title: "Travel & Exploration",
    description:
      "I love exploring new places and experiencing different cultures. Travel broadens my perspective and inspires creativity in my work.",
    icon: "✈",
  },
  {
    title: "Sports & Fitness",
    description:
      "Staying active through outdoor games and sports helps me maintain a healthy work-life balance and keeps my mind sharp.",
    icon: "⚽",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I'm passionate about staying updated with the latest trends, frameworks, and best practices in web development.",
    icon: "✦",
  },
];

function BackgroundShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-120px] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-[-100px] top-[25%] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-[10%] left-[30%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute left-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

      <div className="absolute right-[20%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />

      <div className="absolute bottom-[25%] left-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

      <div className="absolute bottom-[15%] right-[15%] h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
    </div>
  );
}

// ================NAVBAR=================
   <Navbar />

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Krishan Kant
            </h3>

            <p className="mt-2 text-cyan-400">
              Web Developer & Frontend Designer
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Creating digital experiences that combine beautiful design
              with powerful functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link className="hover:text-cyan-400" to="/">
                Home
              </Link>

              <Link className="hover:text-cyan-400" to="/about">
                About
              </Link>

              <Link className="hover:text-cyan-400" to="/work">
                Work
              </Link>

              <Link className="hover:text-cyan-400" to="/resume">
                Resume
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <span>Web Development</span>
              <span>Frontend Design</span>
              <span>Responsive Design</span>
              <span>UI/UX Design</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Get In Touch
            </h4>

            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:krishankantrajput2112@gmail.com"
                className="block break-all hover:text-cyan-400"
              >
                krishankantrajput2112@gmail.com
              </a>

              <a
                href="tel:+918810419209"
                className="block hover:text-cyan-400"
              >
                +91 8810419209
              </a>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/settings/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Git
              </a>

              <a
                href="https://www.linkedin.com/in/krishan-kant-615740305/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Krishan Kant. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-cyan-400">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-cyan-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      <BackgroundShapes />

      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Text */}
              <div>
                <p className="mb-4 font-medium uppercase tracking-[0.3em] text-cyan-400">
                  Get To Know Me
                </p>

                <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                  About{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>

                <p className="mt-5 text-xl font-medium text-gray-300">
                  Passionate Web Developer & Creative Problem Solver
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
                  I'm a dedicated web developer with a passion for creating
                  beautiful, functional, and user-friendly websites.
                  Currently pursuing my Master's in Computer Applications,
                  I combine academic knowledge with practical experience
                  to deliver exceptional digital solutions.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl" />

                  <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.2)] sm:h-96 sm:w-96">
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

        {/* ================= STATS ================= */}
        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">

            {[
              ["5+", "Projects Completed"],
              ["5+", "Years Learning"],
              ["6+", "Technologies"],
              ["100%", "Dedication"],
            ].map(([number, label], index) => (
              <div
                key={label}
                data-aos="fade-up"
                className="translate-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/30"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl font-extrabold text-cyan-400">
                  {number}
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STORY + SKILLS ================= */}
        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2">

              {/* Story */}
              <div
                data-aos="fade-up"
                className="translate-y-8 opacity-0 transition-all duration-700"
              >
                <h2 className="text-3xl font-bold sm:text-4xl">
                  My{" "}
                  <span className="text-cyan-400">
                    Story
                  </span>
                </h2>

                <div className="mt-7 space-y-5 leading-8 text-gray-400">
                  <p>
                    My journey into web development began during my
                    Bachelor's in Computer Applications at CCSU. What
                    started as curiosity about how websites work quickly
                    evolved into a deep passion for creating digital
                    experiences that make a difference.
                  </p>

                  <p>
                    Currently pursuing my Master's degree at AKTU, I'm
                    constantly expanding my knowledge and staying
                    up-to-date with the latest web technologies. I believe
                    in the power of continuous learning and always strive
                    to improve my skills.
                  </p>

                  <p>
                    When I'm not coding, you'll find me exploring new
                    places, playing outdoor games, or researching the
                    latest trends in web development. I'm always excited
                    to take on new challenges and create something amazing.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div
                data-aos="fade-up"
                className="translate-y-8 opacity-0 transition-all duration-700"
              >
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Technical{" "}
                  <span className="text-purple-400">
                    Skills
                  </span>
                </h2>

                <div className="mt-8 space-y-7">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-gray-300">
                          {skill.name}
                        </span>

                        <span className="text-cyan-400">
                          {skill.percentage}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          style={{
                            width: `${skill.percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="bg-white/[0.02] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                My Academic Background
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Education Journey
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2" />

              <div className="space-y-10">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    className="relative translate-y-8 opacity-0 transition-all duration-700"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`ml-10 md:ml-0 md:w-[calc(50%-30px)] ${
                        index % 2 === 1
                          ? "md:ml-auto"
                          : ""
                      }`}
                    >
                      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur transition hover:border-cyan-400/30">
                        <span className="text-sm font-semibold text-cyan-400">
                          {item.year}
                        </span>

                        <h3 className="mt-2 text-xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-gray-400">
                          {item.institute}
                        </p>

                        <span
                          className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            item.current
                              ? "bg-cyan-400/10 text-cyan-400"
                              : "bg-green-400/10 text-green-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-7 h-7 w-7 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] md:left-1/2 md:-translate-x-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERESTS ================= */}
        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold">
                Beyond{" "}
                <span className="text-cyan-400">
                  Coding
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  data-aos="fade-up"
                  className="translate-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-400">
                    {interest.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {interest.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 px-6 py-16 text-center sm:px-12">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Let's Work Together
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
                  I'm always excited to collaborate on new projects and
                  bring creative ideas to life. Let's create something
                  amazing together!
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="/Contact"
                    className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    Get In Touch
                  </a>

                  <Link
                    to="/resume"
                    className="rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
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