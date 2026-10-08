import { philosophy } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function Philosophy() {
  const [bodyBefore, bodyAfter] = philosophy.body.split(philosophy.emphasis);

  return (
    <Section id="entrepreneurship" tone="ink">
      <div className="max-w-4xl">
        <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-paper md:text-6xl">
          {philosophy.heading}
        </h2>
        <p className="mt-12 font-display text-2xl italic leading-snug text-oxblood-soft md:text-3xl">
          &ldquo;{philosophy.question}&rdquo;
        </p>
        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-paper/70">
          {bodyBefore}
          <span className="font-medium text-paper">{philosophy.emphasis}</span>
          {bodyAfter}
        </p>
        <div className="mt-12">
          <SourceNote source={philosophy.source} />
        </div>
      </div>
    </Section>
  );
}
