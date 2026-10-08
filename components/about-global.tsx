import { about } from "@/content/about";
import { Eyebrow, Section } from "./section";

const COLUMNS = 26;
const ROWS = 10;

/** Highlighted coordinates on the decorative dot matrix (col, row). */
const HIGHLIGHTS: Array<{ col: number; row: number; kind: "base" | "study" }> = [
  { col: 18, row: 4, kind: "base" },
  { col: 12, row: 2, kind: "study" },
  { col: 11, row: 3, kind: "study" },
];

const markerStyles: Record<string, string> = {
  base: "bg-gold",
  study: "bg-forest",
  engagement: "border border-gold bg-transparent",
};

function DotMap() {
  return (
    <div
      aria-hidden="true"
      className="grid gap-[10px]"
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: COLUMNS * ROWS }).map((_, index) => {
        const col = index % COLUMNS;
        const row = Math.floor(index / COLUMNS);
        const highlight = HIGHLIGHTS.find((h) => h.col === col && h.row === row);
        return (
          <span
            key={index}
            className={`h-1 w-1 rounded-full ${
              highlight ? `${markerStyles[highlight.kind]} scale-[1.6]` : "bg-charcoal/15"
            }`}
          />
        );
      })}
    </div>
  );
}

export function AboutGlobal() {
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="grid gap-16 md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-6">
          <Eyebrow>{about.global.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {about.global.heading}
          </h2>
          <ul className="mt-10 space-y-6">
            {about.global.locations.map((location) => (
              <li key={location.label} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${markerStyles[location.kind]}`}
                />
                <div>
                  <p className="font-display text-lg font-semibold text-forest">{location.label}</p>
                  <p className="text-sm text-charcoal/55">{location.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <DotMap />
          <p className="mt-10 border-l-2 border-gold pl-6 font-display italic leading-relaxed text-charcoal/70">
            {about.global.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
