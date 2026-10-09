import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaPaperPlane, FaCopy, FaCheck, FaTrash, FaUser } from "react-icons/fa";

const PRESETS = [
  "What are Krishan's top skills?",
  "Show your Office ID Card",
  "Tell me about the Phishing Detector",
  "What is LifeOS Mobile?",
  "What is his educational background?",
  "How can I contact or hire him?",
];

export function AIAssistantModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Krishan Kant's portfolio assistant. Ask me anything about his projects, skills in React & Node, academic background at AKTU, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSend = (presetText) => {
    const textToSend = (presetText || input).trim();
    if (!textToSend) return;

    const userMsg = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let reply = "";

      if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
        reply =
          "Krishan's core skills include:\n• **Frontend**: React 19, JavaScript (ES6+), Next.js, and Tailwind CSS.\n• **Backend**: Node.js, Express.js REST APIs, and Firebase Firestore.\n• **Mobile**: React Native & Expo.\n• **Security & AI**: Threat heuristics, URL classification, and AI prompt interfaces.";
      } else if (q.includes("id") || q.includes("card") || q.includes("badge")) {
        reply =
          "🪪 **Office ID Badge**: Krishan's interactive 3D Engineer Badge is live in the **About** section! You can toggle between Developer Art, Photograph, and the Office ID Card. It features 3D tilt perspective, realistic lanyard physics, an interactive flip transition to view back-side credentials, magnetic stripe, and scannable QR verification.";
      } else if (q.includes("phishing") || q.includes("security") || q.includes("detector")) {
        reply =
          "The **Phishing Website Detector** is Krishan's flagship security project. It uses a Node.js API to scan URLs for phishing indicators, lexical entropy anomalies, and spoofed hostnames in under 75ms to shield users against credential theft.";
      } else if (q.includes("lifeos") || q.includes("mobile") || q.includes("app")) {
        reply =
          "**LifeOS Mobile** is a futuristic personal operating system built with React Native and Expo. It unifies daily habits, task management, focus blocks, and telemetry into a clean, distraction-free mobile dashboard.";
      } else if (q.includes("education") || q.includes("degree") || q.includes("mca") || q.includes("aktu") || q.includes("bca")) {
        reply =
          "Krishan's educational background:\n• **Master of Computer Applications (M.C.A.)**: Dr. A.P.J. Abdul Kalam Technical University (AKTU) (2025–2027, Currently Pursuing with 1st Division)\n• **Bachelor of Computer Applications (B.C.A.)**: Chaudhary Charan Singh University (CCSU) (2022–2025, Graduated with 1st Division)";
      } else if (q.includes("hire") || q.includes("contact") || q.includes("email") || q.includes("reach")) {
        reply =
          "You can connect directly with Krishan:\n• **Email**: kkrishankant17@gmail.com\n• **GitHub**: github.com/kk2112-coder\n• **Instagram**: @kkrajput_002\n\nHe is currently open to full-time engineering roles, high-impact web contracts, and freelance projects.";
      } else {
        reply =
          "Krishan Kant is an ambitious software developer dedicated to crafting fast, clean digital products. Feel free to explore his projects in the Projects section or send him an email at kkrishankant17@gmail.com!";
      }

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  const copyMessage = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-fade-in">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="AI Assistant"
        className="relative w-full max-w-lg rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_0_rgba(0,0,0,0.65)] flex flex-col overflow-hidden"
        style={{ maxHeight: "85vh" }}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              ✦
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Krishan’s AI Assistant</h3>
              <p className="text-[11px] text-slate-400">Ask anything about his portfolio</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setMessages([
                  {
                    role: "assistant",
                    text: "Conversation cleared. What would you like to know next?",
                  },
                ])
              }
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] text-xs cursor-pointer"
              title="Clear chat"
            >
              <FaTrash />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] text-sm cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2.5 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-[10px] ${
                  msg.role === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                }`}
              >
                {msg.role === "user" ? <FaUser /> : "✦"}
              </div>

              <div
                className={`relative group max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                  msg.role === "user"
                    ? "bg-purple-600 text-white rounded-tr-none font-sans"
                    : "bg-white/[0.05] border border-white/10 text-slate-200 rounded-tl-none font-sans"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.role === "assistant" && (
                  <button
                    onClick={() => copyMessage(msg.text, index)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-white text-xs cursor-pointer"
                    title="Copy"
                  >
                    {copiedIndex === index ? (
                      <FaCheck className="text-emerald-400" />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs pl-8 animate-pulse">
              <span>✦</span> Generating answer...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Chips */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(preset)}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-cyan-500/20 border border-white/10 text-slate-300 hover:text-white shrink-0 transition-all cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Bottom Input */}
        <div className="p-3.5 bg-slate-950/60 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <FaPaperPlane className="text-[10px]" />
              <span>Send</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default AIAssistantModal;
