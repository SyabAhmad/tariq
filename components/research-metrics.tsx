import type { research as researchData } from "@/content/research";
import { Eyebrow, Section } from "./section";

export function ResearchMetrics({ data }: { data: typeof researchData.metrics }) {
  return (
    <Section tone="cream">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <dl className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
        {data.items.map((item) => (
          <div key={item.label} className={item.wide ? "col-span-2 lg:col-span-1" : ""}>
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span
                className={`block border-t border-hairline pt-6 font-display font-semibold text-ink ${
                  item.wide ? "text-4xl italic md:text-5xl" : "text-7xl md:text-8xl lg:text-9xl"
                }`}
              >
                {item.value}
              </span>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-soft/60">{data.note}</p>
    </Section>
  );
}
