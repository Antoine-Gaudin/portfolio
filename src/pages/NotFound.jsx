import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <span className="text-7xl font-extrabold gradient-text">404</span>
      <h1 className="mt-4 text-xl font-semibold text-white">Page introuvable</h1>
      <p className="mt-2 text-gray-500">La page que vous cherchez n'existe pas.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-black hover:brightness-110 transition"
      >
        <ArrowLeft size={16} />
        Retour à l'accueil
      </Link>
    </div>
  );
}
