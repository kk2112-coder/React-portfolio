/* ─── Resume / CV Page ─────────────────────────────────────
   Fully redesigned to match the dark cyber theme.
   Includes a print/download button that uses the browser's
   native print dialog (works perfectly for PDF saving too).
──────────────────────────────────────────────────────────── */

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

/* ─── Section card wrapper ───────────────────────────────── */
function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8 print:border-gray-300 print:bg-white print:text-black">
      <h2 className="mb-5 border-b border-white/10 pb-3 text-xl font-bold text-white print:border-gray-300 print:text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Resume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-24 text-white">
      <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">

        {/* ── Top action bar ──────────────────────────────── */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center print:hidden">
          <div>
            <h1 className="mt-1 text-3xl font-extrabold">My Resume</h1>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 active:translate-y-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h5.66V9h3.84L12 2z" transform="rotate(180 12 11)" />
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Download PDF
          </button>
        </div>

        <div className="space-y-6">

          {/* ── Header ─────────────────────────────────────── */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 text-center md:p-10 print:border-gray-300 print:bg-white print:text-black">
            <h2 className="text-4xl font-extrabold text-white print:text-black">
              Krishan Kant
            </h2>
            <p className="mt-2 text-lg font-medium text-cyan-400 print:text-blue-700">
              Web Developer &amp; Frontend Designer
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 print:text-gray-700">
              <a href="tel:+918810419209" className="hover:text-cyan-400 transition">
                +91 8810419209
              </a>
              <a href="mailto:krishankantrajput2112@gmail.com" className="hover:text-cyan-400 transition">
                krishankantrajput2112@gmail.com
              </a>
              <span>Ghaziabad, Uttar Pradesh, India</span>
              <a
                href="https://www.linkedin.com/in/krishan-kant-615740305/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                linkedin.com/in/krishan-kant-615740305
              </a>
            </div>
          </div>

          {/* ── Career Summary ─────────────────────────────── */}
          <Card title="Career Summary">
            <p className="leading-8 text-gray-400 print:text-gray-700">
              Motivated Frontend Developer with hands-on experience in React,
              Tailwind CSS, HTML5, CSS3, and JavaScript. Skilled in building
              responsive, accessible web interfaces and integrating REST APIs.
              Currently pursuing a Master's in Computer Applications (MCA) at
              AKTU while continuously honing full-stack skills including Node.js
              and database management.
            </p>
          </Card>

          {/* ── Skills ─────────────────────────────────────── */}
          <Card title="Technical Skills">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SKILLS_LIST.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-gray-300 print:text-gray-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 print:bg-blue-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          {/* ── Experience ─────────────────────────────────── */}
          <Card title="Work Experience">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-bold text-white print:text-black">
                    {exp.role}
                    <span className="ml-2 font-normal text-cyan-400 print:text-blue-700">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-7 text-gray-400 print:text-gray-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 print:bg-blue-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>

          {/* ── Education ──────────────────────────────────── */}
          <Card title="Education &amp; Certification">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-gray-300 print:border-gray-300 print:text-black">
                    <th className="pb-3 pr-4 font-semibold">Degree</th>
                    <th className="pb-3 pr-4 font-semibold">University / School</th>
                    <th className="pb-3 pr-4 font-semibold">Year</th>
                    <th className="pb-3 font-semibold">Division</th>
                  </tr>
                </thead>
                <tbody>
                  {EDUCATION.map((edu) => (
                    <tr
                      key={edu.degree}
                      className="border-b border-white/5 transition hover:bg-white/[0.02] print:border-gray-200"
                    >
                      <td className="py-3 pr-4 text-gray-200 print:text-black">
                        {edu.degree}
                        {edu.current && (
                          <span className="ml-2 rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-400 print:bg-blue-100 print:text-blue-700">
                            Current
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-gray-400 print:text-gray-700">
                        {edu.uni}
                      </td>
                      <td className="py-3 pr-4 text-gray-400 print:text-gray-700">
                        {edu.year}
                      </td>
                      <td className="py-3 text-gray-400 print:text-gray-700">
                        {edu.division}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* ── Projects ───────────────────────────────────── */}
          <Card title="Projects">
            <div className="space-y-6">
              {PROJECTS.map((proj) => (
                <div key={proj.title} className="border-b border-white/5 pb-6 last:border-0 last:pb-0 print:border-gray-200">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <h3 className="text-base font-bold text-white print:text-black">
                      {proj.title}
                    </h3>
                    <span className="shrink-0 text-sm text-gray-500">{proj.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-400 print:text-blue-700">
                    {proj.tech}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {proj.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-7 text-gray-400 print:text-gray-700">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 print:bg-purple-600" />
                        {p}
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
