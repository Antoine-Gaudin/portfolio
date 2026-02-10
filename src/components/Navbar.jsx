import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Parcours" },
  { to: "/competences", label: "Compétences" },
  { to: "/projects", label: "Projets" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "text-brand bg-brand/10"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a14]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-lg font-bold text-white hover:text-brand transition-colors"
        >
          AG<span className="text-brand">.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
          <button
            type="button"
            onClick={onContactClick}
            className="ml-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-black hover:brightness-110 transition"
          >
            Contact
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0f0f1a] border-l border-white/5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
              <span className="font-semibold text-white">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-white/5 hover:text-white"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.to} {...link} />
              ))}
              <button
                type="button"
                onClick={() => {
                  onContactClick?.();
                  setOpen(false);
                }}
                className="mt-3 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-black hover:brightness-110"
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
