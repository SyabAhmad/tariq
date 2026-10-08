import { Eyebrow, Section } from "./section";

/**
 * Interim placeholder for pages whose content is saved but design is pending.
 * Replaced as each page is designed.
 */
export function PagePlaceholder({ title, blurb }: { title: string; blurb: string }) {
  return (
    <Section tone="paper">
      <div className="py-16 md:py-24">
        <Eyebrow>Coming Soon</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/65">{blurb}</p>
      </div>
    </Section>
  );
}
