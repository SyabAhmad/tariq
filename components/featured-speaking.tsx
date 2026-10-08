import Image from "next/image";
import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow, Section } from "./section";

export function FeaturedSpeaking() {
  const { featured } = speakingPage;
  return (
    <Section tone="paper">
      <Eyebrow>{featured.eyebrow}</Eyebrow>
      <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-oxblood">
            {featured.date}
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            {featured.heading}
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft/60">
            {featured.meta}
          </p>
          {featured.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
          <div className="mt-10">
            <ActionLink href={featured.cta.href} external>
              {featured.cta.label}
            </ActionLink>
          </div>
        </div>
        <div className="md:col-span-5">
          <figure className="group">
            <div className="relative overflow-hidden border border-hairline">
              <Image
                src="/assets/speaking-event.jpg"
                alt="Dr. Muhammad Tariq Yousafzai speaking at the Nurturing Entrepreneurial Capacities seminar, Riphah School of Leadership, 17 January 2022"
                width={474}
                height={268}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between border-t border-hairline pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft/60">
                Riphah School of Leadership · Malakand
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood">
                2022
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
