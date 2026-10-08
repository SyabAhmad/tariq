import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function EntrepreneurialPhilosophy() {
  const { philosophy } = entrepreneurship;
  return (
    <Section id="philosophy" tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {philosophy.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/65">{philosophy.lead}</p>
      </div>
      <ol className="mt-16 space-y-0">
        {philosophy.steps.map((step, index) => (
          <li key={step} className="flex flex-col items-start">
            <div className="flex w-full items-center gap-6 py-6">
              <span className="w-10 shrink-0 font-display text-lg font-semibold text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl font-semibold text-forest md:text-3xl">
                {step}
              </span>
            </div>
            {index < philosophy.steps.length - 1 && (
              <span aria-hidden="true" className="ml-[18px] text-xl text-gold">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-14 max-w-2xl border-l-2 border-gold pl-6 leading-relaxed text-charcoal/60">
        {philosophy.note}
      </p>
    </Section>
  );
}
