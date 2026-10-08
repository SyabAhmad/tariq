import { featuredResearch, profile } from "@/content/site";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedResearch() {
  return (
    <Section id="publications" tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>Featured Work</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          Research that connects entrepreneurship with the real world.
        </h2>
      </div>
      <ul className="mt-16 border-t border-charcoal/10">
        {featuredResearch.map((paper) => (
          <li key={paper.index} className="border-b border-charcoal/10">
            <div className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-white/60 md:grid-cols-12 md:gap-10 md:px-4 md:py-12">
              <div className="md:col-span-2">
                <span className="font-display text-4xl font-semibold text-gold md:text-5xl">
                  {paper.index}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="max-w-3xl font-display text-xl font-semibold leading-snug text-forest md:text-2xl">
                  {paper.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/65">{paper.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="text-sm font-medium text-charcoal/50">
                    {paper.year}
                    <span aria-hidden="true" className="mx-3 text-gold">
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
