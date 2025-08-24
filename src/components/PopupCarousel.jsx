// src/components/PopupCarousel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Popup from "./Popup";
import SkillDetail from "./SkillDetail";

export default function PopupCarousel({
  open,
  onClose,
  items,
  startIndex = 0,
}) {
  const [index, setIndex] = useState(startIndex);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // réinit index à l’ouverture
  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  // scroll vers la diapo active
  useEffect(() => {
    if (!open) return;
    const el = itemRefs.current[index];
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }, [open, index]);

  // maj index quand on scrolle (trackpad/roulette)
  useEffect(() => {
    if (!open) return;
    const cont = containerRef.current;
    if (!cont) return;
    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cRect = cont.getBoundingClientRect();
        const centerX = cRect.left + cRect.width / 2;
        let best = 0,
          bestDist = Infinity;
        itemRefs.current.forEach((node, i) => {
          if (!node) return;
          const r = node.getBoundingClientRect();
          const mid = r.left + r.width / 2;
          const d = Math.abs(mid - centerX);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setIndex(best);
      });
    };
    cont.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cont.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [open]);

  // --- Drag à la souris (appui long / glisser) ---
  useEffect(() => {
    if (!open) return;
    const cont = containerRef.current;
    if (!cont) return;

    let isDown = false;
    let startX = 0;
    let startLeft = 0;
    let startTime = 0;

    const onDown = (e) => {
      isDown = true;
      cont.setPointerCapture?.(e.pointerId);
      startX = e.clientX;
      startLeft = cont.scrollLeft;
      startTime = Date.now();
      cont.classList.add("dragging");
    };
    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      cont.scrollLeft = startLeft - dx;
    };
    const onUp = (e) => {
      if (!isDown) return;
      isDown = false;
      cont.releasePointerCapture?.(e.pointerId);
      cont.classList.remove("dragging");

      // petit snap manuel si geste franc
      const dt = Date.now() - startTime;
      const dx = e.clientX - startX;
      const threshold = 80; // px
      if (Math.abs(dx) > threshold && dt > 150) {
        if (dx < 0 && index < items.length - 1) setIndex((i) => i + 1);
        if (dx > 0 && index > 0) setIndex((i) => i - 1);
      } else {
        // sinon on recentre sur la plus proche
        const el = itemRefs.current[index];
        el?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    };

    cont.addEventListener("pointerdown", onDown);
    cont.addEventListener("pointermove", onMove);
    cont.addEventListener("pointerup", onUp);
    cont.addEventListener("pointercancel", onUp);
    return () => {
      cont.removeEventListener("pointerdown", onDown);
      cont.removeEventListener("pointermove", onMove);
      cont.removeEventListener("pointerup", onUp);
      cont.removeEventListener("pointercancel", onUp);
    };
  }, [open, index, items.length]);

  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;
  const prev = () => hasPrev && setIndex((i) => i - 1);
  const next = () => hasNext && setIndex((i) => i + 1);
  const title = useMemo(() => items[index]?.title ?? "", [items, index]);

  return (
    <Popup
      open={open}
      onClose={onClose}
      title={title}
      bare
      containerClassName="p-0"
    >
<button
  type="button"
  onClick={onClose}
  className="absolute right-4 top-4 z-[60] rounded-full bg-[#F3C53E] text-black px-3 py-1.5 shadow hover:brightness-95 cursor-pointer"
  aria-label="Fermer"
>
  × <span className="ml-1">Fermer</span>
</button>


      {/* Carrousel plein écran */}
      <div className="relative w-screen select-none">
        <div
          ref={containerRef}
          className="flex w-screen snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4 px-4 md:px-8 py-6
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing
                     [touch-action:pan-y]"
          style={{ scrollPadding: "0 24px" }}
        >
          {items.map((it, i) => {
            const active = i === index;
            return (
              <div
                key={it.key ?? i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="snap-center shrink-0 basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%] xl:basis-[40%] max-w-[720px]"
              >
                <div
                  className={[
                    "rounded-2xl border p-5 md:p-6 transition-all duration-200 bg-white",
                    "border-brand/30",
                    active
                      ? "scale-100 opacity-100 ring-2 ring-brand shadow-xl"
                      : "scale-95 opacity-80",
                  ].join(" ")}
                >
                  <SkillDetail data={it.data} img={it.img} title={it.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Flèches */}
        <button
          type="button"
          onClick={prev}
          disabled={!hasPrev}
          className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-[#F3C53E] px-4 py-2 shadow
                     hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Précédent"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!hasNext}
          className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-[#F3C53E] px-4 py-2 shadow
                     hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Suivant"
        >
          ›
        </button>
      </div>
    </Popup>
  );
}
