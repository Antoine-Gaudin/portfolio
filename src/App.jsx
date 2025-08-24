// src/App.jsx
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";   // ← import manquant
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import ContactPopup from "./components/ContactPopup";
import ink from "./assets/tâche d'encre.png"; 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar onContactClick={() => setContactOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} /> {/* ← ici, dans <Routes> */}
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

<Footer onContactClick={() => setContactOpen(true)} />

        <div id="contact-popup">
          <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
        </div>
                {/* Fond décoratif global */}
        <div className="fixed bottom-0 left-0 -z-10 pointer-events-none select-none">
          <img
            src={ink}
            alt=""
            aria-hidden="true"
            className="w-[70vw] md:w-[55vw] lg:w-[45vw] max-w-[1100px]"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}
