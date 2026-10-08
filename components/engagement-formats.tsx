import { speakingPage } from "@/content/speaking";
import { Eyebrow, Section } from "./section";

export function EngagementFormats() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Engagement Formats</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {speakingPage.formats.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <ul className="flex flex-wrap gap-3">
            {speakingPage.formats.items.map((format) => (
              <li
                key={format}
                className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft"
              >
                {format}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-soft/50">{speakingPage.formats.note}</p>
        </div>
      </div>
    </Section>
  );
}
