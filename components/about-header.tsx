import { about } from "@/content/about";
import { ActionLink, Eyebrow } from "./section";

export function AboutHeader() {
  return (
    <section className="border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <Eyebrow>{about.header.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {about.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">{about.header.intro}</p>
        <div className="mt-10">
          <ActionLink href={about.header.cta.href}>{about.header.cta.label}</ActionLink>
        </div>
      </div>
    </section>
  );
}
