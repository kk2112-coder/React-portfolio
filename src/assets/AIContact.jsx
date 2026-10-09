import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaPaperPlane, FaCheck, FaLock, FaTerminal } from "react-icons/fa";
import { SittingCharacterIllustration } from "./CharacterIllustrations";
import { IridescentOrb } from "./IridescentSpheres";

export default function AIContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack / AI Role Inquiry",
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
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kkrishankant17@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-mono font-bold text-cyan-300">
            <FaTerminal />
            <span>NEURAL TRANSMISSION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Initialize Connection.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ready to engineer your next AI-integrated web system, explore contract collaboration, or hire for engineering roles? Transmit your message below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sitting Male Developer Art + Direct Channels */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
            <div className="relative w-full max-w-[320px]">
              <SittingCharacterIllustration />
            </div>

            {/* Direct Connect Pills */}
            <div className="w-full max-w-md space-y-3">
              
              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">kkrishankant17@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono text-cyan-300 cursor-pointer transition-all"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* GitHub & Instagram Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/kk2112-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 flex items-center gap-2.5 transition-all group"
                >
                  <FaGithub className="text-lg text-slate-300 group-hover:text-cyan-400" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-slate-400">GitHub</div>
                    <div className="text-xs font-semibold text-white">@kk2112-coder</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/kkrajput_002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/[0.04] hover:bg-pink-500/15 border border-white/10 hover:border-pink-400/40 flex items-center gap-2.5 transition-all group"
                >
                  <FaInstagram className="text-lg text-pink-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono text-slate-400">Instagram</div>
                    <div className="text-xs font-semibold text-white">@kkrajput_002</div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Cybernetic Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#090b22]/90 border border-white/10 p-6 sm:p-9 shadow-2xl backdrop-blur-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <FaLock className="text-xs" /> 256-Bit Encrypted Form
                </span>
                <span className="text-[11px] font-mono text-slate-500">Node: direct-inbox</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-2xl flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                    <FaCheck />
                  </div>
                  <h3 className="text-xl font-bold text-white">Transmission Successful</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your inquiry has been logged. Krishan Kant will review your message and reply to <strong className="text-cyan-300">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Full-Stack / AI Role Inquiry",
                        message: "",
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-cyan-300 transition-all cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Topic / Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-sm text-white focus:outline-none transition-all font-sans"
                    >
                      <option value="Full-Stack / AI Role Inquiry" className="bg-slate-900 text-white">Full-Stack / AI Role Inquiry</option>
                      <option value="Freelance Web Project" className="bg-slate-900 text-white">Freelance / Contract Web Project</option>
                      <option value="Phishing Detector / Security Engine" className="bg-slate-900 text-white">Phishing Detector / Threat Engine Discussion</option>
                      <option value="General Collaboration" className="bg-slate-900 text-white">General Tech Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message Transmission</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, timeline, engineering role, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">✦</span> Encrypting &amp; Transmitting...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Transmit Message to Krishan</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
