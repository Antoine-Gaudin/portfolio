import novelImg from "../assets/novelindex.webp";
import tradImg from "../assets/tradindex.webp";
import kanveoImg from "../assets/kanveo.png";

export const PROJECTS = [
  {
    slug: "kanveo",
    title: "Kanveo",
    image: kanveoImg,
    website: "https://kanveo.fr/",
    github: "https://github.com/Antoine-Gaudin/kanveo",
    hosting: "Vercel",
    type: "Projet personnel",
    status: "En production",
    year: "2025",
    description:
      "Application web moderne construite avec React, Vite et Supabase. Kanveo propose une interface soignée grâce à Shadcn UI et Tailwind CSS, avec un back-end serverless géré par Supabase pour l'authentification, la base de données et le stockage.",
    architecture: [
      { layer: "Front-end", stack: "React, Vite, Tailwind CSS, Shadcn UI" },
      { layer: "Back-end", stack: "Supabase (BaaS)" },
      { layer: "Base de données", stack: "PostgreSQL (Supabase)" },
      { layer: "Authentification", stack: "Supabase Auth" },
      { layer: "Hébergement", stack: "Vercel" },
    ],
    features: [
      "Interface moderne avec Shadcn UI",
      "Authentification utilisateur via Supabase",
      "Base de données PostgreSQL temps réel",
      "Design responsive avec Tailwind CSS",
      "Build rapide avec Vite",
    ],
    timeline: [
      { date: "2025", event: "Développement et mise en production" },
    ],
  },
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
