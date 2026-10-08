import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function LeadershipHeader() {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{leadership.header.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
          {leadership.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {leadership.header.body}
        </p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood">
          {leadership.header.smallLine}
        </p>
      </div>
    </section>
  );
}

export function LeadershipAtAGlance() {
  return (
    <Section tone="cream">
      <dl className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
        {leadership.atAGlance.items.map((item) => (
          <div key={item.title ?? item.value} className="flex flex-col bg-paper p-9">
            {"value" in item && item.value ? (
              <>
                <dd className="font-display text-6xl font-semibold leading-none text-ink md:text-7xl">
                  {item.value}
                </dd>
                <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60">
                  {item.label}
                </dt>
              </>
            ) : (
              <>
                <dt className="font-display text-xl font-semibold text-ink">{item.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{item.detail}</dd>
              </>
            )}
          </div>
        ))}
      </dl>
    </Section>
  );
}
