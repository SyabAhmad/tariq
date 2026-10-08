"use client";

import { useMemo, useState } from "react";
import { categories, publications, type Category, type Publication } from "@/content/publications";
import { ActionLink, Eyebrow, Section } from "./section";

const years = Array.from(new Set(publications.map((publication) => publication.year))).sort(
  (a, b) => b - a,
);

const chipBase =
  "rounded-full border px-4 py-2 text-sm transition-colors duration-200";

function PublicationRow({
  publication,
  expanded,
  onToggle,
}: {
  publication: Publication;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border-b border-charcoal/10">
      <div className="py-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {publication.year}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-forest">
              {publication.title}
            </h3>
            <p className="mt-1.5 text-sm italic text-charcoal/50">{publication.journal}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-charcoal/40">
              {publication.categories.join(" · ")}
            </p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="shrink-0 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 transition-colors hover:border-gold hover:text-forest"
          >
            {expanded ? "Hide Details" : "Details"}
            <span aria-hidden="true" className="ml-2">
              {expanded ? "↑" : "↓"}
            </span>
          </button>
        </div>

        {expanded && (
          <div className="mt-6 rounded-2xl border border-charcoal/10 bg-white p-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              {publication.authors[0]}
              {publication.coAuthors ? " + co-authors" : ""}
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/70">{publication.summary}</p>
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-charcoal/40">
                Keywords
              </p>
              <p className="mt-2 text-sm text-charcoal/60">{publication.keywords.join(" · ")}</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {publication.doi && (
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 transition-colors hover:border-gold hover:text-forest"
                >
                  DOI
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                href={publication.publisherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-forest-deep"
              >
                Publisher
                <span aria-hidden="true">↗</span>
              </a>
              {publication.researchgateUrl && (
                <a
                  href={publication.researchgateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 transition-colors hover:border-gold hover:text-forest"
                >
                  ResearchGate
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
            <p className="mt-5 text-xs text-charcoal/40">
              Summary written for this portfolio — replace with the verified abstract when the official
              publication record is available.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Searchable, filterable, sortable publication archive.
 * All data comes from content/publications.ts — adding a paper is a data edit.
 */
export function PublicationLibrary({
  eyebrow,
  heading,
  note,
  showControls = true,
}: {
  eyebrow: string;
  heading: string;
  note?: string;
  showControls?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [year, setYear] = useState<number | "All">("All");
  const [sort, setSort] = useState<"newest" | "oldest" | "title">("newest");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = publications.filter((publication) => {
      const haystack = [
        publication.title,
        publication.shortTitle,
        publication.journal,
        ...publication.keywords,
        ...publication.categories,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery === "" || haystack.includes(normalizedQuery);
      const matchesCategory = category === "All" || publication.categories.includes(category);
      const matchesYear = year === "All" || publication.year === year;
      return matchesQuery && matchesCategory && matchesYear;
    });

    result.sort((a, b) => {
      if (sort === "oldest") return a.year - b.year;
      if (sort === "title") return a.title.localeCompare(b.title);
      return b.year - a.year;
    });
    return result;
  }, [query, category, year, sort]);

  return (
    <Section id="publications" tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {heading}
        </h2>
      </div>

      {showControls && (
        <div className="mt-12 space-y-6">
          <div className="relative max-w-xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/35"
            >
              🔍
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search publications..."
              aria-label="Search publications"
              className="w-full rounded-full border border-charcoal/15 bg-ivory py-3.5 pl-12 pr-5 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {(["All", ...categories] as const).map((option) => {
              const active = category === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={active}
                  className={`${chipBase} ${
                    active
                      ? "border-forest bg-forest text-ivory"
                      : "border-charcoal/15 text-charcoal/60 hover:border-gold hover:text-forest"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2.5 text-sm text-charcoal/55">
              Year
              <select
                value={String(year)}
                onChange={(event) =>
                  setYear(event.target.value === "All" ? "All" : Number(event.target.value))
                }
                className="rounded-full border border-charcoal/15 bg-ivory px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-gold"
              >
                <option value="All">All Years</option>
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2.5 text-sm text-charcoal/55">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as typeof sort)}
                className="rounded-full border border-charcoal/15 bg-ivory px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-gold"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A–Z</option>
              </select>
            </label>
            <p className="ml-auto text-sm text-charcoal/40">
              {filtered.length} {filtered.length === 1 ? "record" : "records"}
            </p>
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-charcoal/10">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-charcoal/50">
            No publications match the current filters.
          </p>
        ) : (
          filtered.map((publication) => (
            <PublicationRow
              key={publication.id}
              publication={publication}
              expanded={expandedId === publication.id}
              onToggle={() => setExpandedId(expandedId === publication.id ? null : publication.id)}
            />
          ))
        )}
      </div>

      {note && <p className="mt-10 text-sm leading-relaxed text-charcoal/45">{note}</p>}

      <div className="mt-12">
        <ActionLink
          href="https://www.researchgate.net/profile/M-Tariq-Yousafzai"
          variant="secondary"
          external
        >
          Explore All Publications
        </ActionLink>
      </div>
    </Section>
  );
}
