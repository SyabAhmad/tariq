import { speaking } from "@/content/site";
import { Eyebrow, Section } from "./section";

export function Speaking() {
  return (
    <Section id="speaking" tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>{speaking.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
          {speaking.heading}
        </h2>
      </div>
      <ul className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {speaking.items.map((item) => (
          <li key={item.title} className="flex flex-col bg-paper p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
              {item.date}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.context}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 self-start text-xs text-ink-soft underline decoration-ink/15 underline-offset-4 transition-colors hover:text-oxblood"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-ink-soft/60">{speaking.note}</p>
    </Section>
  );
}
