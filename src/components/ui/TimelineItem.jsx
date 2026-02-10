import Badge from "./Badge";

/**
 * Single timeline entry for the Parcours page.
 * Displays experience details with a connecting vertical line.
 */

const TYPE_BADGE_COLOR = {
  stage: "brand",
  formation: "blue",
  projet: "green",
  experience: "purple",
};

const TYPE_DOT_COLOR = {
  stage: "bg-brand",
  formation: "bg-blue-500",
  projet: "bg-green-500",
  experience: "bg-purple-500",
};

export default function TimelineItem({ experience, isLast }) {
  const badgeColor = TYPE_BADGE_COLOR[experience.type] || "brand";
  const dotColor = TYPE_DOT_COLOR[experience.type] || "bg-brand";

  return (
    <div className="relative pl-8 pb-8 group">
      {/* Vertical connector */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10 group-hover:bg-brand/30 transition-colors" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-surface ${dotColor} ${
          experience.current ? "ring-2 ring-brand/40 animate-pulse" : ""
        }`}
      />

      {/* Card */}
      <div className="glass rounded-xl p-5 hover:border-brand/20 transition-all glow-hover">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-medium text-brand">{experience.period}</span>
          {experience.current && (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Actuel
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
        <p className="text-sm text-brand/80 font-medium mt-0.5">{experience.company}</p>

        {experience.location && (
          <p className="text-xs text-gray-500 mt-1">{experience.location}</p>
        )}

        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          {experience.description}
        </p>

        {experience.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.tags.map((tag) => (
              <Badge key={tag} color={badgeColor}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
