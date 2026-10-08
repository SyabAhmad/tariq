import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow, Section } from "./section";

export function EntrepreneurialCapacity() {
  const { capacity } = entrepreneurship;
  return (
    <Section tone="ink">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{capacity.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-paper md:text-4xl">
            {capacity.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-paper/70">{capacity.body}</p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood-soft">
            {capacity.meta}
          </p>
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
