import { NavLink } from "react-router-dom";

export default function Footer({ onContactClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 mt-12">
      {/* petite barre d’accent */}
      <div className="h-1 bg-[#F3C53E]" />

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Branding */}
          <div>
            <h3 className="text-white text-lg font-semibold">Antoine Gaudin</h3>
            <p className="text-gray-400 text-sm mt-1">
              Développeur web • Commercial • Micro-entrepreneur • Assistant manager
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4 md:gap-6">
            <NavLink to="/" className="hover:text-[#F3C53E]">Accueil</NavLink>
            <NavLink to="/projects" className="hover:text-[#F3C53E]">Projects</NavLink>
            <NavLink to="/skills" className="hover:text-[#F3C53E]">Compétences</NavLink>
            {onContactClick ? (
              <button
                type="button"
                onClick={onContactClick}
                className="hover:text-[#F3C53E]"
                aria-haspopup="dialog"
              >
                Contact
              </button>
            ) : (
              <a href="mailto:agaudin76@gmail.com" className="hover:text-[#F3C53E]">Contact</a>
            )}
          </nav>

          {/* Contact rapide */}
          <div className="space-y-2">
            <a
              href="tel:+33639902810"
              className="inline-flex items-center gap-2 rounded-lg bg-[#F3C53E] px-3 py-1.5 font-semibold text-black hover:brightness-95"
            >
              📞 06.39.90.28.10
            </a>
            <a
              href="mailto:agaudin76@gmail.com"
              className="block hover:text-[#F3C53E]"
            >
              ✉️ agaudin76@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-400">
          © {year} Antoine Gaudin — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
