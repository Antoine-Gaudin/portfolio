import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Wrapper that fades in its children when scrolled into view.
 * Accepts an optional delay for staggered animations.
 */
export default function Section({ children, className = "", id, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
