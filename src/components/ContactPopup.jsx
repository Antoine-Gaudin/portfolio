// src/components/ContactPopup.jsx
import Popup from "./Popup";

export default function ContactPopup({ open, onClose }) {
  const phoneHuman = "06.39.90.28.10"; // tel à afficher
  const phoneLink = "+33639902810"; // tel pour le lien tel:
  const email = "agaudin76@gmail.com";
  const pitch = "Joignable facilement : téléphone ou email ci-dessous.";

  return (
    <Popup open={open} onClose={onClose} bare containerClassName="p-0">
      {/* Carte contact centrée */}
      <div className="w-screen px-4 py-8">
        <div className="relative mx-auto max-w-lg rounded-2xl border border-[#F3C53E] bg-white p-6 shadow-xl">
          {/* Bouton fermer : petit, dans le coin de la carte */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-[#F3C53E] text-black text-sm px-2.5 py-1 shadow hover:brightness-95"
            aria-label="Fermer"
          >
            × <span className="ml-1 hidden sm:inline cursor-pointer">Fermer</span>
          </button>
          <h2 className="text-2xl font-bold">Antoine Gaudin</h2>
          <p className="mt-3 text-gray-700">{pitch}</p>

          <div className="mt-6 space-y-3">
            <a
              href={`tel:${phoneLink}`}
              className="block w-full text-center rounded-lg bg-[#F3C53E] px-4 py-3 font-semibold text-black hover:brightness-95"
            >
              📞 {phoneHuman}
            </a>
            <a
              href={`mailto: ${email}`}
              className="block w-full text-center rounded-lg border border-[#F3C53E] px-4 py-3 font-semibold text-gray-900 hover:bg-[#F3C53E]/10"
            >
              ✉️ {email}
            </a>
          </div>
        </div>
      </div>
    </Popup>
  );
}
