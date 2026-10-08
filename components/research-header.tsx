import type { research as researchData } from "@/content/research";
import { ActionLink, Eyebrow } from "./section";

export function ResearchHeader({ data }: { data: typeof researchData.header }) {
  const [before, after] = data.body.split(data.emphasis);
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 hidden h-[480px] w-[480px] rounded-full border border-gold/20 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {data.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">
          {before}
          <strong className="font-semibold text-forest">{data.emphasis}</strong>
          {after}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ActionLink href={data.cta.href}>{data.cta.label}</ActionLink>
          <a
            href={data.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs opacity-60 underline decoration-current/30 underline-offset-4 transition-opacity hover:opacity-100 hover:text-gold"
          >
            Source: {data.source.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
