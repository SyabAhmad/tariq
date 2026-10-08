import { hero } from "@/content/site";
import { ActionLink, Eyebrow } from "./section";

export function Hero() {
  const stats = [
    { value: "20+", label: "Years in University Teaching" },
    { value: "60", label: "Publications" },
    { value: "Intl", label: "Research Collaborations" },
  ];

  return (
    <section id="top" className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="mt-8 font-display text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink md:text-8xl lg:text-[7rem]">
          {hero.heading}
        </h1>
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">{hero.role}</p>
            <blockquote className="mt-8 border-l-2 border-oxblood pl-6 font-display text-xl italic leading-relaxed text-ink/70 md:text-2xl">
              {hero.quote}
            </blockquote>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ActionLink href="#research">Explore Research</ActionLink>
            <ActionLink href="/about" variant="secondary">
              About Dr. Tariq
            </ActionLink>
          </div>
        </div>

        {/* Big-number credibility strip */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-hairline pt-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="block font-display text-7xl font-semibold leading-none tracking-[-0.02em] text-ink md:text-8xl lg:text-9xl">
                {stat.value}
              </span>
              <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
