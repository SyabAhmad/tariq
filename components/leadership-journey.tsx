import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function LeadershipJourney() {
  const { journey } = leadership;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>{journey.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          A progression of teaching, research and leadership.
        </h2>
      </div>
      <ol className="relative mt-16 space-y-12 before:absolute before:bottom-4 before:left-[7px] before:top-2 before:w-px before:bg-charcoal/15">
        {journey.stages.map((stage, index) => (
          <li key={stage.title} className="relative pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  Stage {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-xl font-semibold text-forest">{stage.place}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-semibold text-charcoal">{stage.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/65">{stage.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function LeadershipContributions() {
  return (
    <Section tone="ivory">
      <Eyebrow>{leadership.contributions.heading}</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-2">
        {leadership.contributions.items.map((item) => (
          <article key={item.title} className="group bg-ivory p-10 transition-colors duration-300 hover:bg-white">
            <h3 className="font-display text-2xl font-semibold text-forest">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-charcoal/65">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
