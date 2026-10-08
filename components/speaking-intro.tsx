import { speakingPage } from "@/content/speaking";
import { Eyebrow, Section } from "./section";

export function SpeakingIntro() {
  return (
    <Section tone="white" className="border-b border-charcoal/10">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Introduction</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {speakingPage.intro.heading}
          </h2>
        </div>
        <div className="space-y-6 md:col-span-7 md:pt-14">
          {speakingPage.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "text-lg leading-relaxed text-charcoal/75" : "leading-relaxed text-charcoal/65"}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
