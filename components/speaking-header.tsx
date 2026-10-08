import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow } from "./section";

export function SpeakingHeader() {
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-24 hidden h-[460px] w-[460px] rounded-full border border-gold/20 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <Eyebrow>{speakingPage.header.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {speakingPage.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">
          {speakingPage.header.body}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {speakingPage.header.links.map((link) => (
            <ActionLink
              key={link.label}
              href={link.href}
              variant={link.variant === "primary" ? "primary" : "secondary"}
            >
              {link.label}
            </ActionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
