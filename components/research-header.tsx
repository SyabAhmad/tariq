import type { research as researchData } from "@/content/research";
import { ActionLink, Eyebrow } from "./section";

export function ResearchHeader({ data }: { data: typeof researchData.header }) {
  const [before, after] = data.body.split(data.emphasis);
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
          {data.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {before}
          <strong className="font-semibold text-ink">{data.emphasis}</strong>
          {after}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ActionLink href={data.cta.href}>{data.cta.label}</ActionLink>
          <a
            href={data.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-ink-soft underline decoration-ink/15 underline-offset-4 transition-colors hover:text-oxblood"
          >
            Source: {data.source.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
