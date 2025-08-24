import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function ProjectCard({ img, title, to }) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white
                 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-[#F3C53E]
                 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F3C53E]"
      aria-label={title}
    >
      <div className="relative aspect-[16/10]">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Bande titre au survol */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          <div className="bg-[#F3C53E] px-4 py-3">
            <span className="font-semibold text-black">{title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Projets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.slug}
            img={p.image}
            title={p.title}
            to={`/projects/${p.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
