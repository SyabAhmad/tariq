import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedSpeaking() {
  const { featured } = speakingPage;
  return (
    <Section tone="ivory">
      <Eyebrow>{featured.eyebrow}</Eyebrow>
      <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{featured.date}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-5xl">
            {featured.heading}
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-charcoal/50">{featured.meta}</p>
          {featured.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-6 max-w-2xl leading-relaxed text-charcoal/70">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ActionLink href={featured.cta.href} external>
              {featured.cta.label}
            </ActionLink>
          </div>
        </div>
        <div className="md:col-span-5">
          {/* Editorial image slot — awaiting the archival event photograph */}
          <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-dashed border-gold/50 bg-white/60 p-8 text-center">
            <span className="text-3xl" aria-hidden="true">
              🎙️
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-forest">Event photograph</p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/50">
              One strong archival image from the 17 January 2022 seminar will anchor this space.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
