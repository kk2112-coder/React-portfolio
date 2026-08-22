
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-slate-950/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
              Krishan Kant
            </h3>

            <p className="mb-4 text-indigo-400">
              Web Developer & Frontend Designer
            </p>

            <p className="leading-7 text-gray-500">
              Creating digital experiences that combine beautiful
              design with powerful functionality. Let's build
              something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/work">Portfolio</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <FooterLink>Web Development</FooterLink>
            <FooterLink>Frontend Design</FooterLink>
            <FooterLink>Responsive Design</FooterLink>
            <FooterLink>UI/UX Design</FooterLink>
            <FooterLink>Website Maintenance</FooterLink>
          </FooterColumn>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Get In Touch
            </h4>

            <div className="space-y-4">

              <a
                href="mailto:krishankantrajput2112@gmail.com"
                className="block break-all text-gray-500 transition hover:text-indigo-400"
              >
                krishankantrajput2112@gmail.com
              </a>

              <a
                href="tel:+918810419209"
                className="block text-gray-500 transition hover:text-indigo-400"
              >
                +91 8810419209
              </a>

              <p className="text-gray-500">
                Ghaziabad, Uttar Pradesh, India
              </p>

            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold transition hover:bg-indigo-600"
              >
                    <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/krishan-kant-615740305/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold transition hover:bg-indigo-600"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold transition hover:bg-indigo-600"
              >
                <FaTwitter className="text-xl" />
              </a>

              <a
                href="https://www.instagram.com/kkrajput_002/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold transition hover:bg-pink-600"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">
            © 2026 Krishan Kant. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="/PrivacyPolicy"
              className="text-gray-600 transition hover:text-indigo-400"
            >
              Privacy Policy
            </a>

            <a
              href="/T&C"
              className="text-gray-600 transition hover:text-indigo-400"
            >
              Terms of Service
            </a>

            <a
              href="/SiteMap"
              className="text-gray-600 transition hover:text-indigo-400"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="mb-5 text-lg font-semibold">
        {title}
      </h4>

      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href = "#", children }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-500 transition hover:text-indigo-400"
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;