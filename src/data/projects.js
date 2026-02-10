import novelImg from "../assets/novelindex.webp";
import tradImg from "../assets/tradindex.webp";

export const PROJECTS = [
  {
    slug: "novel-index",
    title: "Novel Index",
    image: novelImg,
    website: "https://novel-index.com/",
    github: "https://github.com/Antoine-Gaudin/novel-index-nextjs",
    hosting: "Vercel (front) · Render (back)",
    type: "Projet personnel",
    status: "En production",
    year: "2023",
    description:
      "Plateforme dédiée aux light novels et webnovels asiatiques, conçue pour soutenir les traducteurs amateurs et professionnels. Le site redirige les lecteurs vers le site du traducteur d'origine, garantissant visibilité et respect des droits.\n\nInitialement développé en PHP, le projet a été entièrement re-développé en Next.js avec un back-office Strapi pour plus de performance et de flexibilité.",
    architecture: [
      { layer: "Front-end", stack: "Next.js, React, Tailwind CSS" },
      { layer: "Back-end", stack: "Strapi (CMS headless)" },
      { layer: "Médias", stack: "Cloudinary (images, optimisation)" },
      { layer: "Données", stack: "API REST, Axios, Cron jobs" },
      { layer: "Hébergement", stack: "Vercel (front), Render (back)" },
    ],
    features: [
      "Catalogue complet de light novels / webnovels",
      "Redirection vers les traducteurs d'origine",
      "Respect des licences et droits d'auteur",
      "Recherche et filtres avancés",
      "Gestion automatisée via Cron jobs",
      "Back-office Strapi pour la gestion de contenu",
    ],
    timeline: [
      { date: "2023", event: "Lancement initial en PHP" },
      { date: "2024", event: "Migration complète vers Next.js + Strapi" },
      { date: "2025", event: "Optimisations SEO et nouvelles fonctionnalités" },
    ],
  },
  {
    slug: "trad-index",
    title: "Trad Index",
    image: tradImg,
    website: "https://trad-index.com/oeuvres",
    github: "https://github.com/Antoine-Gaudin/my-nextjs-project",
    hosting: "Vercel (front) · Render (back)",
    type: "Projet personnel",
    status: "En développement",
    year: "2025",
    description:
      "Plateforme d'hébergement direct de traductions de light novels, webnovels et webtoons. Contrairement à Novel-Index, Trad-Index propose un hébergement direct des contenus.\n\nLe projet offre aux traducteurs un espace moderne et simple pour publier, organiser et partager leurs œuvres, avec des outils collaboratifs pour la gestion des chapitres et l'interaction avec les lecteurs.",
    architecture: [
      { layer: "Front-end", stack: "Next.js, React, Tailwind CSS" },
      { layer: "Back-end", stack: "Strapi (CMS headless)" },
      { layer: "Médias", stack: "Cloudinary (images)" },
      { layer: "Données", stack: "API REST, Axios, Cron jobs" },
      { layer: "Hébergement", stack: "Vercel (front), Render (back)" },
    ],
    features: [
      "Hébergement direct des traductions",
      "Espace traducteur dédié",
      "Publication et organisation de chapitres",
      "Outils collaboratifs",
      "Interaction lecteurs / traducteurs",
      "Gestion de contenu via Strapi",
    ],
    timeline: [
      { date: "2025", event: "Développement et design du MVP" },
      { date: "2025", event: "Premiers traducteurs en beta" },
    ],
  },
];

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
