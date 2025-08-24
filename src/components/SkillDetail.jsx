// src/components/SkillDetail.jsx
export default function SkillDetail({ data, img, title }) {
  if (!data) return null;

  return (
    <div>
      {/* Header image + titre */}
      <div className="relative h-36 md:h-40 rounded-xl overflow-hidden mb-5">
        {img && (
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h3 className="absolute bottom-2 left-4 text-white text-xl font-semibold drop-shadow">
          {title}
        </h3>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" />
      </div>

     

      {Array.isArray(data.bullets) && data.bullets.length > 0 && (
        <ul className="mt-4 list-disc marker:text-brand space-y-2 pl-5">
          {data.bullets.map((b, i) => (
            <li key={i} className="text-gray-800">
              {b}
            </li>
          ))}
        </ul>
      )}

      {Array.isArray(data.tags) && data.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F3C53E] text-black px-2.5 py-1 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
