import { globalPerspective } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

export function GlobalPerspective() {
  return (
    <Section id="perspective" tone="cream">
      <div className="grid gap-16 md:grid-cols-12 md:items-start md:gap-12">
        <div className="md:col-span-7">
          <Eyebrow>{globalPerspective.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
            {globalPerspective.heading}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{globalPerspective.body}</p>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {globalPerspective.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-oxblood" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <SourceNote source={globalPerspective.source} />
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="border border-hairline bg-paper p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Academic footprint
            </p>
            <p className="mt-6 font-display text-7xl font-semibold leading-none text-ink md:text-8xl">
              10<span className="text-oxblood">+</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Countries across study, teaching, research exposure and collaboration.
            </p>
            <div className="mt-8 border-t border-hairline pt-6">
              <p className="font-display text-lg italic leading-relaxed text-ink/70">
                &ldquo;Local research. Global conversations.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
