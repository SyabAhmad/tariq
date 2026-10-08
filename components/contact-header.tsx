import { contact } from "@/content/contact";
import { ActionLink, Eyebrow } from "./section";

export function ContactHeader() {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{contact.header.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
          {contact.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {contact.header.body}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {contact.header.links.map((link) => (
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
