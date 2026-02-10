/**
 * Reusable badge/tag component with color variants.
 * Used for skill tags, status indicators, etc.
 */
const COLOR_MAP = {
  brand: "bg-brand/20 text-brand border-brand/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

export default function Badge({ children, color = "brand", className = "" }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
        COLOR_MAP[color] || COLOR_MAP.brand
      } ${className}`}
    >
      {children}
    </span>
  );
}
