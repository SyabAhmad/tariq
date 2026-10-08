import type { research as researchData } from "@/content/research";
import { Eyebrow, Section, SourceNote } from "./section";

export function ResearchThemes({ data }: { data: typeof researchData.themes }) {
  return (
    <Section tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {data.heading}
        </h2>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((theme) => (
          <article key={theme.title} className="group flex flex-col bg-paper p-9">
            <span aria-hidden="true" className="mb-7 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
            <h3 className="font-display text-xl font-semibold text-ink">{theme.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{theme.body}</p>
            {theme.note && <p className="mt-4 text-sm leading-relaxed text-ink-soft/70">{theme.note}</p>}
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
