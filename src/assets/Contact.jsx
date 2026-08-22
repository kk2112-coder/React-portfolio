import { useState } from "react";
import Navbar from "./Navbar";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in web development, including responsive website design, frontend development with HTML/CSS/JavaScript, and modern web applications. I also offer website maintenance and optimization services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity. A simple website typically takes 1–2 weeks, while more complex applications can take 4–8 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes! I work with clients worldwide through video calls, email, and project management tools. I'm experienced in remote collaboration and ensure clear communication throughout the project.",
  },
  {
    question: "What's your development process?",
    answer:
      "I follow a structured approach: 1) Discovery & Planning, 2) Design & Wireframing, 3) Development & Testing, 4) Review & Feedback, 5) Launch & Support. You'll be involved at every step.",
  },
];

/* =========================================================
   ICONS
========================================================= */

const MailIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LocationIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0h.01z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const XIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.6l-5.17-6.76L5.06 22H1.8l7.6-8.69L1.25 2h6.77l4.67 6.17L18.244 2zm-1.15 17.85h1.8L7 4.04H5.07l12.02 15.81z" />
  </svg>
);

const ClockIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 5v4.69l3.25 1.93-.75 1.23-4-2.4V7z" />
  </svg>
);

/* =========================================================
   MAIN CONTACT COMPONENT
========================================================= */

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    budget: "",
    message: "",
    newsletter: false,
  });

  /* =======================================================
     FORM HANDLING
  ======================================================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (formMessage) {
      setFormMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      budget: "",
      message: "",
      newsletter: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormMessage("");

    if (!validateForm()) {
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      /*
       * =====================================================
       * CONNECT YOUR BACKEND HERE
       * =====================================================
       *
       * Example:
       *
       * const response = await fetch("/api/contact", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Failed to send message");
       * }
       */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setFormMessage(
        "Thanks for reaching out! Your message has been received. I'll get back to you soon."
      );

      setMessageType("success");
      setErrors({});
      resetForm();
    } catch (error) {
      setFormMessage(
        "Something went wrong. Please try again or contact me directly."
      );

      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* ===================================================
          ANIMATED BACKGROUND
      =================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Purple Glow */}
        <div className="absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />

        {/* Blue Glow */}
        <div className="absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] animate-pulse [animation-delay:1s]" />

        {/* Cyan Glow */}
        <div className="absolute bottom-[5%] left-[25%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px] animate-pulse [animation-delay:2s]" />

        {/* Shape 1 */}
        <div className="absolute left-[50%] top-[35%] h-36 w-36 rotate-45 rounded-[30px] border border-white/10 bg-white/[0.02] blur-sm" />

        {/* Shape 2 */}
        <div className="absolute right-[15%] top-[60%] h-28 w-28 rounded-full border border-purple-400/10 bg-purple-500/5" />

        {/* Shape 3 */}
        <div className="absolute left-[10%] top-[65%] h-24 w-24 rotate-12 rounded-3xl border border-blue-400/10 bg-blue-500/5" />

        {/* Floating Dots */}
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400/40"
            style={{
              left: `${8 + index * 9}%`,
              top: `${15 + ((index * 17) % 70)}%`,
              animationDelay: `${index * 0.4}s`,
              animationDuration: `${2 + (index % 3)}s`,
            }}
          />
        ))}

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <Navbar />

      {/* ===================================================
          MAIN
      =================================================== */}

      <main className="relative z-10 pt-20">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="flex flex-col items-center justify-center px-5 py-20 md:py-28 min-h-screen">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/5">
              Let's work together
            </span>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
              Get{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                In Touch
              </span>
            </h1>

            <p className="mt-6 text-lg font-semibold text-slate-300 md:text-xl">
              Let's Create Something Amazing Together
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-400 md:text-lg">
              Have a project in mind? Want to collaborate? Or just want to say hello?
              I'd love to hear from you. Drop me a message and I'll get back to you
              as soon as possible.
            </p>

            {/* Decorative Line */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </div>
        </section>


        {/* =================================================
            CONTACT CONTENT
        ================================================= */}

        <section className="px-5 pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.45fr_0.8fr]">

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">

              <div className="mb-8">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Send Me a Message
                </h2>

                <p className="mt-2 text-slate-400">
                  Fill out the form below and I'll respond within 24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >

                {/* Name */}
                <div className="grid gap-6 md:grid-cols-2">

                  <FormInput
                    label="First Name *"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                    autoComplete="given-name"
                  />

                  <FormInput
                    label="Last Name *"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    required
                    autoComplete="family-name"
                  />

                </div>

                {/* Email */}
                <FormInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  autoComplete="email"
                />

                {/* Phone */}
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />

                {/* Company */}
                <FormInput
                  label="Company/Organization"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />

                {/* Subject */}
                <FormSelect
                  label="Subject *"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                  options={[
                    ["", "Select a subject"],
                    ["web-development", "Web Development Project"],
                    ["collaboration", "Collaboration Opportunity"],
                    ["freelance", "Freelance Work"],
                    ["consultation", "Consultation"],
                    ["other", "Other"],
                  ]}
                />

                {/* Budget */}
                <FormSelect
                  label="Project Budget (Optional)"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={[
                    ["", "Select budget range"],
                    ["under-1000", "Under $1,000"],
                    ["1000-5000", "$1,000 - $5,000"],
                    ["5000-10000", "$5,000 - $10,000"],
                    ["10000-plus", "$10,000+"],
                    ["discuss", "Let's Discuss"],
                  ]}
                />

                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    className={`w-full resize-none rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${errors.message
                      ? "border-red-400/60 focus:ring-2 focus:ring-red-400/10"
                      : "border-white/10 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                      }`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}

                </div>

                {/* Newsletter */}
                <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">

                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 cursor-pointer accent-cyan-400"
                  />

                  <span>
                    Subscribe to my newsletter for web development tips and
                    updates
                  </span>

                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

              </form>

              {/* Form Message */}
              {formMessage && (
                <div
                  className={`mt-5 rounded-xl border p-4 text-sm ${messageType === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                >
                  {formMessage}
                </div>
              )}

            </div>

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8 lg:sticky lg:top-28">

              <h3 className="text-2xl font-bold">
                Let's Connect
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I'm always excited to work on new projects and meet fellow
                developers and creators.
              </p>

              {/* Contact Methods */}
              <div className="mt-8 space-y-7">

                <ContactMethod
                  icon={<MailIcon />}
                  title="Email"
                  content={
                    <a
                      href="mailto:krishankantrajput2112@gmail.com"
                      className="break-all text-cyan-400 transition hover:text-cyan-300"
                    >
                      krishankantrajput2112@gmail.com
                    </a>
                  }
                />

                <ContactMethod
                  icon={<PhoneIcon />}
                  title="Phone"
                  content={
                    <a
                      href="tel:+918810419209"
                      className="text-cyan-400 transition hover:text-cyan-300"
                    >
                      +91 8810419209
                    </a>
                  }
                />

                <ContactMethod
                  icon={<LocationIcon />}
                  title="Location"
                  content={
                    <span className="text-slate-300">
                      Ghaziabad, Uttar Pradesh, India
                    </span>
                  }
                />

              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-white/10 pt-8">

                <h4 className="font-semibold">
                  Follow Me
                </h4>

                <div className="mt-4 flex flex-wrap gap-3">

                  <SocialLink
                    href="https://github.com/"
                    label="GitHub"
                  >
                    <GithubIcon />
                  </SocialLink>

                  <SocialLink
                    href="https://www.linkedin.com/in/krishan-kant-615740305/"
                    label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialLink>

                  <SocialLink
                    href="https://x.com/"
                    label="X"
                  >
                    <XIcon />
                  </SocialLink>

                  <SocialLink
                    href="https://www.instagram.com/"
                    label="Instagram"
                  >
                    <InstagramIcon />
                  </SocialLink>

                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">

                <div className="flex items-center gap-3 text-sm text-emerald-300">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                    <ClockIcon />
                  </span>

                  <span>
                    Usually responds within 24 hours
                  </span>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            FAQ SECTION
        ================================================= */}

        <section className="flex min-h-screen items-center justify-center border-t border-white/10 px-5 py-24">

          <div className="mx-auto max-w-5xl">

            <div className="flex flex-col items-center justify-center mb-12 text-center">

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Here are some common questions about my services and development
                process.
              </p>

            </div>


            <div className="space-y-4">

              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                      ? "border-cyan-400/30 bg-cyan-400/[0.04]"
                      : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 p-5 text-left md:p-6"
                    >
                      <h3 className="font-semibold text-white">{faq.question}</h3>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-xl text-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                          }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 leading-7 text-slate-400 md:px-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

     
    </div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  autoComplete,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-200"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 ${error
          ? "border-red-400/60 focus:border-red-400 focus:ring-2 focus:ring-red-400/10"
          : "border-white/10 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
          }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   FORM SELECT
========================================================= */

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-200"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-white outline-none transition ${error
          ? "border-red-400/60 focus:border-red-400 focus:ring-2 focus:ring-red-400/10"
          : "border-white/10 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
          }`}
      >
        {options.map(([optionValue, optionLabel]) => (
          <option
            key={optionValue}
            value={optionValue}
            className="bg-slate-900 text-white"
          >
            {optionLabel}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   CONTACT METHOD
========================================================= */

function ContactMethod({ icon, title, content }) {
  return (
    <div className="group flex items-start gap-4">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/30">
        {icon}
      </div>

      <div className="min-w-0">

        <h4 className="font-semibold text-white">
          {title}
        </h4>

        <div className="mt-1 text-sm">
          {content}
        </div>

      </div>

    </div>
  );
}

/* 
   SOCIAL LINK
 */

function SocialLink({
  href,
  label,
  children,
  small = false,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 ${small ? "h-9 w-9" : "h-11 w-11"
        }`}
    >
      {children}
    </a>
  );
}

/* 
   FOOTER COLUMN
 */

function FooterColumn({ title, links }) {
  return (
    <div>

      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <ul className="mt-5 space-y-3">

        {links.map(([label, href]) => (
          <li key={label}>

            <a
              href={href}
              className="text-sm text-slate-500 transition hover:text-cyan-400"
            >
              {label}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default Contact;