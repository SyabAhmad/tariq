import { about } from "@/content/about";
import { ActionLink, Eyebrow, Section } from "./section";

export function AboutSelectedResearch() {
  return (
    <Section id="selected" tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>{about.selected.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {about.selected.heading}
        </h2>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {about.selected.cards.map((card, i) => (
          <article
            key={card.shortTitle}
            className="group flex flex-col rounded-2xl border border-charcoal/10 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-forest/5"
          >
            <span className="font-display text-3xl font-semibold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-forest">{card.shortTitle}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{card.summary}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-charcoal/45">{card.paper.year}</p>
            <ActionLink
              href={card.paper.href}
              variant="secondary"
              external
              className="mt-4 self-start px-5 py-2.5"
            >
              Read Research
            </ActionLink>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <ActionLink href={about.selected.cta.href}>{about.selected.cta.label}</ActionLink>
      </div>
    </Section>
  );
}
