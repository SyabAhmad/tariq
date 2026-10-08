"use client";

import { useState } from "react";
import { topics } from "@/content/publications";
import { PublicationLibrary } from "./publication-library";
import { Eyebrow, Section } from "./section";

/**
 * Topic cloud wired to the publication library — clicking a topic filters
 * the archive in place.
 */
export function PublicationsBrowser({
  eyebrow,
  heading,
  note,
}: {
  eyebrow: string;
  heading: string;
  note?: string;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  return (
    <>
      <Section tone="paper" className="border-b border-hairline">
        <Eyebrow>Explore by Topic</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-[1.15] text-ink md:text-3xl">
          Follow a research thread.
        </h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {topics.map((topic) => {
            const active = activeTopic === topic.label;
            return (
              <li key={topic.label}>
                <button
                  type="button"
                  onClick={() => {
                    if (active) {
                      setActiveTopic(null);
                      setQuery("");
                    } else {
                      setActiveTopic(topic.label);
                      setQuery(topic.term);
                    }
                  }}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors duration-200 ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink-soft hover:border-oxblood hover:text-oxblood"
                  }`}
                >
                  {topic.label}
                </button>
              </li>
            );
          })}
        </ul>
        {activeTopic && (
          <p className="mt-6 text-sm text-ink-soft/60">
            Filtering by topic: <span className="font-medium text-ink">{activeTopic}</span>{" "}
            <button
              type="button"
              onClick={() => {
                setActiveTopic(null);
                setQuery("");
              }}
              className="ml-2 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-oxblood"
            >
              Clear
            </button>
          </p>
        )}
      </Section>

      <PublicationLibrary
        eyebrow={eyebrow}
        heading={heading}
        note={note}
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          setActiveTopic(null);
        }}
      />
    </>
  );
}

export function Collaborations() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Selected Collaborations</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            Research is rarely a solitary pursuit.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="leading-relaxed text-ink-soft">
            Co-authors and collaborating institutions will be listed here once the full publication
            dataset has been verified against the public records.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["Researchers", "Institutions", "Countries"].map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
