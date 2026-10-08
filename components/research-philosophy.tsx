import type { research as researchData } from "@/content/research";
import { Eyebrow, Section } from "./section";

export function ResearchPhilosophy({ data }: { data: typeof researchData.philosophy }) {
  const [before, after] = data.body.split(data.emphasis);
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div className="relative max-w-4xl">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-ivory md:text-5xl">
          {data.heading}
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ivory/75">
          {before}
          <span className="font-medium text-gold-soft">{data.emphasis}</span>
          {after}
        </p>
        <ol className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-4">
          {data.chain.map((step, index) => (
            <li key={step} className="flex items-center gap-4">
              <span className="font-display text-2xl font-semibold text-ivory md:text-3xl">
                {step}
              </span>
              {index < data.chain.length - 1 && (
                <span aria-hidden="true" className="text-xl text-gold">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
