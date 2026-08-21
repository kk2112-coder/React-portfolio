import { NavLink } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Reusable navigation link styles
  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "font-semibold text-purple-400"
        : "text-gray-300 hover:text-pink-400"
    }`;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur-xl md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-extrabold text-transparent transition-all duration-300 hover:scale-105 md:text-3xl"
        >
          PortFolio
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <li>
            <NavLink to="/" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Home

                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* Work */}
          <li>
            <NavLink to="/Work" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Work

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink to="/About" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  About

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          {/* Project */}
          <li>
            <a
              href="https://nowfloat1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-300 transition-all duration-300 hover:text-pink-400"
            >
              Project

              {/* Hover underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 hover:w-full" />
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-7 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5">

          {/* Home */}
          <li>
            <NavLink
              to="/Hero"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-purple-400"
                    : "text-gray-300 hover:translate-x-1 hover:text-pink-400"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* Work */}
          <li>
            <NavLink
              to="/Work"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-purple-400"
                    : "text-gray-300 hover:translate-x-1 hover:text-pink-400"
                }`
              }
            >
              Work
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink
              to="/About"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-purple-400"
                    : "text-gray-300 hover:translate-x-1 hover:text-pink-400"
                }`
              }
            >
              About
            </NavLink>
          </li>

          {/* Project */}
          <li>
            <a
              href="https://nowfloat1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-pink-400"
            >
              Project
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;