import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Fermer le menu quand la route change
  useEffect(() => setOpen(false), [pathname]);

  // Fermer avec Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkBase =
    "block px-3 py-2 rounded hover:text-[#F3C53E] focus:outline-none focus:ring-2 focus:ring-[#F3C53E]";
  const linkActive = "text-[#F3C53E]";

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Branding simple */}
        <div className="font-semibold">Antoine&nbsp;Gaudin</div>

        {/* Liens desktop */}
        <nav className="hidden items-center gap-4 md:flex">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>Accueil</NavLink>
          <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>Projects</NavLink>
          <NavLink to="/skills" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>Compétences</NavLink>
          <button
            type="button"
            onClick={onContactClick}
            className="px-3 py-2 rounded bg-[#F3C53E] font-semibold text-black hover:brightness-95"
          >
            Contact
          </button>
        </nav>

        {/* Bouton burger mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center gap-2 rounded px-3 py-2 hover:bg-black/5"
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <span className="block h-[2px] w-6 bg-black" />
          <span className="block h-[2px] w-6 bg-black" />
          <span className="block h-[2px] w-6 bg-black" />
        </button>
      </div>

      {/* Menu mobile plein écran */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          {/* panneau */}
          <div
            className="absolute inset-0 ml-auto w-full max-w-[90%] sm:max-w-[420px] bg-white shadow-xl
                       transition-transform duration-200 ease-out translate-x-0"
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="font-semibold">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#F3C53E] text-black px-2.5 py-1 text-sm hover:brightness-95"
                aria-label="Fermer le menu"
              >
                × Fermer
              </button>
            </div>

            <nav className="px-3 py-4 space-y-1 bg-white">
              <NavLink
                to="/"
                className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/projects"
                className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}
              >
                Projets
              </NavLink>
              <NavLink
                to="/skills"
                className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}
              >
                Compétences
              </NavLink>
              <button
                type="button"
                onClick={() => { onContactClick?.(); setOpen(false); }}
                className="mt-2 w-full rounded bg-[#F3C53E] px-3 py-2 font-semibold text-black hover:brightness-95"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
