import { latestResearch } from "@/content/site";
import { ActionLink, Eyebrow } from "./section";

export function LatestResearch() {
  return (
    <section className="border-y border-hairline bg-ink px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <Eyebrow>{latestResearch.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug text-paper md:text-3xl">
              {latestResearch.title}
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-oxblood-soft">
              {latestResearch.year} · <span className="italic">{latestResearch.venue}</span>
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-paper/60">
              {latestResearch.summary}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <ActionLink href={latestResearch.href} variant="onDark" external>
              Read Publication
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
