import { contact } from "@/content/contact";
import { ActionLink, Eyebrow, Section } from "./section";

export function ResearchCollaboration() {
  const { researchCollaboration } = contact;
  return (
    <Section tone="forest">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{researchCollaboration.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-ivory md:text-5xl">
          {researchCollaboration.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ivory/70">
          {researchCollaboration.body}
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {researchCollaboration.areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-ivory/25 px-5 py-2.5 text-sm text-ivory/80"
            >
              {area}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <ActionLink href={researchCollaboration.cta.href} variant="onDark">
            {researchCollaboration.cta.label}
          </ActionLink>
        </div>
      </div>
    </Section>
  );
}
