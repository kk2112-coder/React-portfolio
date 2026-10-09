import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaPaperPlane, FaCheck, FaCopy } from "react-icons/fa";
import { SittingCharacterIllustration } from "./CharacterIllustrations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("krishankantrajput2112@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* ── Section Header ── */}
      <div className="text-center space-y-3 max-w-2xl mx-auto pb-12">
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* ── Left Column: Sitting Male Developer Art + Direct Links ── */}
        <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
          <div className="relative w-full max-w-[280px]">
            <SittingCharacterIllustration />
          </div>

          <div className="w-full max-w-sm space-y-3">
            {/* Copyable Email Pill */}
            <div className="p-4 rounded-2xl bg-slate-900/65 backdrop-blur-2xl border border-white/15 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Email Address</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100">
                    krishankantrajput2112@gmail.com
                  </div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 border border-white/15 text-xs font-medium text-cyan-300 transition-all cursor-pointer flex items-center gap-1 backdrop-blur-md"
                title="Copy Email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/kk2112-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-2xl hover:bg-white/[0.08] border border-white/15 flex items-center gap-2.5 transition-all group text-left shadow-sm"
              >
                <FaGithub className="text-lg text-slate-300 group-hover:text-cyan-400" />
                <div>
                  <div className="text-[10px] text-slate-400">GitHub</div>
                  <div className="text-xs font-semibold text-slate-100">@kk2112-coder</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/kkrajput_002/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-2xl hover:bg-pink-500/10 border border-white/15 flex items-center gap-2.5 transition-all group text-left shadow-sm"
              >
                <FaInstagram className="text-lg text-pink-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[10px] text-slate-400">Instagram</div>
                  <div className="text-xs font-semibold text-slate-100">@kkrajput_002</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Column: Clean Contact Form ── */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-slate-900/65 dark:bg-slate-900/65 border border-white/15 p-6 sm:p-8 shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            
            {submitted ? (
              <div className="py-10 text-center space-y-3 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xl flex items-center justify-center mx-auto">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Message sent successfully! Krishan will reply back to <strong className="text-cyan-300">{formData.email}</strong> as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs text-cyan-300 cursor-pointer backdrop-blur-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-300">Name</label>
                    <input
                      id="name"
                      aria-label="Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border border-slate-200 dark:border-white/15 focus:border-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input
                      id="email"
                      aria-label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border border-slate-200 dark:border-white/15 focus:border-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    id="message"
                    aria-label="Message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 dark:bg-black/35 backdrop-blur-md border border-slate-200 dark:border-white/15 focus:border-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                >
                  {sending ? (
                    <span>Sending message...</span>
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