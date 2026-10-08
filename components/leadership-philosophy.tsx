import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function TeachingPillars() {
  const { teaching } = leadership;
  return (
    <Section tone="ivory">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Teaching & Academic Development</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {teaching.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-charcoal/75">{teaching.body}</p>
          <ol className="mt-12 space-y-0">
            {teaching.pillars.map((pillar, index) => (
              <li key={pillar.title} className="flex flex-col">
                <div className="flex items-baseline gap-6 py-5">
                  <span className="w-8 shrink-0 font-display text-lg font-semibold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest">{pillar.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-charcoal/65">{pillar.body}</p>
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
    <Section tone="forest">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Academic Leadership Philosophy</Eyebrow>
        <p className="mt-10 font-display text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-ivory md:text-5xl">
          {philosophy.statement}
        </p>
        <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-ivory/70">{philosophy.body}</p>
      </div>
    </Section>
  );
}

export function ResearchLeadership() {
  const { researchLeadership } = leadership;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-gold">Research</h3>
          <ul className="mt-6 space-y-3">
            {researchLeadership.research.map((item) => (
              <li key={item} className="font-display text-xl font-semibold text-forest">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 md:text-center">
          <p className="font-display text-lg italic leading-snug text-charcoal/60 md:mx-auto md:max-w-[10rem]">
            {researchLeadership.center}
          </p>
        </div>
        <div className="md:col-span-5">
          <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-gold">Leadership</h3>
          <ul className="mt-6 space-y-3">
            {researchLeadership.leadership.map((item) => (
              <li key={item} className="font-display text-xl font-semibold text-forest">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
