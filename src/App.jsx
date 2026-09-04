import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./assets/ScrollToTop";
import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import Footer from "./assets/Footer";
import Work from "./assets/Work";
import About from "./assets/About";
import Resume from "./assets/Resume";
import Contact from "./assets/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Single global Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all — redirect to home */}
        <Route path="*" element={<Hero />} />
      </Routes>

      {/* Single global Footer (includes Back-to-Top button) */}
      <About />
      <Work />
      <Footer />
    </BrowserRouter>
  );
}

export default App;