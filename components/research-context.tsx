import type { research as researchData } from "@/content/research";
import { Section } from "./section";

export function ResearchContext({ data }: { data: typeof researchData.context }) {
  return (
    <Section tone="cream">
      <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
        {data.heading}
      </h2>
      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {data.panels.map((panel) => (
          <article key={panel.label} className="flex flex-col bg-paper p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood">
              {panel.label}
            </p>
            <p className="mt-6 font-display text-2xl font-semibold text-ink">
              {panel.items.join(" · ")}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">{panel.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
