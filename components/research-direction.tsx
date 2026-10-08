import type { research as researchData } from "@/content/research";
import { Eyebrow, Section, SourceNote } from "./section";

export function ResearchDirection({ data }: { data: typeof researchData.direction }) {
  return (
    <Section tone="white" className="border-b border-charcoal/10">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {data.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <ul className="flex flex-wrap gap-3">
            {data.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-forest/25 px-5 py-2.5 font-display text-base font-semibold text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-charcoal/65">{data.body}</p>
          <div className="mt-6">
            <SourceNote source={data.source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
