import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import ScrollToTop from "./assets/ScrollToTop";
import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import Work from "./assets/Work";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";
import AIAssistantModal from "./assets/AIAssistantModal";
import IDCardModal from "./assets/IDCardModal";
import Resume from "./assets/Resume";
import NotFound from "./assets/NotFound";
import { ScrollProgressBar } from "./assets/ScrollAnimations";

/**
 * Main Home Page: Simple, Minimal, and Highly Interactive
 * 1) Hero with in-hero AI Q&A prompt bar, typewriter roles, and quick stats
 * 2) Work (Projects) with category filters, interactive preview modals, and live demo links
 * 3) About with interactive developer art toggle, AKTU MCA milestones, and interactive project-linking skills
 * 4) Contact with sitting male developer art, 1-click email copy, and message form
 */
function HomePage({ onOpenAI, onOpenID }) {
  const location = useLocation();

  useEffect(() => {
    document.title = "Krishan Kant | Full-Stack Web & AI Developer Portfolio";

    // Handle deep link / sub-route scrolling
    const cleanPath = location.pathname.replace(/^\//, "");
    const targetId = cleanPath || (location.hash ? location.hash.replace("#", "") : null);

    if (targetId && ["projects", "about", "contact", "hero"].includes(targetId)) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main className="relative min-h-screen z-10 overflow-x-hidden">
      <Hero onOpenAI={onOpenAI} onOpenID={onOpenID} />
      <Work />
      <About onOpenID={onOpenID} />
      <Contact />
    </main>
  );
}

function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isIDOpen, setIsIDOpen] = useState(false);

  const openAI = () => setIsAIOpen(true);
  const closeAI = () => setIsAIOpen(false);

  const openID = () => setIsIDOpen(true);
  const closeID = () => setIsIDOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Motion Scroll-Linked Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Simple & Smooth Ambient Backdrop */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft, calm top ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] sm:w-[800px] h-[350px] rounded-full bg-gradient-to-b from-cyan-500/[0.08] via-purple-500/[0.04] to-transparent blur-[140px]" />
        {/* Subtle bottom ambient warmth */}
        <div className="absolute -bottom-24 right-1/4 w-[450px] h-[350px] rounded-full bg-purple-500/[0.04] blur-[130px]" />
      </div>

      {/* Clean Floating Navbar */}
      <Navbar onOpenAI={openAI} onOpenID={openID} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage onOpenAI={openAI} onOpenID={openID} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<HomePage onOpenAI={openAI} onOpenID={openID} />} />
        <Route path="/about" element={<HomePage onOpenAI={openAI} onOpenID={openID} />} />
        <Route path="/contact" element={<HomePage onOpenAI={openAI} onOpenID={openID} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Rich Informative Glassmorphism Footer */}
      <Footer onOpenAI={openAI} onOpenID={openID} />

      {/* Interactive AI Assistant Modal */}
      <AIAssistantModal isOpen={isAIOpen} onClose={closeAI} />

      {/* Dedicated 3D Office ID Badge Modal */}
      <IDCardModal isOpen={isIDOpen} onClose={closeID} />
    </BrowserRouter>
  );
}

export default App;