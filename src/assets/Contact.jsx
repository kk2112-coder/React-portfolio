import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in web development, including responsive website design, frontend development with HTML, CSS, JavaScript, React and Firebase.",
  },
  {
    question: "How long does a website take?",
    answer:
      "The development time depends on the project requirements. A simple website can take a few days, while a larger application may take several weeks.",
  },
  {
    question: "Do you work with React?",
    answer:
      "Yes. I use React to build modern, responsive and interactive web applications.",
  },
  {
    question: "Can you integrate Firebase?",
    answer:
      "Yes. Firebase can be used for authentication, Firestore database, hosting and other backend functionality.",
  },
  {
    question: "Do you provide responsive designs?",
    answer:
      "Yes. Websites are designed to work properly on mobile phones, tablets and desktop computers.",
  },
];

/* =========================================================
   ICONS
========================================================= */

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C16.5 4 17.5 4.3 17.5 4.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0Z" />
  </svg>
);

/* =========================================================
   CONTACT COMPONENT
========================================================= */

function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

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

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     SUBMIT TO FIRESTORE
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormMessage("");
    setMessageType("");

    if (!validateForm()) {
      setFormMessage("Please fix the highlighted fields.");
      setMessageType("error");
      return;
    }

    try {
      setIsSubmitting(true);

      const contactData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        subject: formData.subject.trim(),
        budget: formData.budget,
        message: formData.message.trim(),
        newsletter: formData.newsletter,
        createdAt: serverTimestamp(),
      };

      const documentReference = await addDoc(
        collection(db, "contactMessages"),
        contactData
      );

      console.log(
        "Contact message saved successfully:",
        documentReference.id
      );

      setFormMessage(
        "Your message has been sent successfully! I will get back to you soon."
      );

      setMessageType("success");

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

      setErrors({});
    } catch (error) {
      console.error("Error submitting contact form:", error);

      setFormMessage(
        "Unable to send your message. Please try again later."
      );

      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Get In Touch
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let's build something
              <span className="block text-blue-400">
                amazing together.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Have a project idea, question, or opportunity?
              Send me a message and let's discuss how we can
              turn your idea into reality.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.45fr_0.8fr] lg:px-8">

          {/* FORM */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                Send me a message
              </h2>

              <p className="mt-2 text-slate-400">
                Fill out the form below and I'll get back to
                you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* FIRST + LAST NAME */}

              <div className="grid gap-6 sm:grid-cols-2">
                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />

                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />
              </div>

              {/* EMAIL + PHONE */}

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* COMPANY + BUDGET */}

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <FormInput
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <FormSelect
                  label="Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={[
                    "Under ₹10,000",
                    "₹10,000 - ₹25,000",
                    "₹25,000 - ₹50,000",
                    "₹50,000 - ₹1,00,000",
                    "₹1,00,000+",
                  ]}
                />
              </div>

              {/* SUBJECT */}

              <div className="mt-6">
                <FormInput
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                />
              </div>

              {/* MESSAGE */}

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`w-full resize-none rounded-xl border bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-white/10"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* NEWSLETTER */}

              <div className="mt-6 flex items-start gap-3">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900"
                />

                <label
                  htmlFor="newsletter"
                  className="text-sm leading-6 text-slate-400"
                >
                  I'd like to receive occasional updates and
                  useful information.
                </label>
              </div>

              {/* STATUS MESSAGE */}

              {formMessage && (
                <div
                  className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
                    messageType === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {formMessage}
                </div>
              )}

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}

          <aside className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">
                Contact Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Prefer a direct conversation? You can reach me
                using any of the methods below.
              </p>

              <div className="mt-8 space-y-5">

                <ContactMethod
                  icon={<MailIcon />}
                  title="Email"
                  value="krishankantrajput2112@gmail.com"
                  href="mailto:your-email@example.com"
                />

                <ContactMethod
                  icon={<PhoneIcon />}
                  title="Phone"
                  value="+91 8810419209"
                  href="tel:+918810419209"
                />

                <ContactMethod
                  icon={<LocationIcon />}
                  title="Location"
                  value="Ghaziabad, India"
                />

              </div>
            </div>

            {/* SOCIAL LINKS */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">
                Follow Me
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Connect with me on social platforms.
              </p>

              <div className="mt-6 flex gap-3">

                <SocialLink
                  href="https://github.com/"
                  label="GitHub"
                >
                  <GithubIcon />
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/"
                  label="LinkedIn"
                >
                  <LinkedinIcon />
                </SocialLink>

              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >

                    <span className="font-semibold">
                      {faq.question}
                    </span>

                    <span
                      className={`text-2xl text-blue-400 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FORM INPUT COMPONENT
========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-200"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-400">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 ${
          error ? "border-red-500" : "border-white/10"
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
   SELECT COMPONENT
========================================================= */

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-200"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
      >
        <option value="">Select budget</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   CONTACT METHOD
========================================================= */

function ContactMethod({
  icon,
  title,
  value,
  href,
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
    >
      {children}
    </a>
  );
}

export default Contact;