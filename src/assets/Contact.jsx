import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { SittingCharacterIllustration } from "./CharacterIllustrations";
import { IridescentOrb, CrystalPrism } from "./IridescentSpheres";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" | "error"
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 8) {
      errs.message = "Message must be at least 8 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");
    setMessageType("");

    if (!validate()) {
      setFormMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    try {
      setIsSubmitting(true);

      // Save to Firebase Firestore
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });

      setFormMessage("Thank you! Your message has been sent successfully.");
      setMessageType("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Firebase contact submission error:", err);
      setFormMessage("Could not send message. Please check your network or try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-5 sm:px-10 lg:px-16 overflow-hidden cosmic-nebula flex flex-col justify-center"
    >
      {/* Background Floating Orbs & Prism */}
      <div className="absolute top-16 right-16 hidden lg:block opacity-60">
        <IridescentOrb size={75} glowColor="purple" />
      </div>
      <div className="absolute bottom-12 left-10 hidden xl:block opacity-60">
        <CrystalPrism size={85} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        {/* Main Frosted Glass Panel Container matching reference UI */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* ── Left Column: Character with Laptop & "Get in touch" info ── */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              
              {/* Sitting Developer Character Illustration */}
              <div className="w-full flex justify-center lg:justify-start">
                <SittingCharacterIllustration />
              </div>

              {/* Get In Touch Title & Copy matching reference UI */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Get in touch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                  I'm very approachable and would love to speak to you. Feel free to call, send me an email, or simply complete the enquiry form.
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <span className="text-cyan-400">📞</span>
                  <span>+91 9315482322</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <span className="text-purple-400">✉️</span>
                  <span>kkrishankant17@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <span className="text-pink-400">📍</span>
                  <span>Delhi / NCR, India</span>
                </div>
              </div>

              {/* Social Icons matching reference UI footer */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { href: "https://www.instagram.com/kkrajput_002/", Icon: FaInstagram, color: "hover:text-pink-400 hover:border-pink-500/40" },
                  { href: "https://github.com/kk2112-coder", Icon: FaGithub, color: "hover:text-cyan-400 hover:border-cyan-500/40" },
                  { href: "https://www.linkedin.com/in/krishan-kant-615740305/", Icon: FaLinkedin, color: "hover:text-blue-400 hover:border-blue-500/40" },
                  { href: "https://x.com/", Icon: FaTwitter, color: "hover:text-sky-400 hover:border-sky-500/40" },
                ].map(({ href, Icon, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 ${color}`}
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right Column: "Send me a message" Form matching reference UI ── */}
            <div className="lg:col-span-6 bg-slate-950/40 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-xl">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-5">
                Send me a message
              </h4>

              {formMessage && (
                <div
                  className={`p-3 rounded-xl mb-4 text-xs font-semibold ${
                    messageType === "success"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {formMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm placeholder-slate-500"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm placeholder-slate-500"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm placeholder-slate-500"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Enter Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm placeholder-slate-500 resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Purple / Violet Gradient Send Button matching reference */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}