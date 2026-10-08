import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function SustainableEntrepreneurship() {
  const { sustainable } = entrepreneurship;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{sustainable.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {sustainable.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-charcoal/65">{sustainable.lead}</p>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <dl className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {sustainable.items.map((item) => (
              <div key={item.title} className="group grid gap-2 py-6 md:grid-cols-3">
                <dt className="font-display text-lg font-semibold text-forest">{item.title}</dt>
                <dd className="text-sm leading-relaxed text-charcoal/65 md:col-span-2">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
