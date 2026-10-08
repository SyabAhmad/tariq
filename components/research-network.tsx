import type { research as researchData } from "@/content/research";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function ResearchNetwork({ data }: { data: typeof researchData.network }) {
  return (
    <Section id="network" tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>Research Network</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {data.heading}
        </h2>
      </div>
      <ul className="mt-12 flex flex-wrap gap-3">
        {data.countries.map((country) => (
          <li
            key={country}
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft"
          >
            {country}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl leading-relaxed text-ink-soft">{data.body}</p>
      <div className="mt-6">
        <SourceNote source={data.source} />
      </div>
      <div className="mt-12">
        <ActionLink href="/contact" variant="secondary">
          Discuss a Research Idea
        </ActionLink>
      </div>
    </Section>
  );
}
