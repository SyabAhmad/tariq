import { publicationMetrics } from "@/content/publications";
import { Eyebrow, Section } from "./section";

export function PublicationsHeader() {
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 hidden h-[480px] w-[480px] rounded-full border border-gold/20 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>Publications</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-forest md:text-7xl">
          Research, documented.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">
          A growing body of research exploring{" "}
          <strong className="font-semibold text-forest">
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
    <Section tone="white" className="border-b border-charcoal/10">
      <Eyebrow>Research Metrics</Eyebrow>
      <dl className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {publicationMetrics.map((metric) => (
          <div key={metric.label} className={metric.wide ? "col-span-2 md:col-span-1" : ""}>
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <span
                className={`block font-display font-semibold text-forest ${
                  metric.wide ? "text-2xl italic md:text-3xl" : "text-4xl md:text-5xl"
                }`}
              >
                {metric.value}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-charcoal/50">
                {metric.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal/45">
        Figures follow the public ResearchGate profile (60 publications, 339 citations) as checked in
        October 2026. Reconcile against ResearchGate, Google Scholar and ORCID before launch.
      </p>
    </Section>
  );
}
