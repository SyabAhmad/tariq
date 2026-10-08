import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedEngagement() {
  const { engagement } = entrepreneurship;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{engagement.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {engagement.heading}
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">{engagement.meta}</p>
        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-charcoal/65">{engagement.body}</p>
        <div className="mt-10 flex justify-center">
          <ActionLink href={engagement.cta.href} variant="secondary">
            {engagement.cta.label}
          </ActionLink>
        </div>
      </div>
    </Section>
  );
}
