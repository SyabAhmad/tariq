import { intro } from "@/content/site";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function Intro() {
  return (
    <Section id="about" tone="ivory">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl lg:text-[2.75rem]">
            {intro.heading}
          </h2>
        </div>
        <div className="md:col-span-5 md:pt-14">
          <p className="text-lg leading-relaxed text-charcoal/75">{intro.body}</p>
          <p className="mt-6 leading-relaxed text-charcoal/65">{intro.body2}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ActionLink href="#perspective" variant="secondary">
              Discover His Story
            </ActionLink>
            <SourceNote source={intro.source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
