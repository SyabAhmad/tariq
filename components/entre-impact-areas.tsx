import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function ImpactAreas() {
  const { impactAreas } = entrepreneurship;
  return (
    <Section tone="ivory">
      <Eyebrow>{impactAreas.eyebrow}</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-2">
        {impactAreas.items.map((area) => (
          <article key={area.label} className="group bg-ivory p-10 transition-colors duration-300 hover:bg-white">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-forest">
              {area.label}
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/65">{area.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
