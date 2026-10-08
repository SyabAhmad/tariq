import type { research as researchData } from "@/content/research";
import { Eyebrow, Section } from "./section";

export function ResearchPhilosophy({ data }: { data: typeof researchData.philosophy }) {
  const [before, after] = data.body.split(data.emphasis);
  return (
    <Section tone="ink">
      <div className="max-w-4xl">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-paper md:text-5xl">
          {data.heading}
        </h2>
        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-paper/70">
          {before}
          <span className="font-medium text-paper">{data.emphasis}</span>
          {after}
        </p>
        <ol className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-5">
          {data.chain.map((step, index) => (
            <li key={step} className="flex items-center gap-5">
              <span className="font-display text-3xl font-semibold text-paper md:text-4xl">
                {step}
              </span>
              {index < data.chain.length - 1 && (
                <span aria-hidden="true" className="text-2xl text-oxblood-soft">
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
