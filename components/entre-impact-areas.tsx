import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function ImpactAreas() {
  const { impactAreas } = entrepreneurship;
  return (
    <Section tone="paper">
      <Eyebrow>{impactAreas.eyebrow}</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
        {impactAreas.items.map((area) => (
          <article key={area.label} className="group bg-paper p-10 transition-colors duration-300 hover:bg-white">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-ink">
              {area.label}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">{area.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
