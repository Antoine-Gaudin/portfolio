import { useEffect, useState } from "react";
import { TERMINAL_LINES } from "../data/profile";

/**
 * Animated terminal block showing tech commands.
 * Lines appear sequentially to create a typing-in-terminal effect.
 */
export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;

    const delay = TERMINAL_LINES[visibleLines]?.type === "command" ? 800 : 400;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="glass rounded-xl overflow-hidden font-mono text-sm w-full max-w-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-gray-500">terminal — zsh</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 space-y-1.5 min-h-[180px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            {line.type === "command" ? (
              <>
                <span className="text-green-400 shrink-0">$</span>
                <span className="text-gray-300">{line.text}</span>
              </>
            ) : (
              <span className="text-gray-500 pl-4">{line.text}</span>
            )}
          </div>
        ))}

        {visibleLines < TERMINAL_LINES.length && (
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span className="typing-cursor text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
}
