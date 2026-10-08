import { intro } from "@/content/site";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function Intro() {
  return (
    <Section id="about" tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
            {intro.heading}
          </h2>
        </div>
        <div className="md:col-span-5 md:pt-16">
          <p className="text-lg leading-relaxed text-ink-soft">{intro.body}</p>
          <p className="mt-6 leading-relaxed text-ink-soft/80">{intro.body2}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ActionLink href="/about" variant="secondary">
              Discover His Story
            </ActionLink>
            <SourceNote source={intro.source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
