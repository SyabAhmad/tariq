import { researchAreas } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function ResearchAreas() {
  return (
    <Section id="research" tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>Research Areas</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
          Research grounded in real communities.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          His work brings entrepreneurship research into contexts that are often overlooked by
          conventional business research.
        </p>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <article key={area.title} className="group flex flex-col bg-paper p-9 transition-colors duration-300 hover:bg-white">
            <span aria-hidden="true" className="mb-7 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
            <h3 className="font-display text-xl font-semibold text-ink">{area.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{area.description}</p>
            {area.source && (
              <div className="mt-5">
                <SourceNote source={area.source} />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
