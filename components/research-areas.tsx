import { researchAreas } from "@/content/site";
import { Eyebrow, Section } from "./section";

export function ResearchAreas() {
  return (
    <Section id="research" tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>Research Areas</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          Research grounded in real communities.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/65">
          His work brings entrepreneurship research into contexts that are often overlooked by
          conventional business research.
        </p>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <article
            key={area.title}
            className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white"
          >
            <span aria-hidden="true" className="mb-6 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            <h3 className="font-display text-xl font-semibold text-forest">{area.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{area.description}</p>
            {area.source && (
              <a
                href={area.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 self-start text-xs text-charcoal/45 underline decoration-charcoal/15 underline-offset-4 transition-colors hover:text-gold"
              >
                {area.source.label}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
