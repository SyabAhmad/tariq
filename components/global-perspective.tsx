import { globalPerspective } from "@/content/site";
import { Eyebrow, Section, SourceNote } from "./section";

function WireframeGlobe() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className="h-auto w-full max-w-md text-forest/25"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="200" cy="200" r="170" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="170" ry="58" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="170" ry="116" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="58" ry="170" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="116" ry="170" strokeWidth="1" />
      <line x1="30" y1="200" x2="370" y2="200" strokeWidth="1" />
      <line x1="200" y1="30" x2="200" y2="370" strokeWidth="1" />
      {/* Gold accents marking the countries named in the brief */}
      <g fill="#b59a62" stroke="none">
        <circle cx="252" cy="172" r="5" />
        <circle cx="214" cy="120" r="5" />
        <circle cx="96" cy="150" r="5" />
      </g>
    </svg>
  );
}

export function GlobalPerspective() {
  return (
    <Section id="perspective" tone="white" className="border-b border-charcoal/10">
      <div className="grid gap-16 md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-7">
          <Eyebrow>{globalPerspective.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {globalPerspective.heading}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-charcoal/65">
            {globalPerspective.body}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {globalPerspective.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <SourceNote source={globalPerspective.source} />
          </div>
        </div>
        <div className="flex justify-center md:col-span-5">
          <WireframeGlobe />
        </div>
      </div>
    </Section>
  );
}
