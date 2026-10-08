import { impact } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function AcademicImpact() {
  return (
    <Section id="impact" tone="white" className="border-y border-charcoal/10">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{impact.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {impact.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-charcoal/65">{impact.lead}</p>
        </div>
        <div className="md:col-span-7">
          <dl className="grid grid-cols-2 gap-10">
            {impact.stats.map((stat) => (
              <div key={stat.label} className={stat.wide ? "col-span-2" : ""}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    className={`block font-display font-semibold text-forest ${
                      stat.wide
                        ? "text-2xl italic md:text-3xl"
                        : "text-5xl md:text-6xl"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-charcoal/50">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-sm leading-relaxed text-charcoal/55">{impact.countries}</p>
          <div className="mt-6">
            <SourceNote source={impact.source} />
          </div>
        </div>
      </div>
    </Section>
  );
}
