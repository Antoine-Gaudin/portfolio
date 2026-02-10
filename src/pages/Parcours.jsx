import Section from "../components/ui/Section";
import TimelineItem from "../components/ui/TimelineItem";
import { EXPERIENCES } from "../data/experiences";

export default function Parcours() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-white mb-2">Mon Parcours</h1>
        <p className="text-gray-400 mb-10">
          Expériences professionnelles, formations et projets.
        </p>
      </Section>

      <div className="mt-6">
        {EXPERIENCES.map((exp, i) => (
          <Section key={exp.id} delay={i * 100}>
            <TimelineItem
              experience={exp}
              isLast={i === EXPERIENCES.length - 1}
            />
          </Section>
        ))}
      </div>
    </div>
  );
}
