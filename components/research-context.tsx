import type { research as researchData } from "@/content/research";
import { Eyebrow, Section } from "./section";

export function ResearchContext({ data }: { data: typeof researchData.context }) {
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
        {data.heading}
      </h2>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-3">
        {data.panels.map((panel) => (
          <article key={panel.label} className="flex flex-col bg-ivory p-9">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{panel.label}</p>
            <p className="mt-5 font-display text-xl font-semibold text-forest">{panel.items.join(" · ")}</p>
            <p className="mt-5 leading-relaxed text-sm text-charcoal/65">{panel.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
