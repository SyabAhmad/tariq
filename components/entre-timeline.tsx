import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function ResearchToImpactTimeline() {
  const { timeline } = entrepreneurship;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>From Research to Impact</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {timeline.heading}
        </h2>
      </div>
      <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        {timeline.steps.map((step, index) => (
          <li key={step.index} className="relative">
            <span className="font-display text-4xl font-semibold text-gold md:text-5xl">
              {step.index}
            </span>
            <span aria-hidden="true" className="mt-4 block h-px w-full bg-charcoal/15" />
            <h3 className="mt-5 font-display text-xl font-semibold text-forest">{step.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">{step.body}</p>
            {index < timeline.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-3 hidden text-gold md:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
