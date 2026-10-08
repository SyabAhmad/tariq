import type { research as researchData } from "@/content/research";
import { Eyebrow, Section, SourceNote } from "./section";

export function ResearchThemes({ data }: { data: typeof researchData.themes }) {
  return (
    <Section tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {data.heading}
        </h2>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((theme) => (
          <article key={theme.title} className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white">
            <span aria-hidden="true" className="mb-6 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            <h3 className="font-display text-xl font-semibold text-forest">{theme.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{theme.body}</p>
            {theme.note && <p className="mt-4 text-sm leading-relaxed text-charcoal/50">{theme.note}</p>}
            {theme.source && (
              <div className="mt-4">
                <SourceNote source={theme.source} />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
