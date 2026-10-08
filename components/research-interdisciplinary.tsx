import type { research as researchData } from "@/content/research";
import { Eyebrow, Section, SourceNote } from "./section";

export function ResearchInterdisciplinary({ data }: { data: typeof researchData.interdisciplinary }) {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{data.heading}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            Entrepreneurship, society, institutions and sustainability.
          </h2>
        </div>
        <div className="space-y-6 md:col-span-7 md:pt-14">
          <p className="leading-relaxed text-ink-soft">{data.body}</p>
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-ink-soft/80">
              {paragraph}
            </p>
          ))}
          <div className="space-y-3">
            {data.sources.map((source) => (
              <SourceNote key={source.href} source={source} />
            ))}
          </div>
          <p className="border-l-2 border-oxblood pl-6 pt-2 font-display text-xl italic leading-snug text-ink">
            {data.statement}
          </p>
        </div>
      </div>
    </Section>
  );
}
