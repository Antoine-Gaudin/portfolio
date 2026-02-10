import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PROJECTS } from "../data/projects";
import Section from "../components/ui/Section";
import Badge from "../components/ui/Badge";

function ProjectCard({ project, delay, index }) {
  const statusColor = project.status === "En production" ? "green" : "blue";
  const isEven = index % 2 === 0;

  return (
    <Section delay={delay} className="col-span-full">
      <Link
        to={`/projects/${project.slug}`}
        className={`group flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } glass rounded-2xl overflow-hidden hover:border-brand/20 transition-all glow-hover`}
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/60 to-transparent md:bg-none" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Badge color={statusColor}>{project.status}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <Calendar size={11} />
              {project.year}
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={20}
              className="text-brand opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 shrink-0"
            />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
            {project.description.split("\n")[0]}
          </p>

          {/* Architecture preview */}
          <div className="flex flex-wrap gap-1.5">
            {project.architecture?.slice(0, 5).map((layer) => (
              <span
                key={layer.layer}
                className="text-xs text-gray-500 bg-white/5 border border-white/5 rounded-lg px-2.5 py-1"
              >
                {layer.layer}: <span className="text-gray-400">{layer.stack.split(",")[0]}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Section>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-white mb-2">Projets</h1>
        <p className="text-gray-400 mb-10">
          Des plateformes web conçues avec passion, de l'idée au déploiement.
        </p>
      </Section>

      <div className="grid gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}
