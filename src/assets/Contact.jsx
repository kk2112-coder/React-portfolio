import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaExclamationCircle,
} from "react-icons/fa";
import { SittingCharacterIllustration } from "./CharacterIllustrations";
import { ScrollReveal, ScrollParallax } from "./ScrollAnimations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneRaw = "+918810419209";
  const phoneFormatted = "+91 8810419209";
  const emailAddress = "krishankantrajput2112@gmail.com";

  const validate = (data = formData) => {
    const errs = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.message || data.message.trim().length < 5) {
      errs.message = "Please write a message of at least 5 characters.";
    }
    return errs;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const nextData = { ...prev, [field]: value };
      if (touched[field]) {
        setErrors(validate(nextData));
      }
      return nextData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSending(false);
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneFormatted);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      
      {/* ── Section Header ── */}
      <ScrollReveal variant="fade-up" className="text-center space-y-3 max-w-2xl mx-auto pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-medium text-cyan-300">
          <span>✦</span>
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Let’s Connect.
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Whether you have an engineering role, a freelance project, or just want to chat about AI &amp; React, feel free to reach out.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* ── Left Column: Sitting Male Developer Art + Direct Links ── */}
        <ScrollReveal variant="fade-right" className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
          <ScrollParallax offset={18} className="relative w-full max-w-[280px]">
            <SittingCharacterIllustration />
          </ScrollParallax>

          <div className="w-full max-w-sm space-y-3">
            
            {/* Clickable Phone Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/65 backdrop-blur-2xl border border-white/15 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm shrink-0">
                  <FaPhoneAlt />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${phoneRaw}`}
                    className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors block truncate"
                    title="Call Krishan Kant"
                  >
                    {phoneFormatted}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={copyPhone}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-purple-500/20 border border-white/15 text-xs font-medium text-purple-300 transition-all cursor-pointer flex items-center gap-1 backdrop-blur-md"
                  title="Copy Phone Number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span className="text-[11px]">{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Clickable & Copyable Email Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/65 backdrop-blur-2xl border border-white/15 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm shrink-0">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Email Address</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors block truncate"
                    title="Send Email"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 ml-2 px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 border border-white/15 text-xs font-medium text-cyan-300 transition-all cursor-pointer flex items-center gap-1 backdrop-blur-md"
                title="Copy Email"
                aria-label="Copy to clipboard"
              >
                {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span className="text-[11px]">{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/kk2112-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-2xl hover:bg-white/[0.08] border border-white/15 flex items-center gap-2.5 transition-all group text-left shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg text-slate-300 group-hover:text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400">GitHub</div>
                  <div className="text-xs font-semibold text-slate-100 truncate">@kk2112-coder</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/kkrajput_002/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-2xl hover:bg-pink-500/10 border border-white/15 flex items-center gap-2.5 transition-all group text-left shadow-sm"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-lg text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400">Instagram</div>
                  <div className="text-xs font-semibold text-slate-100 truncate">@kkrajput_002</div>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Right Column: Clean Contact Form with Validation ── */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-slate-900/65 dark:bg-slate-900/65 border border-white/15 p-6 sm:p-8 shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-in" role="alert">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xl flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Message sent successfully! Thank you, <strong className="text-white">{formData.name}</strong>. Krishan will reply back to <strong className="text-cyan-300">{formData.email}</strong> as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                    setTouched({});
                    setErrors({});
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-cyan-300 cursor-pointer backdrop-blur-md transition-all shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Form header */}
                <div className="pb-1 border-b border-white/10">
                  <h3 className="text-lg font-bold text-slate-100">Send an Inquiry</h3>
                  <p className="text-xs text-slate-400">Fill in the details below to start a conversation.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span>Name *</span>
                      {touched.name && errors.name && (
                        <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                          <FaExclamationCircle className="text-[10px]" /> Required
                        </span>
                      )}
                    </label>
                    <input
                      id="name"
                      name="name"
                      aria-label="Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your Full Name"
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none transition-all ${
                        touched.name && errors.name
                          ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-400/30"
                          : "border-slate-200 dark:border-white/15 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400/30"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" className="text-[11px] text-rose-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                      <span>Email *</span>
                      {touched.email && errors.email && (
                        <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                          <FaExclamationCircle className="text-[10px]" /> Invalid
                        </span>
                      )}
                    </label>
                    <input
                      id="email"
                      name="email"
                      aria-label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="name@example.com"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none transition-all ${
                        touched.email && errors.email
                          ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-400/30"
                          : "border-slate-200 dark:border-white/15 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400/30"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="text-[11px] text-rose-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Message *</span>
                    {touched.message && errors.message && (
                      <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                        <FaExclamationCircle className="text-[10px]" /> Required
                      </span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-label="Message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project, idea, or questions..."
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none transition-all resize-none ${
                      touched.message && errors.message
                        ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-400/30"
                        : "border-slate-200 dark:border-white/15 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400/30"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="text-[11px] text-rose-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Global Error Banner */}
                {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <FaExclamationCircle className="shrink-0 text-sm" />
                    <span>Please correct the errors above before sending.</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}