import { publicationMetrics } from "@/content/publications";
import { Eyebrow, Section } from "./section";

export function PublicationsHeader() {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>Publications</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink md:text-7xl">
          Research, documented.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          A growing body of research exploring{" "}
          <strong className="font-semibold text-ink">
            entrepreneurship, sustainability, value creation, entrepreneurship education, circular
            economy and socioeconomic development
          </strong>
          .
        </p>
      </div>
    </section>
  );
}

export function PublicationsMetrics() {
  return (
    <Section tone="cream">
      <Eyebrow>Research Metrics</Eyebrow>
      <dl className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
        {publicationMetrics.map((metric) => (
          <div key={metric.label} className={metric.wide ? "col-span-2 lg:col-span-1" : ""}>
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <span
                className={`block border-t border-hairline pt-6 font-display font-semibold text-ink ${
                  metric.wide ? "text-4xl italic md:text-5xl" : "text-7xl md:text-8xl lg:text-9xl"
                }`}
              >
                {metric.value}
              </span>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {metric.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-soft/60">
        Figures follow the public ResearchGate profile (60 publications, 339 citations) as checked in
        October 2026. Reconcile against ResearchGate, Google Scholar and ORCID before launch.
      </p>
    </Section>
  );
}
