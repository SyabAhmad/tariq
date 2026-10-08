import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function SustainableEntrepreneurship() {
  const { sustainable } = entrepreneurship;
  return (
    <Section tone="cream">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{sustainable.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {sustainable.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">{sustainable.lead}</p>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <dl className="divide-y divide-hairline border-y border-hairline">
            {sustainable.items.map((item) => (
              <div key={item.title} className="group grid gap-2 py-6 md:grid-cols-3">
                <dt className="font-display text-lg font-semibold text-ink">{item.title}</dt>
                <dd className="text-sm leading-relaxed text-ink-soft md:col-span-2">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
