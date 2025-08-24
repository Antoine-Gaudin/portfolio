// src/pages/Skills.jsx
import { useState } from "react";
import devImg from "../assets/developpeur-web.webp";
import commercialImg from "../assets/commercial.webp";
import microImg from "../assets/auto-entrepreneur.webp";
import managerImg from "../assets/manager.webp";
import PopupCarousel from "../components/PopupCarousel";
import { SKILLS } from "../data/skills";

// src/pages/Skills.jsx (seulement SkillCard modifié)
function SkillCard({ img, title, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      className="group relative block overflow-hidden rounded-2xl bg-white border border-gray-200
                 hover:border-[#F3C53E] hover:shadow-lg transition hover:-translate-y-0.5
                 focus:outline-none focus:ring-2 focus:ring-[#F3C53E] cursor-pointer"
      aria-haspopup="dialog"
      aria-label={`Voir détails: ${title}`}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Bande qui remonte au hover → couleur exacte */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          <div className="bg-[#F3C53E] px-4 py-3">
            <span className="font-semibold text-black">{title}</span>
          </div>
        </div>
        {/* liseré discret en haut (optionnel) */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-[#F3C53E]/70" />
      </div>
    </button>
  );
}

export default function Skills() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Ordre demandé
  const items = [
    { key: "dev", title: "Développeur web", img: devImg, data: SKILLS.dev },
    {
      key: "commercial",
      title: "Commercial",
      img: commercialImg,
      data: SKILLS.commercial,
    },
    {
      key: "micro",
      title: "Micro-entrepreneur",
      img: microImg,
      data: SKILLS.micro,
    },
    {
      key: "manager",
      title: "Assistant manager",
      img: managerImg,
      data: SKILLS.manager,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Compétences</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {items.map((it, i) => (
          <SkillCard
            key={it.key}
            img={it.img}
            title={it.title}
            onSelect={() => {
              setStartIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <PopupCarousel
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        startIndex={startIndex}
      />
    </section>
  );
}
