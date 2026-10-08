import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow, Section } from "./section";

export function EntrepreneurialCapacity() {
  const { capacity } = entrepreneurship;
  return (
    <Section tone="forest">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{capacity.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-ivory md:text-4xl">
            {capacity.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-ivory/75">{capacity.body}</p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-gold-soft">{capacity.meta}</p>
          <div className="mt-10">
            <ActionLink href={capacity.cta.href} variant="onDark">
              {capacity.cta.label}
            </ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
