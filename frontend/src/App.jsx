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

import Hero from "./assets/Hero";
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

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <About />
      <Work />

      <Footer />
    </BrowserRouter>
  );
}

export default App;