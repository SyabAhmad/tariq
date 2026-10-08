import { speakingPage } from "@/content/speaking";
import { Eyebrow, Section, SourceNote } from "./section";

export function SpeakingArchive() {
  const { archive } = speakingPage;
  return (
    <Section id="archive" tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>Public Engagement Archive</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {archive.heading}
        </h2>
      </div>
      <ol className="relative mt-16 space-y-12 before:absolute before:bottom-4 before:left-[7px] before:top-2 before:w-px before:bg-charcoal/15">
        {archive.items.map((item) => (
          <li key={item.title} className="relative pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-ivory"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-3">
                <span className="font-display text-2xl font-semibold text-forest">{item.year}</span>
                {item.date && <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold">{item.date}</p>}
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/55">{item.venue}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-charcoal/40">{item.format}</p>
                {item.note && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/50">{item.note}</p>}
                <div className="mt-4">
                  <SourceNote source={item.source} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-12 font-display text-lg italic text-charcoal/40">{archive.moreNote}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/40">{archive.note}</p>
    </Section>
  );
}
