import { Download, ArrowRight, Briefcase, Sparkles, Rocket, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { PROFILE, HIGHLIGHTS } from "../data/profile";
import useTypingEffect from "../hooks/useTypingEffect";
import Section from "../components/ui/Section";
import HeroTerminal from "../components/HeroTerminal";

const ICON_MAP = {
  briefcase: Briefcase,
  sparkles: Sparkles,
  rocket: Rocket,
  "graduation-cap": GraduationCap,
};

const TYPING_TEXTS = [
  "Vibe Coder",
  "Data & IA",
  "Automatisation",
  "Développeur Web",
];

function HeroSection() {
  const typedText = useTypingEffect(TYPING_TEXTS, 80, 1500);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-16">
        {/* Text */}
        <div className="flex-1 mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs text-green-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            En stage chez Elevate — Data, IA & Agentique
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">{PROFILE.name.split(" ")[0]}</span>
            <br />
            <span className="gradient-text">{PROFILE.name.split(" ")[1]}</span>
          </h1>

          <div className="mt-4 h-8">
            <span className="text-xl text-gray-400 font-medium">
              {typedText}
              <span className="typing-cursor" />
            </span>
          </div>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">{PROFILE.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PROFILE.cvGeneral}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              <Download size={18} />
              CV Général
            </a>
            <a
              href={PROFILE.cvDev}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-brand/30 px-5 py-3 font-semibold text-white hover:bg-brand/10 transition"
            >
              <Download size={18} />
              CV Développeur
            </a>
          </div>
        </div>

        {/* Photo + Terminal */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand/60 to-brand/0 blur-sm" />
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full object-cover border-2 border-brand/30"
            />
          </div>
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ label, value, icon, delay }) {
  const Icon = ICON_MAP[icon] || Sparkles;

  return (
    <Section delay={delay}>
      <div className="glass rounded-xl p-5 glow-hover transition-all hover:border-brand/20">
        <Icon size={20} className="text-brand mb-3" />
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-white font-semibold mt-1">{value}</p>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Highlights */}
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={h.label} {...h} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <Section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="glass rounded-2xl p-8 text-center border-brand/10">
          <h2 className="text-2xl font-bold text-white">Envie d'en savoir plus ?</h2>
          <p className="mt-2 text-gray-400">
            Découvrez mon parcours, mes compétences et mes réalisations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/parcours"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Mon Parcours
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/5 transition"
            >
              Mes Projets
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
