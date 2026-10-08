import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function EntrepreneurialPhilosophy() {
  const { philosophy } = entrepreneurship;
  return (
    <Section id="philosophy" tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {philosophy.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{philosophy.lead}</p>
      </div>
      <ol className="mt-16 space-y-0">
        {philosophy.steps.map((step, index) => (
          <li key={step} className="flex flex-col items-start">
            <div className="flex w-full items-center gap-6 py-6">
              <span className="w-10 shrink-0 font-display text-lg font-semibold text-oxblood">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {step}
              </span>
            </div>
            {index < philosophy.steps.length - 1 && (
              <span aria-hidden="true" className="ml-[18px] text-xl text-oxblood">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-14 max-w-2xl border-l-2 border-oxblood pl-6 leading-relaxed text-ink-soft/70">
        {philosophy.note}
      </p>
    </Section>
  );
}
