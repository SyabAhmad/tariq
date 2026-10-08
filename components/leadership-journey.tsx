import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function LeadershipJourney() {
  const { journey } = leadership;
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>{journey.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          A progression of teaching, research and leadership.
        </h2>
      </div>
      <ol className="relative mt-16 space-y-12 before:absolute before:bottom-4 before:left-[7px] before:top-2 before:w-px before:bg-hairline">
        {journey.stages.map((stage, index) => (
          <li key={stage.title} className="relative pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-oxblood bg-paper"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
            </span>
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood">
                  Stage {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-xl font-semibold text-ink">{stage.place}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-semibold text-ink">{stage.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{stage.body}</p>
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
    <Section tone="paper">
      <Eyebrow>{leadership.contributions.heading}</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
        {leadership.contributions.items.map((item) => (
          <article key={item.title} className="group bg-paper p-10 transition-colors duration-300 hover:bg-white">
            <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
