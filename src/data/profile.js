import photo from "../assets/PP noir et blanc.jpg";
import cvGeneral from "../assets/CV general.pdf";
import cvDev from "../assets/CV de dev.pdf";

export const PROFILE = {
  name: "Antoine Gaudin",
  title: "Vibe Coder · Data & IA · Automatisation",
  subtitle: "Stagiaire chez Elevate | Conseil Data, IA & Agentique",
  photo,
  cvGeneral,
  cvDev,
  bio: "Passionné de développement web et des langages qui le composent, j'ai intégré le vibe coding à ma pratique pour recentrer mon travail sur ce qui compte : les bonnes pratiques, la logique métier et la structure des projets. L'IA ne remplace pas le développeur, elle amplifie sa rigueur. Mon parcours en développement, commerce et entrepreneuriat me permet d'allier vision technique et sens du produit.",
  email: "agaudin76@gmail.com",
  phone: { display: "06.39.90.28.10", link: "+33639902810" },
  github: "https://github.com/Antoine-Gaudin",
  linkedin: "https://www.linkedin.com/in/antoine-gaudin-298240150/",
  location: "Paris, France",
};

export const HIGHLIGHTS = [
  { label: "Stage actuel", value: "Elevate — Data & IA", icon: "briefcase" },
  { label: "Approche", value: "Vibe Coding · Rigueur & IA", icon: "sparkles" },
  { label: "Projets actifs", value: "2 plateformes web", icon: "rocket" },
  { label: "Formation", value: "CEPPIC (en cours)", icon: "graduation-cap" },
];

export const TERMINAL_LINES = [
  { type: "command", text: "claude --model opus 'build modern portfolio'" },
  { type: "output", text: "→ Analyzing codebase... ✓" },
  { type: "output", text: "→ Generating components... ✓" },
  { type: "command", text: "n8n execute --workflow data-pipeline" },
  { type: "output", text: "→ Automation deployed ✓" },
  { type: "command", text: "supabase db push" },
  { type: "output", text: "→ Database synced ✓" },
];
