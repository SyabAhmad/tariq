import Image from "next/image";
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
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink md:text-7xl lg:text-[5.5rem]">
              {hero.heading}
            </h1>
            <p className="mt-8 max-w-xl font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
              {hero.role}
            </p>
            <blockquote className="mt-8 max-w-xl border-l-2 border-oxblood pl-6 font-display text-xl italic leading-relaxed text-ink/70 md:text-2xl">
              {hero.quote}
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ActionLink href="#research">Explore Research</ActionLink>
              <ActionLink href="/about" variant="secondary">
                About Dr. Tariq
              </ActionLink>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-4">
            <figure className="group">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-full w-full border border-oxblood/30"
                />
                <div className="relative overflow-hidden border border-hairline bg-cream">
                  <Image
                    src="/assets/speaking-event.jpg"
                    alt="Dr. Muhammad Tariq Yousafzai"
                    width={474}
                    height={268}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between border-t border-hairline pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft/60">
                  Associate Professor
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood">
                  University of Swat
                </span>
              </figcaption>
            </figure>
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
