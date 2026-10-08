import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedEngagement() {
  const { engagement } = entrepreneurship;
  return (
    <Section tone="cream">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{engagement.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {engagement.heading}
        </h2>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood">
          {engagement.meta}
        </p>
        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-ink-soft">{engagement.body}</p>
        <div className="mt-10 flex justify-center">
          <ActionLink href={engagement.cta.href} variant="secondary">
            {engagement.cta.label}
          </ActionLink>
        </div>
      </div>
    </Section>
  );
}
