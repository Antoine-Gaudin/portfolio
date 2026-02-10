import { useState } from "react";
import Popup from "./Popup";
import { Phone, Mail, Linkedin, Github, X, Send, MapPin, Copy, Check } from "lucide-react";
import { PROFILE } from "../data/profile";

const CONTACT_LINKS = [
  {
    id: "phone",
    icon: Phone,
    label: "Téléphone",
    value: PROFILE.phone.display,
    href: `tel:${PROFILE.phone.link}`,
    description: "Disponible en journée",
    style: "bg-brand text-black hover:brightness-110",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Antoine Gaudin",
    href: PROFILE.linkedin,
    target: "_blank",
    description: "Réseau professionnel",
    style: "border border-blue-500/30 text-white hover:bg-blue-500/10",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "Antoine-Gaudin",
    href: PROFILE.github,
    target: "_blank",
    description: "Projets open source",
    style: "border border-white/10 text-white hover:bg-white/5",
  },
];

function EmailRow() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = PROFILE.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex gap-2">
      <a
        href={`mailto:${PROFILE.email}`}
        className="flex items-center gap-4 flex-1 rounded-xl border border-brand/30 px-4 py-3.5 font-medium text-white hover:bg-brand/10 transition-all"
      >
        <Mail size={18} className="shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{PROFILE.email}</p>
          <p className="text-xs opacity-60">Réponse sous 24h</p>
        </div>
        <Send size={14} className="shrink-0 opacity-50" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={`flex items-center justify-center rounded-xl border px-3 transition-all ${
          copied
            ? "border-green-500/30 bg-green-500/10 text-green-400"
            : "border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
        title="Copier l'email"
        aria-label="Copier l'adresse email"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function ContactPopup({ open, onClose }) {
  return (
    <Popup open={open} onClose={onClose} bare containerClassName="p-0">
      <div className="w-screen px-4 py-8">
        <div className="relative mx-auto max-w-md glass rounded-2xl overflow-hidden border border-brand/20 shadow-2xl">
          {/* Header gradient */}
          <div className="relative px-6 pt-6 pb-4 border-b border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 hover:bg-white/5 hover:text-white transition"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-brand/30">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">{PROFILE.name}</h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin size={10} />
                  {PROFILE.location}
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              N'hésitez pas à me contacter. Je suis ouvert aux opportunités et aux échanges.
            </p>
          </div>

          {/* Contact links */}
          <div className="p-4 space-y-2.5">
            {/* Téléphone */}
            {CONTACT_LINKS.filter((l) => l.id === "phone").map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-4 w-full rounded-xl px-4 py-3.5 font-medium transition-all ${link.style}`}
                >
                  <Icon size={18} className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{link.value}</p>
                    <p className="text-xs opacity-60">{link.description}</p>
                  </div>
                  <Send size={14} className="shrink-0 opacity-50" />
                </a>
              );
            })}

            {/* Email avec bouton copier */}
            <EmailRow />

            {/* Autres liens */}
            {CONTACT_LINKS.filter((l) => l.id !== "phone").map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.target}
                  rel={link.target ? "noreferrer" : undefined}
                  className={`flex items-center gap-4 w-full rounded-xl px-4 py-3.5 font-medium transition-all ${link.style}`}
                >
                  <Icon size={18} className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{link.value}</p>
                    <p className="text-xs opacity-60">{link.description}</p>
                  </div>
                  <Send size={14} className="shrink-0 opacity-50" />
                </a>
              );
            })}
          </div>

          {/* Footer subtle */}
          <div className="px-6 py-3 border-t border-white/5 text-center">
            <p className="text-[11px] text-gray-600">
              Actuellement en stage chez Elevate — Paris
            </p>
          </div>
        </div>
      </div>
    </Popup>
  );
}
