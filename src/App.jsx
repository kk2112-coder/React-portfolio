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
import Footer from "./assets/Footer";
import LeftDock from "./assets/LeftDock";
import AIAssistantModal from "./assets/AIAssistantModal";

import Hero from "./assets/Hero";
import Work from "./assets/Work";
import About from "./assets/About";
import Resume from "./assets/Resume";
import Contact from "./assets/Contact";

/**
 * Main Home Page aggregating Hero, About, Work, and Contact
 * seamlessly matching the reference UI single-page cosmic experience
 */
function HomePage({ onOpenAI }) {
  return (
    <main className="relative bg-[#070817] min-h-screen">
      <Hero onOpenAI={onOpenAI} />
      <About />
      <Work />
      <Contact />
    </main>
  );
}

function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  const openAI = () => setIsAIOpen(true);
  const closeAI = () => setIsAIOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Floating Left Dock Navigation matching reference UI */}
      <LeftDock onOpenAI={openAI} />

      {/* Top Navbar */}
      <Navbar onOpenAI={openAI} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage onOpenAI={openAI} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<HomePage onOpenAI={openAI} />} />
        <Route path="/work" element={<HomePage onOpenAI={openAI} />} />
        <Route path="/contact" element={<HomePage onOpenAI={openAI} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistantModal isOpen={isAIOpen} onClose={closeAI} />
    </BrowserRouter>
  );
}

export default App;