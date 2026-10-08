import { impact } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function AcademicImpact() {
  return (
    <Section id="impact" tone="cream">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{impact.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
            {impact.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">{impact.lead}</p>
        </div>
        <div className="md:col-span-7">
          <dl className="grid grid-cols-2 gap-10">
            {impact.stats.map((stat) => (
              <div key={stat.label} className={stat.wide ? "col-span-2" : ""}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    className={`block border-t border-hairline pt-6 font-display font-semibold text-ink ${
                      stat.wide ? "text-3xl italic md:text-4xl" : "text-6xl md:text-7xl"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-sm leading-relaxed text-ink-soft/70">{impact.countries}</p>
          <div className="mt-6">
            <SourceNote source={impact.source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
