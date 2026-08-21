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
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;