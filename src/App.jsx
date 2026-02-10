import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar onContactClick={() => setContactOpen(true)} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer onContactClick={() => setContactOpen(true)} />
        <ContactPopup
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
