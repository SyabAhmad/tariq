import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function ImpactModel() {
  const { impactModel } = entrepreneurship;

  return (
    <Section tone="paper">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Impact Model</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {impactModel.heading}
        </h2>

        <div className="mt-16 flex flex-col items-center">
          <span className="rounded-full border-2 border-ink px-8 py-3 font-display text-lg font-semibold uppercase tracking-[0.16em] text-ink">
            {impactModel.root}
          </span>
          <span aria-hidden="true" className="h-10 w-px bg-oxblood" />

          <div className="relative grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            <span
              aria-hidden="true"
              className="absolute -top-0 left-[16%] right-[16%] hidden h-px bg-oxblood md:block"
            />
            {impactModel.branches.map((branch) => (
              <div key={branch.label} className="flex flex-col items-center">
                <span aria-hidden="true" className="hidden h-8 w-px bg-oxblood md:block" />
                <span className="rounded-full border border-ink/20 bg-white px-6 py-3 font-display text-lg font-semibold text-ink">
                  {branch.label}
                </span>
                <span aria-hidden="true" className="h-8 w-px bg-ink/15" />
                <span className="font-display text-xl italic text-oxblood">{branch.outcome}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <span aria-hidden="true" className="h-10 w-px bg-ink/15 md:h-8" />
            <span className="rounded-full bg-ink px-8 py-3.5 font-display text-base font-semibold uppercase tracking-[0.16em] text-paper">
              {impactModel.result}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border border-hairline bg-white p-9">
          <h3 className="font-display text-lg font-semibold text-ink">
            {impactModel.idea.heading}
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{impactModel.idea.body}</p>
          <p className="mt-4 font-display text-lg italic text-oxblood">
            {impactModel.idea.values.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
