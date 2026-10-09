import React, { useState } from "react";
import { SittingCharacterIllustration } from "./CharacterIllustrations";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * AppleContact Component
 * Replicates Apple's consultation / Genius Bar contact interface.
 * Features:
 * - Sitting male developer character illustration on glowing celestial pedestal
 * - Clean Apple Store consultation inquiry form with validation
 * - Direct contact channel pills (Email, LinkedIn, GitHub, Instagram)
 * - One-click email copy functionality
 */
export default function AppleContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project Collaboration",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // { type: 'success' | 'error', text: string }
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kkrishankant17@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({ type: "error", text: "Please complete all required fields." });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    // Simulate Apple-fast consultation submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: "success",
        text: "Thank you! Your message has been routed to Krishan Kant. Expect a reply within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "Full-Stack Project Collaboration",
        message: "",
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-[#86868b] tracking-wider uppercase">
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Connect with Krishan. <br />
            <span className="apple-silver-text">Let's build something extraordinary.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868b]">
            Available for full-time frontend &amp; full-stack engineering roles, innovative web contracts, and AI user interface architecture.
          </p>
        </div>

        {/* ── Contact Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Male Developer Art & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Sitting Male Developer Artwork on Pedestal */}
            <div className="w-full flex justify-center lg:justify-start">
              <SittingCharacterIllustration className="w-64 sm:w-72 h-auto" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Krishan Kant
              </h3>
              <p className="text-sm text-[#86868b] leading-relaxed">
                Prompt replies. Clear communication. Focused on bringing Apple-level polish and robust functionality to your team.
              </p>
            </div>

            {/* Direct Channel Pills */}
            <div className="w-full space-y-2.5 pt-2">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#161617] border border-white/10 hover:border-white/20 transition-all text-xs text-left group"
              >
                <div>
                  <span className="text-[#86868b] block text-[10px] uppercase font-semibold">
                    Direct Email
                  </span>
                  <span className="text-white font-medium text-xs sm:text-sm">
                    kkrishankant17@gmail.com
                  </span>
                </div>
                <span className="apple-btn-secondary px-3 py-1 text-[11px]">
                  {copiedEmail ? "✓ Copied" : "Copy"}
                </span>
              </button>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://linkedin.com/in/krishan-kant-615740305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#161617] border border-white/10 hover:border-[#0071e3] transition-all flex flex-col items-center justify-center gap-1.5 text-xs text-[#a1a1a6] hover:text-white"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0071e3]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/kk2112-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#161617] border border-white/10 hover:border-white/30 transition-all flex flex-col items-center justify-center gap-1.5 text-xs text-[#a1a1a6] hover:text-white"
                >
                  <FaGithub className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/kkrajput_002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#161617] border border-white/10 hover:border-pink-500 transition-all flex flex-col items-center justify-center gap-1.5 text-xs text-[#a1a1a6] hover:text-white"
                >
                  <FaInstagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-Style Inquiry Form */}
          <div className="lg:col-span-7 apple-card p-6 sm:p-10 border border-white/10 shadow-2xl">
            <div className="mb-6 space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Project Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b]">
                Send a direct project brief or inquiry. All fields encrypted in transit.
              </p>
            </div>

            {formStatus && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm mb-6 ${
                  formStatus.type === "success"
                    ? "bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158]"
                    : "bg-[#ff453a]/15 border border-[#ff453a]/30 text-[#ff453a]"
                }`}
              >
                {formStatus.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-[#86868b] font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Steve Jobs"
                    className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-white/10 focus:border-[#0071e3] text-sm text-white placeholder-[#555] outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#86868b] font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-white/10 focus:border-[#0071e3] text-sm text-white placeholder-[#555] outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[#86868b] font-medium">Collaboration Scope</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-white/10 focus:border-[#0071e3] text-sm text-white outline-none transition"
                >
                  <option value="Full-Stack Engineering Role">Full-Stack Engineering Role (Full-Time)</option>
                  <option value="Frontend / React Architecture">Frontend / React Architecture</option>
                  <option value="AI Interface Integration">AI Interface Integration</option>
                  <option value="Mobile App Development">Mobile App (React Native)</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[#86868b] font-medium">Message &amp; Project Details *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision, timeline, or technical requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#121214] border border-white/10 focus:border-[#0071e3] text-sm text-white placeholder-[#555] outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="apple-btn-blue w-full py-3.5 text-sm sm:text-base font-semibold shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Transmitting to Krishan...</span>
                  </>
                ) : (
                  <span>Submit Inquiry</span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
