import React from "react";

function Resume() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-400">Krishan Kant</h1>
          <p className="mt-2 text-lg">Web Developer</p>
          <p className="mt-1 text-sm text-gray-400">
            +91 8810419209 | krishankantrajput2112@gamil.com | Ghaziabad, Uttar Pradesh
          </p>
          <a
            href="https://linkedin.com/in/krishan-kant-615740305"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            linkedin.com/in/krishan-kant-615740305
          </a>
        </header>

        {/* Career Summary */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Career Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Full Stack Developer working across frontend interface, Java, Node.js, and databases
            such as MySQL and MongoDB. Built end-to-end academic projects that connect user-facing
            screens with backend logic and persistent data. Combines application-focused profile.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Education & Certification
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-3">Degree</th>
                  <th className="p-3">University/School</th>
                  <th className="p-3">Year</th>
                  <th className="p-3">Division</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3">MCA (Pursuing)</td>
                  <td className="p-3">AKTU</td>
                  <td className="p-3">2025–2027</td>
                  <td className="p-3">1st</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">BCA</td>
                  <td className="p-3">CCSU</td>
                  <td className="p-3">2022–2025</td>
                  <td className="p-3">1st</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">12th</td>
                  <td className="p-3">CBSE</td>
                  <td className="p-3">2022</td>
                  <td className="p-3">2nd</td>
                </tr>
                <tr>
                  <td className="p-3">10th</td>
                  <td className="p-3">CBSE</td>
                  <td className="p-3">2020</td>
                  <td className="p-3">1st</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Skills
          </h2>
          <ul className="grid grid-cols-2 gap-3 text-gray-300">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Responsive Web Design</li>
            <li>State Management</li>
            <li>API Integration</li>
            <li>GitHub</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>XAMPP</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Work Experience
          </h2>
          <div>
            <h3 className="text-lg font-bold">Webroj | Frontend Developer</h3>
            <p className="text-sm text-gray-400">July 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
              <li>Collaborated on frontend development tasks using React and Tailwind CSS.</li>
              <li>Implemented responsive UI components and optimized performance.</li>
              <li>Worked with team to integrate APIs and ensure smooth functionality.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Projects
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold">Phishing Website Detector</h3>
              <p className="text-sm text-gray-400">July 2026</p>
              <p className="text-gray-300">
                Technologies: HTML5, CSS3, JavaScript, Node.js, Express.js, JSON Database
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                <li>Developed and tested a responsive college admin dashboard with student/course data.</li>
                <li>Built backend REST APIs for fetching and managing student records.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Portfolio</h3>
              <p className="text-sm text-gray-400">January 2025</p>
              <p className="text-gray-300">
                Technologies: HTML5, CSS3, JavaScript, Node.js, Firebase, Netlify
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                <li>Tested hackathon management web app for responsive behavior and cross-browser compatibility.</li>
                <li>Reviewed modular, reusable components to catch defects early in development cycle.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Resume;
