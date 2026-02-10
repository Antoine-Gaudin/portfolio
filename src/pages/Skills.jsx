import { Sparkles, Code, Database, Wrench, Users, Layout, Zap } from "lucide-react";
import Section from "../components/ui/Section";
import { TECH_STACK } from "../data/skills";

const ICON_MAP = {
  sparkles: Sparkles,
  layout: Layout,
  code: Code,
  database: Database,
  zap: Zap,
  wrench: Wrench,
  users: Users,
};

function SkillTable({ category, delay }) {
  const Icon = ICON_MAP[category.icon] || Sparkles;

  return (
    <Section delay={delay}>
      <div className="glass rounded-xl overflow-hidden hover:border-brand/20 transition-all glow-hover h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-5 pb-4 border-b border-white/5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${category.color}15` }}
          >
            <Icon size={20} style={{ color: category.color }} />
          </div>
          <div>
            <h3 className="font-semibold text-white">{category.title}</h3>
            <p className="text-xs text-gray-500">{category.description}</p>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-5 py-2.5 font-medium">Techno</th>
                <th className="px-5 py-2.5 font-medium hidden sm:table-cell">Type</th>
                <th className="px-5 py-2.5 font-medium">Utilisation</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, i) => (
                <tr
                  key={item.name}
                  className={`border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors ${
                    i === category.items.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 font-medium text-white">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: category.color }}
                      />
                      {item.name}
                    </span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span
                      className="inline-block rounded px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                      }}
                    >
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-400 text-xs leading-relaxed">
                    {item.context}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-white mb-2">Stack & Compétences</h1>
        <p className="text-gray-400 mb-10">
          Les technologies et outils que j'utilise au quotidien, et le contexte dans lequel je les applique.
        </p>
      </Section>

      <div className="grid gap-6 lg:grid-cols-2">
        {TECH_STACK.map((cat, i) => (
          <SkillTable key={cat.id} category={cat} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}
