import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function ImpactModel() {
  const { impactModel } = entrepreneurship;

  return (
    <Section tone="ivory">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Impact Model</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {impactModel.heading}
        </h2>

        <div className="mt-16 flex flex-col items-center">
          <span className="rounded-full border-2 border-forest px-8 py-3 font-display text-lg font-semibold uppercase tracking-[0.16em] text-forest">
            {impactModel.root}
          </span>
          <span aria-hidden="true" className="h-10 w-px bg-gold" />

          <div className="relative grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            <span
              aria-hidden="true"
              className="absolute -top-0 left-[16%] right-[16%] hidden h-px bg-gold md:block"
            />
            {impactModel.branches.map((branch) => (
              <div key={branch.label} className="flex flex-col items-center">
                <span aria-hidden="true" className="hidden h-8 w-px bg-gold md:block" />
                <span className="rounded-full border border-charcoal/20 bg-white px-6 py-3 font-display text-lg font-semibold text-forest">
                  {branch.label}
                </span>
                <span aria-hidden="true" className="h-8 w-px bg-charcoal/20" />
                <span className="font-display text-xl italic text-gold">{branch.outcome}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <span
              aria-hidden="true"
              className="h-10 w-px bg-charcoal/20 md:h-8"
            />
            <span className="rounded-full bg-forest px-8 py-3.5 font-display text-base font-semibold uppercase tracking-[0.16em] text-ivory">
              {impactModel.result}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-charcoal/10 bg-white p-9">
          <h3 className="font-display text-lg font-semibold text-forest">
            {impactModel.idea.heading}
          </h3>
          <p className="mt-3 leading-relaxed text-charcoal/65">{impactModel.idea.body}</p>
          <p className="mt-4 font-display text-lg italic text-gold">
            {impactModel.idea.values.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
