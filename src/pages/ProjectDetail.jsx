import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Layers, List, Clock,
  Server, Monitor, Image, Database, Globe,
} from "lucide-react";
import { getProjectBySlug, PROJECTS } from "../data/projects";
import Section from "../components/ui/Section";
import Badge from "../components/ui/Badge";
import Tabs from "../components/ui/Tabs";

const LAYER_ICONS = {
  "Front-end": Monitor,
  "Back-end": Server,
  "Médias": Image,
  "Données": Database,
  "Hébergement": Globe,
};

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <span className="text-6xl font-extrabold gradient-text">404</span>
      <h1 className="mt-4 text-xl font-semibold text-white">Projet introuvable</h1>
      <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-brand hover:underline">
        <ArrowLeft size={16} /> Retour aux projets
      </Link>
    </div>
  );
}

function OverviewTab({ project }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-400 whitespace-pre-line leading-relaxed">{project.description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-xl p-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Liens</h4>
          <a href={project.website} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-brand transition-colors">
            <ExternalLink size={14} className="text-brand" /> Site web
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-brand transition-colors">
            <Github size={14} className="text-brand" /> Code source
          </a>
        </div>
        <div className="glass rounded-xl p-4 space-y-2">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Infos</h4>
          <div className="text-sm"><span className="text-gray-500">Type :</span> <span className="text-gray-300">{project.type}</span></div>
          <div className="text-sm"><span className="text-gray-500">Hébergement :</span> <span className="text-gray-300">{project.hosting}</span></div>
          <div className="text-sm"><span className="text-gray-500">Lancé en :</span> <span className="text-gray-300">{project.year}</span></div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureTab({ project }) {
  if (!project.architecture?.length) return null;

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 mb-6">Architecture technique du projet, couche par couche.</p>
      <div className="space-y-3">
        {project.architecture.map((layer, i) => {
          const Icon = LAYER_ICONS[layer.layer] || Layers;
          return (
            <div key={layer.layer} className="flex items-stretch gap-3">
              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                  <Icon size={18} className="text-brand" />
                </div>
                {i < project.architecture.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="glass rounded-lg p-4 flex-1 hover:border-brand/15 transition-all">
                <p className="text-sm font-semibold text-white">{layer.layer}</p>
                <p className="text-xs text-gray-400 mt-1">{layer.stack}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeaturesTab({ project }) {
  if (!project.features?.length) return null;

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 mb-6">Fonctionnalités clés implémentées.</p>
      {project.features.map((feat, i) => (
        <div key={i} className="flex items-start gap-3 glass rounded-lg p-3.5 hover:border-brand/15 transition-all">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-bold mt-0.5">
            {i + 1}
          </span>
          <span className="text-sm text-gray-300">{feat}</span>
        </div>
      ))}
    </div>
  );
}

function TimelineTab({ project }) {
  if (!project.timeline?.length) return null;

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 mb-6">Évolution du projet dans le temps.</p>
      {project.timeline.map((entry, i) => (
        <div key={i} className="relative pl-8">
          {i < project.timeline.length - 1 && (
            <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10" />
          )}
          <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-surface bg-brand flex items-center justify-center">
            <Clock size={10} className="text-black" />
          </div>
          <div className="glass rounded-lg p-4 hover:border-brand/15 transition-all">
            <span className="text-xs font-semibold text-brand">{entry.date}</span>
            <p className="text-sm text-gray-300 mt-1">{entry.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return <ProjectNotFound />;

  const statusColor = project.status === "En production" ? "green" : "blue";

  const TAB_LIST = [
    { id: "overview", label: "Présentation", icon: <Layers size={14} /> },
    { id: "architecture", label: "Architecture", icon: <Server size={14} /> },
    { id: "features", label: "Fonctionnalités", icon: <List size={14} /> },
    { id: "timeline", label: "Timeline", icon: <Clock size={14} /> },
  ];

  const TAB_CONTENT = {
    overview: <OverviewTab project={project} />,
    architecture: <ArchitectureTab project={project} />,
    features: <FeaturesTab project={project} />,
    timeline: <TimelineTab project={project} />,
  };

  // Other projects
  const otherProjects = PROJECTS.filter((p) => p.slug !== slug);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors mb-6">
        <ArrowLeft size={14} /> Tous les projets
      </Link>

      {/* Hero */}
      <Section>
        <div className="relative rounded-2xl overflow-hidden">
          <img src={project.image} alt={project.title} className="h-52 w-full object-cover sm:h-72" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">{project.title}</h1>
            <div className="flex items-center gap-3 mt-3">
              <Badge color={statusColor}>{project.status}</Badge>
              <span className="text-xs text-gray-400">{project.year}</span>
              <span className="text-xs text-gray-600">·</span>
              <span className="text-xs text-gray-400">{project.type}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Tabs */}
      <Section delay={100}>
        <div className="mt-8">
          <Tabs tabs={TAB_LIST} activeTab={activeTab} onChange={setActiveTab} />
          <div className="mt-6">{TAB_CONTENT[activeTab]}</div>
        </div>
      </Section>

      {/* Other projects suggestion */}
      {otherProjects.length > 0 && (
        <Section delay={200} className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">Autres projets</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                onClick={() => setActiveTab("overview")}
                className="glass rounded-xl overflow-hidden group hover:border-brand/20 transition-all glow-hover"
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-semibold text-white text-sm">{p.title}</p>
                    <p className="text-xs text-gray-400">{p.status}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
