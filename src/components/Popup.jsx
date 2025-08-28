// src/components/Popup.jsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Popup({
  open,
  onClose,
  title,
  children,
  showHeader = true,
  panelClassName = "",
  bodyClassName = "",
  containerClassName = "",
  bare = false,           // <-- NOUVEAU
}) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(id2);
      });
      return () => cancelAnimationFrame(id1);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mounted, onClose]);

  if (!mounted) return null;

  const titleId = "popup-title";
  const backdrop = (
    <div
      className={[
        "absolute inset-0 bg-black/50 transition-opacity duration-200 ease-out",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      onClick={onClose}
    />
  );


  
  const content = (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      {backdrop}

      <div className={["absolute inset-0 flex items-center justify-center p-4", containerClassName].join(" ")}>
        {/* Mode BARE : pas de panel blanc, children plein écran, animé */}
        {bare ? (
          <div
            className={[
              "w-full transition-all duration-200 ease-out",
              visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95",
            ].join(" ")}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        ) : (
          <div
            className={[
              "w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-200 ease-out",
              visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95",
              panelClassName,
            ].join(" ")}
            onClick={(e) => e.stopPropagation()}
          >
            {showHeader && (
              <div className="flex items-center justify-between border-b p-4">
                <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
                <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="Fermer">
                  ×
                </button>
              </div>
            )}
            <div className={bodyClassName || "p-6"}>{children}</div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
