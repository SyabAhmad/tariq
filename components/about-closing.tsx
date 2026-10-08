import { about } from "@/content/about";
import { ActionLink } from "./section";

export function AboutClosing() {
  return (
    <section className="bg-forest px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ivory md:text-6xl">
          {about.closing.heading}
        </h2>
        <blockquote className="mt-10 max-w-2xl border-l-2 border-gold pl-6 text-lg leading-relaxed text-ivory/75">
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
