import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function LeadershipHeader() {
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 hidden h-[460px] w-[460px] rounded-full border border-forest/10 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{leadership.header.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {leadership.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">
          {leadership.header.body}
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.16em] text-gold">
          {leadership.header.smallLine}
        </p>
      </div>
    </section>
  );
}

export function LeadershipAtAGlance() {
  return (
    <Section tone="white" className="border-b border-charcoal/10">
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-4">
        {leadership.atAGlance.items.map((item) => (
          <div key={item.title ?? item.value} className="flex flex-col bg-ivory p-8">
            {"value" in item && item.value ? (
              <>
                <dd className="font-display text-4xl font-semibold text-forest">{item.value}</dd>
                <dt className="mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/50">{item.label}</dt>
              </>
            ) : (
              <>
                <dt className="font-display text-xl font-semibold text-forest">{item.title}</dt>
                <dd className="mt-3 leading-relaxed text-sm text-charcoal/60">{item.detail}</dd>
              </>
            )}
          </div>
        ))}
      </dl>
    </Section>
  );
}
