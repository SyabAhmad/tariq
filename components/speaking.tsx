import { speaking } from "@/content/site";
import { Eyebrow, Section } from "./section";

export function Speaking() {
  return (
    <Section id="speaking" tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>{speaking.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {speaking.heading}
        </h2>
      </div>
      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-3">
        {speaking.items.map((item) => (
          <li key={item.title} className="flex flex-col bg-ivory p-8">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {item.date}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-forest">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{item.context}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 self-start text-xs text-charcoal/45 underline decoration-charcoal/15 underline-offset-4 transition-colors hover:text-gold"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-charcoal/40">{speaking.note}</p>
    </Section>
  );
}
