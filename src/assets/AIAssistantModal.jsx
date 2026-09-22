import React, { useState, useRef, useEffect } from "react";

/**
 * AI Portfolio Assistant Component
 * Provides an interactive generative AI conversational interface
 * representing Krishan Kant's work, tech stack, and background.
 */
export function AIAssistantModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am Krishan's AI Portfolio Assistant. I can tell you about his projects, technical expertise in React & AI interfaces, education, or how to get in touch. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What are Krishan's top skills?",
    "Tell me about his recent projects",
    "How can I contact or hire him?",
    "What is his education background?",
  ];

  const handleSend = (userQuestion) => {
    const textToSend = userQuestion || input.trim();
    if (!textToSend) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: textToSend }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // AI Response Generator
    setTimeout(() => {
      let reply = "";
      const q = textToSend.toLowerCase();

      if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
        reply =
          "Krishan specializes in modern frontend engineering and interactive AI interfaces. His core skills include React, React Native, JavaScript (ES6+), Tailwind CSS, Node.js, Express, Firebase Firestore, HTML5/CSS3, and Git. He focuses on responsive layouts, glassmorphic UI systems, and high-performance web apps.";
      } else if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
        reply =
          "Krishan has built several impactful applications: \n\n1. **Phishing Website Detector**: Full-stack threat analysis tool using Node.js & React.\n2. **Women Security App**: Emergency safety application with real-time assistance.\n3. **NowFloat**: Interactive responsive web application.\n4. **LifeOS**: Futuristic React Native mobile personal operating system integrating AI and task intelligence.\n\nExplore them in the 'Recent Work' section!";
      } else if (q.includes("contact") || q.includes("hire") || q.includes("reach") || q.includes("email")) {
        reply =
          "You can reach Krishan directly through the contact form on this page, or connect with him via:\n• **Email**: kkrishankant17@gmail.com\n• **LinkedIn**: Krishan Kant (linkedin.com/in/krishan-kant-615740305/)\n• **GitHub**: github.com/kk2112-coder\n• **Instagram**: @kkrajput_002";
      } else if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("university")) {
        reply =
          "Krishan is currently pursuing his **Master of Computer Applications (M.C.A.)** (2025–2027) from Dr. A.P.J. Abdul Kalam Technical University (AKTU). He previously completed his **Bachelor of Computer Applications (B.C.A.)** from CCSU with strong foundational coursework in Computer Science.";
      } else if (q.includes("ai") || q.includes("artificial intelligence")) {
        reply =
          "Krishan integrates modern AI patterns including Generative UI, intelligent assistant widgets, smart phishing analysis algorithms, and sleek futuristic design systems to build next-generation web and mobile user interfaces.";
      } else {
        reply =
          `Krishan Kant is an ambitious Web Developer & UI Designer passionate about crafting visually captivating, user-friendly digital experiences. Feel free to explore his projects in the 'Recent Work' section or submit a project proposal through the 'Get in Touch' form!`;
      }

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#0b0d26]/90 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] backdrop-blur-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "88vh" }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-cyan-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Krishan's AI Assistant
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  AI Interface
                </span>
              </h3>
              <p className="text-xs text-slate-400">Instant answers about skills, projects & background</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close assistant"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {m.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-xs text-purple-300 shrink-0 mt-0.5">
                  AI
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                  m.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-xs shadow-md"
                    : "bg-slate-900/80 border border-white/10 text-slate-200 rounded-tl-xs backdrop-blur-md shadow-md"
                }`}
              >
                <p className="whitespace-pre-line text-[13.5px]">{m.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-5 py-2 flex flex-wrap gap-1.5 border-t border-white/5 bg-slate-950/40">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 hover:bg-purple-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-purple-400/40 transition-all duration-200"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t border-white/10 bg-slate-900/60 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Krishan..."
            className="flex-1 bg-slate-950/80 border border-white/10 focus:border-cyan-400/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm shadow-md hover:opacity-90 disabled:opacity-40 transition-all flex items-center gap-1.5"
          >
            <span>Send</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIAssistantModal;
