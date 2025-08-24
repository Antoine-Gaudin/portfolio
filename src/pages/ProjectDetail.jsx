import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProjectBySlug(slug);

  if (!p) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-bold">Projet introuvable</h1>
        <Link to="/projects" className="mt-4 inline-block text-[#F3C53E] underline">
          ← Retour aux projets
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero image + titre */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={p.image}
          alt={p.title}
          className="h-64 w-full object-cover md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute left-6 bottom-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow">
            {p.title}
          </h1>
          <span className="mt-2 inline-block rounded-full bg-[#F3C53E] px-3 py-1 text-sm font-semibold text-black">
            {p.status}
          </span>
        </div>
      </div>

      {/* Corps */}
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {/* Description */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Présentation</h2>
          <p className="text-gray-800 whitespace-pre-line">{p.description}</p>
        </div>

        {/* Infos clés */}
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-[#F3C53E] bg-white p-5">
            <h3 className="text-lg font-semibold mb-3">Infos clés</h3>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Site :</span>{" "}
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3C53E] underline"
                >
                  {p.website}
                </a>
              </div>
              <div>
                <span className="font-semibold">GitHub :</span>{" "}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3C53E] underline"
                >
                  {p.github}
                </a>
              </div>
              <div>
                <span className="font-semibold">Hébergement :</span>{" "}
                {p.hosting}
              </div>
              <div>
                <span className="font-semibold">Type :</span> {p.type}
              </div>
              <div>
                <span className="font-semibold">Outils :</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#F3C53E] text-black text-xs px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/projects"
            className="mt-4 inline-block text-[#F3C53E] underline"
          >
            ← Retour aux projets
          </Link>
        </aside>
      </div>
    </section>
  );
}
