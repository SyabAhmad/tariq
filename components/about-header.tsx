import { about } from "@/content/about";
import { ActionLink, Eyebrow } from "./section";

export function AboutHeader() {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{about.header.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
          {about.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">{about.header.intro}</p>
        <div className="mt-10">
          <ActionLink href={about.header.cta.href}>{about.header.cta.label}</ActionLink>
        </div>
      </div>
    </section>
  );
}
