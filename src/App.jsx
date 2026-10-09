import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
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
import Background3DCanvas from "./assets/Background3DCanvas";

/**
 * Main Home Page: Simple, Minimal, and Highly Interactive
 * 1) Hero with in-hero AI Q&A prompt bar, typewriter roles, and quick stats
 * 2) Work (Projects) with category filters, interactive preview modals, and live demo links
 * 3) About with interactive developer art toggle, AKTU MCA milestones, and interactive project-linking skills
 * 4) Contact with sitting male developer art, 1-click email copy, and message form
 */
function HomePage({ onOpenAI, onOpenID }) {
  return (
    <main className="relative min-h-screen z-10">
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

      {/* 3D WebGL Spatial Universe Canvas */}
      <Background3DCanvas />

      {/* Ambient Animated Glassmorphism Aurora Backdrop */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Cyan Aurora Orb Top Left */}
        <div
          className="absolute -top-40 -left-40 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-400/15 to-transparent blur-[110px] animate-pulse pointer-events-none"
          style={{ animationDuration: "9s" }}
        />
        {/* Violet/Purple Aurora Orb Center Right */}
        <div
          className="absolute top-1/4 -right-40 w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full bg-gradient-to-bl from-purple-600/20 via-fuchsia-500/15 to-transparent blur-[120px] animate-pulse pointer-events-none"
          style={{ animationDuration: "11s" }}
        />
        {/* Indigo/Pink Aurora Orb Bottom Left */}
        <div
          className="absolute top-2/3 -left-32 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-pink-500/15 to-transparent blur-[110px] animate-pulse pointer-events-none"
          style={{ animationDuration: "10s" }}
        />
        {/* Sky Aurora Orb Bottom Center */}
        <div className="absolute -bottom-20 right-1/4 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-cyan-400/15 blur-[100px] pointer-events-none" />
        {/* Subtle Frosted Grid Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
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
        <Route path="*" element={<Navigate to="/" replace />} />
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