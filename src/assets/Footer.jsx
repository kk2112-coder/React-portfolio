import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

/* ─── Back-to-top button ─────────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 text-cyan-400 shadow-xl shadow-black/40 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-cyan-500/20 ${show
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-90 opacity-0 pointer-events-none"
        }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
      </svg>
    </button>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <BackToTop />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-16">

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent"
              >
                KK.dev
              </Link>

              <p className="mt-2 text-sm font-medium text-cyan-400">
                Web Developer &amp; Frontend Designer
              </p>

              <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
                Creating digital experiences that combine beautiful design with
                powerful functionality. Let's build something amazing together.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {[
                  { href: "https://github.com/kk2112-coder", Icon: FaGithub, hover: "hover:bg-gray-700" },
                  { href: "https://www.linkedin.com/in/krishan-kant-615740305/", Icon: FaLinkedin, hover: "hover:bg-blue-700" },
                  { href: "https://x.com/", Icon: FaTwitter, hover: "hover:bg-sky-700" },
                  { href: "https://www.instagram.com/kkrajput_002/", Icon: FaInstagram, hover: "hover:bg-pink-700" },
                ].map(({ href, Icon, hover }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${hover}`}
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <FooterColumn title="Quick Links">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/work", "Portfolio"],
                ["/resume", "Resume"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <FooterLink key={to} to={to}>{label}</FooterLink>
              ))}
            </FooterColumn>

            {/* Services */}
            <FooterColumn title="Services">
              {["Web Development", "Frontend Design", "Responsive Design", "UI/UX Design", "Website Maintenance"].map(
                (s) => (
                  <li key={s}>
                    <span className="text-sm text-gray-500">{s}</span>
                  </li>
                )
              )}
            </FooterColumn>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:krishankantrajput2112@gmail.com"
                  className="block break-all text-sm text-gray-500 transition hover:text-cyan-400"
                >
                  krishankantrajput2112@gmail.com
                </a>
                <a
                  href="tel:+918810419209"
                  className="block text-sm text-gray-500 transition hover:text-cyan-400"
                >
                  +91 8810419209
                </a>
                <p className="text-sm text-gray-500">
                  Ghaziabad, Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-gray-600">
              © {year} Krishan Kant. All rights reserved. Built with ❤️ in React.
            </p>
            <div className="flex gap-6 text-xs text-gray-600">
              <a href="#" className="transition hover:text-cyan-400">Privacy Policy</a>
              <a href="#" className="transition hover:text-cyan-400">Terms of Service</a>
              <a href="#" className="transition hover:text-cyan-400">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */
function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-300">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-gray-500 transition hover:text-cyan-400"
      >
        {children}
      </Link>
    </li>
  );
}