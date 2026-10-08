import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function TeachingPillars() {
  const { teaching } = leadership;
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Teaching & Academic Development</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {teaching.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-ink-soft">{teaching.body}</p>
          <ol className="mt-12 space-y-0">
            {teaching.pillars.map((pillar, index) => (
              <li key={pillar.title} className="flex flex-col">
                <div className="flex items-baseline gap-6 py-5">
                  <span className="w-8 shrink-0 font-display text-lg font-semibold text-oxblood">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{pillar.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function LeadershipPhilosophy() {
  const { philosophy } = leadership;
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Academic Leadership Philosophy</Eyebrow>
        <p className="mt-10 font-display text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-paper md:text-5xl">
          {philosophy.statement}
        </p>
        <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-paper/60">{philosophy.body}</p>
      </div>
    </Section>
  );
}

export function ResearchLeadership() {
  const { researchLeadership } = leadership;
  return (
    <Section tone="cream">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood">
            Research
          </h3>
          <ul className="mt-6 space-y-3">
            {researchLeadership.research.map((item) => (
              <li key={item} className="font-display text-xl font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 md:text-center">
          <p className="mx-auto max-w-[10rem] font-display text-lg italic leading-snug text-ink-soft/60">
            {researchLeadership.center}
          </p>
        </div>
        <div className="md:col-span-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood">
            Leadership
          </h3>
          <ul className="mt-6 space-y-3">
            {researchLeadership.leadership.map((item) => (
              <li key={item} className="font-display text-xl font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
