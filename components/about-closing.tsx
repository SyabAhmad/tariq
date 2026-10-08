import { about } from "@/content/about";
import { ActionLink } from "./section";

export function AboutClosing() {
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-paper md:text-6xl">
          {about.closing.heading}
        </h2>
        <blockquote className="mt-12 max-w-2xl border-l-2 border-oxblood-soft pl-6 text-lg leading-relaxed text-paper/70">
          {about.closing.body}
        </blockquote>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href={about.closing.links.primary.href} variant="onDark">
            {about.closing.links.primary.label}
          </ActionLink>
          <ActionLink href={about.closing.links.secondary.href} variant="onDarkSecondary">
            {about.closing.links.secondary.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
