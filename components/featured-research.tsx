import { featuredResearch, profile } from "@/content/site";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedResearch() {
  return (
    <Section id="publications" tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
          Research that connects entrepreneurship with the real world.
        </h2>
      </div>
      <ul className="mt-16 border-t border-hairline">
        {featuredResearch.map((paper) => (
          <li key={paper.index} className="border-b border-hairline">
            <div className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-white/50 md:grid-cols-12 md:gap-10 md:px-4 md:py-12">
              <div className="md:col-span-2">
                <span className="font-display text-5xl font-semibold text-oxblood md:text-6xl">
                  {paper.index}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="max-w-3xl font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                  {paper.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{paper.summary}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
                    {paper.year}
                    <span aria-hidden="true" className="mx-3 text-oxblood">
                      ·
                    </span>
                    {paper.tags.join(" · ")}
                  </span>
                  <ActionLink href={paper.href} variant="secondary" external className="px-5 py-2.5">
                    Read Research
                  </ActionLink>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <ActionLink href={profile.links.researchgate} variant="secondary" external>
          Full Publication List on ResearchGate
        </ActionLink>
      </div>
    </Section>
  );
}
