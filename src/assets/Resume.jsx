import React from "react";

const SKILLS_LIST = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "REST API Integration",
  "Responsive Web Design",
  "State Management",
  "Git & GitHub",
  "MySQL",
  "MongoDB",
  "Firebase",
];

const EDUCATION = [
  {
    degree: "MCA (Pursuing)",
    uni: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    year: "2025 – 2027",
    division: "1st",
    current: true,
  },
  {
    degree: "BCA",
    uni: "Chaudhary Charan Singh University (CCSU)",
    year: "2022 – 2025",
    division: "1st",
  },
  {
    degree: "12th (CBSE)",
    uni: "Central Board of Secondary Education",
    year: "2022",
    division: "2nd",
  },
  {
    degree: "10th (CBSE)",
    uni: "Central Board of Secondary Education",
    year: "2020",
    division: "1st",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Webroj",
    period: "July 2025",
    points: [
      "Collaborated on frontend development tasks using React and Tailwind CSS.",
      "Implemented responsive UI components and optimised performance.",
      "Worked with team to integrate APIs and ensure smooth functionality.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Phishing Website Detector",
    period: "July 2026",
    tech: "HTML5, CSS3, JavaScript, Node.js, Express.js, JSON Database",
    points: [
      "Developed a full-stack tool to detect phishing URLs using a Node.js backend.",
      "Built REST APIs for fetching and managing flagged-URL records.",
    ],
  },
  {
    title: "Women Security App",
    period: "2024",
    tech: "HTML5, CSS3, JavaScript",
    points: [
      "Built a safety-focused web app with emergency features for women's security.",
      "Deployed on Netlify with fully responsive layout.",
    ],
  },
  {
    title: "Personal Portfolio",
    period: "January 2025",
    tech: "React, Tailwind CSS, Vite",
    points: [
      "Designed and developed a modern, animated portfolio website.",
      "Implemented dark theme, typewriter animation, and responsive layouts.",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Reusable Card
───────────────────────────────────────────────────────────── */
function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8">
      <h2 className="mb-5 border-b border-white/10 pb-3 text-xl font-bold text-white">
        {title}
      </h2>

      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Resume Page
───────────────────────────────────────────────────────────── */
export default function Resume() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 text-white">
      <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">

        {/* ─────────────────────────────────────────────────────
            Top Action Bar
        ────────────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mt-1 text-3xl font-extrabold text-white">
              My Resume
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Download my resume in PDF format
            </p>
          </div>

          {/* Download PDF Button */}
          <a
            href="/Krishan-Kant-Resume.pdf"
            download="Krishan-Kant-Resume.pdf"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 active:translate-y-0"
          >
            {/* Download Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>

            Download PDF
          </a>
        </div>

        {/* ─────────────────────────────────────────────────────
            Resume Content
        ────────────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* Header */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 text-center md:p-10">
            <h2 className="text-4xl font-extrabold text-white">
              Krishan Kant
            </h2>

            <p className="mt-2 text-lg font-medium text-cyan-400">
              Web Developer &amp; Frontend Designer
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">

              {/* Phone */}
              <a
                href="tel:+918810419209"
                className="transition hover:text-cyan-400"
              >
                +91 8810419209
              </a>

              {/* Email */}
              <a
                href="mailto:krishankantrajput2112@gmail.com"
                className="transition hover:text-cyan-400"
              >
                krishankantrajput2112@gmail.com
              </a>

              {/* Location */}
              <span>
                Ghaziabad, Uttar Pradesh, India
              </span>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/krishan-kant-615740305/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
              >
                linkedin.com/in/krishan-kant-615740305
              </a>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────
              Career Summary
          ──────────────────────────────────────────────────── */}
          <Card title="Career Summary">
            <p className="leading-8 text-gray-400">
              Motivated Frontend Developer with hands-on experience in React,
              Tailwind CSS, HTML5, CSS3, and JavaScript. Skilled in building
              responsive, accessible web interfaces and integrating REST APIs.
              Currently pursuing a Master's in Computer Applications (MCA) at
              AKTU while continuously honing full-stack skills including Node.js
              and database management.
            </p>
          </Card>

          {/* ───────────────────────────────────────────────────
              Technical Skills
          ──────────────────────────────────────────────────── */}
          <Card title="Technical Skills">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SKILLS_LIST.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          {/* ───────────────────────────────────────────────────
              Work Experience
          ──────────────────────────────────────────────────── */}
          <Card title="Work Experience">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role}>

                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}

                    <span className="ml-2 font-normal text-cyan-400">
                      @ {exp.company}
                    </span>
                  </h3>

                  <span className="text-sm text-gray-500">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-7 text-gray-400"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </Card>

          {/* ───────────────────────────────────────────────────
              Education
          ──────────────────────────────────────────────────── */}
          <Card title="Education & Certification">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">

                <thead>
                  <tr className="border-b border-white/10 text-gray-300">
                    <th className="pb-3 pr-4 font-semibold">
                      Degree
                    </th>

                    <th className="pb-3 pr-4 font-semibold">
                      University / School
                    </th>

                    <th className="pb-3 pr-4 font-semibold">
                      Year
                    </th>

                    <th className="pb-3 font-semibold">
                      Division
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {EDUCATION.map((edu) => (
                    <tr
                      key={edu.degree}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 pr-4 text-gray-200">
                        {edu.degree}

                        {edu.current && (
                          <span className="ml-2 rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-400">
                            Current
                          </span>
                        )}
                      </td>

                      <td className="py-3 pr-4 text-gray-400">
                        {edu.uni}
                      </td>

                      <td className="py-3 pr-4 text-gray-400">
                        {edu.year}
                      </td>

                      <td className="py-3 text-gray-400">
                        {edu.division}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </Card>

          {/* ───────────────────────────────────────────────────
              Projects
          ──────────────────────────────────────────────────── */}
          <Card title="Projects">
            <div className="space-y-6">

              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="border-b border-white/5 pb-6 last:border-0 last:pb-0"
                >

                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <h3 className="text-base font-bold text-white">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-sm text-gray-500">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-cyan-400">
                    {project.tech}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-7 text-gray-400"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>
          </Card>

        </div>
      </div>
    </main>
  );
}
