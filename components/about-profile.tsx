import { about } from "@/content/about";
import { Eyebrow, Section, SourceNote } from "./section";

function Paragraph({ text, bold = [] }: { text: string; bold?: string[] }) {
  if (bold.length === 0) return <>{text}</>;
  const regex = new RegExp(`(${bold.join("|")})`, "g");
  return (
    <>
      {text.split(regex).map((part, i) =>
        bold.includes(part) ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function AboutProfile() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{about.profile.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {about.profile.heading}
          </h2>
          <div className="mt-8">
            <SourceNote source={about.profile.source} />
          </div>
        </div>
        <div className="space-y-6 md:col-span-7 md:pt-14">
          {about.profile.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              <Paragraph text={paragraph} bold={i === 0 ? ["20 years", "60 publications"] : []} />
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
