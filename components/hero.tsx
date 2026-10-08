import { hero } from "@/content/site";
import { ActionLink, Eyebrow } from "./section";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      {/* Decorative hairline ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 hidden h-[560px] w-[560px] rounded-full border border-gold/20 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 hidden h-[380px] w-[380px] rounded-full border border-forest/10 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-forest md:text-7xl lg:text-[5.25rem]">
          {hero.heading}
        </h1>
        <p className="mt-7 text-base font-medium tracking-wide text-charcoal/70 md:text-lg">{hero.role}</p>
        <blockquote className="mt-10 max-w-2xl border-l-2 border-gold pl-6 font-display text-lg italic leading-relaxed text-charcoal/75 md:text-xl">
          {hero.quote}
        </blockquote>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href="#research">Explore Research</ActionLink>
          <ActionLink href="#about" variant="secondary">
            About Dr. Tariq
          </ActionLink>
        </div>
        <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-charcoal/10 pt-8 text-xs uppercase tracking-[0.18em] text-charcoal/50">
          {hero.credibility.map((item, i) => (
            <li key={item} className="flex items-center gap-8">
              {item}
              {i < hero.credibility.length - 1 && (
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
