// src/data/projects.js
import novelImg from "../assets/novelindex.webp";
import tradImg from "../assets/tradindex.webp";

export const PROJECTS = [
  {
    slug: "novel-index",
    title: "Novel Index",
    image: novelImg,
    website: "https://novel-index.com/",
    github: "https://github.com/Antoine-Gaudin/novel-index-nextjs",
    tools: ["Next.js", "Tailwind CSS", "Strapi", "Cloudinary", "Cron jobs", "Axios"],
    hosting: "Vercel (front) • Render (back)",
    type: "Projet personnel",
    status: "En cours d’évolution",
    description:
      "Lancé en 2023, Novel-Index est une plateforme dédiée aux light novels et webnovels asiatiques. Elle a pour but de soutenir les traducteurs amateurs et professionnels en leur offrant plus de visibilité : au lieu d’héberger les traductions, le site redirige directement les lecteurs vers le site du traducteur d’origine.\n\nPour les œuvres licenciées, Novel-Index redirige naturellement vers les éditeurs officiels, garantissant le respect des droits et la mise en avant des acteurs légitimes.\n\nConçu initialement en PHP, le projet a ensuite été entièrement re-développé en Next.js avec un back-office Strapi, afin d’apporter plus de performance, de flexibilité et une meilleure gestion des contenus.",
  },
  {
    slug: "trad-index",
    title: "Trad Index",
    image: tradImg,
    website: "https://trad-index.com/oeuvres",
    github: "https://github.com/Antoine-Gaudin/my-nextjs-project",
    tools: ["Next.js", "Tailwind CSS", "Strapi", "Cloudinary", "Cron jobs", "Axios"],
    hosting: "Vercel (front) • Render (back)",
    type: "Projet personnel",
    status: "En cours de développement",
    description:
      "Lancé en 2025, Trad-Index est une plateforme dédiée aux traductions de light novels, webnovels et webtoons. Contrairement à Novel-Index, qui se concentre sur la redirection, Trad-Index propose un hébergement direct des contenus.\n\nLe projet vise à soutenir les traducteurs qui n’ont pas forcément les compétences techniques ni les moyens de créer leur propre site, en leur offrant un espace moderne, sécurisé et simple d’utilisation pour publier, organiser et partager leurs œuvres.\n\nTrad-Index met également en avant des outils collaboratifs pour la gestion des chapitres, la visibilité des projets et l’interaction avec les lecteurs.",
  },
];

export const getProjectBySlug = (slug) =>
  PROJECTS.find((p) => p.slug === slug);
