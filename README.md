# Tariq Yousafzai — Portfolio

Academic portfolio website for **Muhammad Tariq Yousafzai** — Associate Professor, Centre for Management and Commerce, and Director of the Quality Enhancement Cell, University of Swat.

Built with [Next.js 16](https://nextjs.org) (App Router, Turbopack), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Editing content

All copy, links and section data live in `content/*.ts` — no component edits needed for text changes. Each section in `components/` reads from these files.

| Page | Route | Content module |
| --- | --- | --- |
| Home | `/` | `content/site.ts` |
| About | `/about` | `content/about.ts` |
| Research | `/research` | `content/research.ts` + `content/publications.ts` |
| Entrepreneurship & Impact | `/entrepreneurship` | `content/entrepreneurship.ts` |
| Publications | `/publications` | `content/publications.ts` (structured records: title, authors, year, journal, volume/issue/pages, summary, keywords, DOI, URLs, categories) |
| Speaking & Engagement | `/speaking` | `content/speaking.ts` |
| Academic Leadership | `/leadership` | `content/leadership.ts` |
| Contact & Collaboration | `/contact` | `content/contact.ts` |

Header navigation shows six items (About · Research · Entrepreneurship · Publications · Speaking · Contact); the Academic Leadership page is reached via the About page.

## Status

All eight routes are designed and statically prerendered. Remaining pre-launch items: connect the contact form endpoint, replace portfolio summaries with verified abstracts, reconcile the full 60+ publication list, collect approved photographs (Speaking event photo, portrait), and confirm the institutional email and ORCID link.

## Brand

| Token | Value | Usage |
| --- | --- | --- |
| Warm Ivory | `#F6F3EC` | Page background |
| White | `#FFFFFF` | Alternating sections / cards |
| Charcoal | `#171717` | Body text |
| Deep Forest | `#17352B` | Display type, dark sections |
| Muted Gold | `#B59A62` | Eyebrows, accents, hairlines |

Fonts: Fraunces (display) and Inter (body), loaded via `next/font/google` in `app/layout.tsx`.

## Content notes

Copy is compiled from public professional profiles and the research brief
(`dr-tariq-yousafzai-portfolio-research.md`). Items self-reported on LinkedIn
(talk dates, publication counts) are marked with sources and listed in
`content/site.ts` for reconfirmation before publication:

- Preferred name spelling and honorific
- Institutional email address display permission
- Current status of QEC, editorial and volunteer roles
- Real ORCID identifier (currently an ORCID search link)
- A CV or official publication list for the full bibliography
