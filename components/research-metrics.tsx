import type { research as researchData } from "@/content/research";
import { Eyebrow, Section } from "./section";

export function ResearchMetrics({ data }: { data: typeof researchData.metrics }) {
  return (
    <Section tone="white" className="border-b border-charcoal/10">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <dl className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {data.items.map((item) => (
          <div key={item.label} className={item.wide ? "col-span-2 md:col-span-1" : ""}>
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span
                className={`block font-display font-semibold text-forest ${
                  item.wide ? "text-2xl italic md:text-3xl" : "text-4xl md:text-5xl"
                }`}
              >
                {item.value}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-charcoal/50">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal/45">{data.note}</p>
    </Section>
  );
}
