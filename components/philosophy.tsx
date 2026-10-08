import { philosophy } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function Philosophy() {
  const [bodyBefore, bodyAfter] = philosophy.body.split(philosophy.emphasis);

  return (
    <Section id="entrepreneurship" tone="forest" className="relative overflow-hidden">
      {/* Decorative oversized glyph */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 font-display text-[26rem] leading-none text-ivory/[0.04] select-none md:text-[34rem]"
      >
        &amp;
      </span>
      <div className="relative max-w-4xl">
        <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-ivory md:text-5xl">
          {philosophy.heading}
        </h2>
        <p className="mt-10 font-display text-2xl italic leading-snug text-gold-soft md:text-3xl">
          &ldquo;{philosophy.question}&rdquo;
        </p>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ivory/75">
          {bodyBefore}
          <span className="font-medium text-gold-soft">{philosophy.emphasis}</span>
          {bodyAfter}
        </p>
        <div className="mt-10">
          <SourceNote source={philosophy.source} />
        </div>
      </div>
    </Section>
  );
}
