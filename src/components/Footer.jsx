import { NavLink } from "react-router-dom";
import { Github, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { PROFILE } from "../data/profile";

const FOOTER_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Parcours" },
  { to: "/competences", label: "Compétences" },
  { to: "/projects", label: "Projets" },
];

export default function Footer({ onContactClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white">
              AG<span className="text-brand">.</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Vibe Coder · Data & IA · Automatisation
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-600">
              <MapPin size={12} />
              <span>{PROFILE.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Navigation
            </h4>
            {FOOTER_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm text-gray-500 hover:text-brand transition-colors w-fit"
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={onContactClick}
              className="text-sm text-gray-500 hover:text-brand transition-colors w-fit text-left"
            >
              Contact
            </button>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Contact
            </h4>
            <a
              href={`tel:${PROFILE.phone.link}`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors"
            >
              <Phone size={14} />
              {PROFILE.phone.display}
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors"
            >
              <Mail size={14} />
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © {year} Antoine Gaudin — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
