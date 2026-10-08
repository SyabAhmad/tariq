/**
 * Research page content.
 *
 * Featured studies and publication records live in content/publications.ts —
 * this module references them by id so there is a single source of truth.
 */

import { publications } from "./publications";

const byId = (id: string) => publications.find((publication) => publication.id === id)!;

export const research = {
  header: {
    eyebrow: "Research",
    heading: "Researching entrepreneurship where opportunity, community and sustainability intersect.",
    body: "Dr. Muhammad Tariq Yousafzai\u2019s research explores entrepreneurship, value creation, sustainability, circular economy, entrepreneurship education and informal economic activity, with particular attention to communities and markets in Pakistan.",
    emphasis:
      "entrepreneurship, value creation, sustainability, circular economy, entrepreneurship education and informal economic activity",
    cta: { label: "View Publications", href: "#publications", arrow: "down" },
    source: {
      label: "Sustainability of Recycling Waste Picker Sustainopreneurs (MDPI)",
      href: "https://www.mdpi.com/2071-1050/13/12/6533",
    },
  },

  metrics: {
    eyebrow: "Research at a Glance",
    items: [
      { value: "60+", label: "Publications" },
      { value: "20+ Years", label: "University Teaching" },
      { value: "6+", label: "Core Research Areas" },
      { value: "International", label: "Research Collaborations", wide: true },
    ],
    note: "Publication counts follow his current public ResearchGate profile and should be reconfirmed against the verified publication dataset before publication.",
  },

  themes: {
    eyebrow: "Areas of Inquiry",
    heading: "Research Themes",
    items: [
      {
        title: "Entrepreneurship & Value Creation",
        body: "Understanding how individuals and communities identify opportunities, build livelihoods and create economic value.",
      },
      {
        title: "Entrepreneurship Education",
        body: "Researching entrepreneurial learning, curriculum development and how universities can cultivate entrepreneurial capabilities.",
      },
      {
        title: "Sustainability & Circular Economy",
        body: "Exploring sustainable enterprise, recycling, resource recovery and alternative approaches to managing waste.",
        note: "His work on recycling waste-picker sustainopreneurs in Swat specifically examines their contribution to recycling and municipal solid-waste mitigation.",
        source: {
          label: "Sustainability (MDPI)",
          href: "https://www.mdpi.com/2071-1050/13/12/6533",
        },
      },
      {
        title: "Bottom-of-Pyramid Entrepreneurship",
        body: "Studying entrepreneurial activity among communities operating with limited resources and access to formal markets.",
      },
      {
        title: "Informal Economy",
        body: "Examining informal entrepreneurs, their livelihood strategies, constraints and contribution to local economies.",
      },
      {
        title: "Social & Environmental Challenges",
        body: "Investigating how economic activity intersects with environmental and socioeconomic vulnerability, including research on tenant farmers facing climate-change risks in Pakistan.",
        source: {
          label: "Frontiers in Psychology (PMC)",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9197473/",
        },
      },
    ],
  },

  philosophy: {
    eyebrow: "Research Philosophy",
    heading: "From local realities to broader questions.",
    emphasis: "real people operating within real economic constraints",
    body:
      "A recurring characteristic of Dr. Yousafzai\u2019s research is its focus on real people operating within real economic constraints. His studies investigate entrepreneurs, shepherding communities, cottage industries, recycling workers, farmers and university stakeholders rather than treating entrepreneurship solely as an abstract business concept.",
    chain: ["Research", "Context", "Understanding", "Value"],
  },

  context: {
    heading: "Entrepreneurship beyond the conventional business model.",
    panels: [
      {
        label: "Communities",
        items: ["Swat", "Malakand", "Pakistan"],
        body: "Research grounded in local economic and social realities.",
      },
      {
        label: "People",
        items: ["Entrepreneurs", "Farmers", "Shepherds", "Waste Pickers", "Students"],
        body: "Understanding how different groups create and sustain value.",
      },
      {
        label: "Systems",
        items: ["Markets", "Universities", "Policy", "Environment"],
        body: "Connecting individual entrepreneurial activity with broader economic and institutional systems.",
      },
    ],
  },

  interdisciplinary: {
    heading: "Interdisciplinary Research",
    body: "His research also extends beyond conventional entrepreneurship studies.",
    paragraphs: [
      "His 2022 Frontiers in Psychology publication examined socioeconomic risks of climate change for tenant farmers in Pakistan, using mixed methods and an interdisciplinary research team.",
      "Another line of research examines university governance and regulatory reform in Khyber Pakhtunkhwa, including the pressures facing public universities and the commercialization of knowledge.",
    ],
    sources: [
      {
        label: "Assessing Socioeconomic Risks of Climate Change on Tenant Farmers in Pakistan (PMC)",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9197473/",
      },
      {
        label: "University Model Act Reforms on Governance (The Dialogue)",
        href: "https://nja.pastic.gov.pk/journals/index.php/TheDialogue/article/view/39841",
      },
    ],
    statement:
      "His research sits at the intersection of entrepreneurship, society, institutions and sustainability.",
  },

  featured: {
    eyebrow: "Selected Studies",
    heading: "Featured Research",
    items: [
      "accidental-entrepreneurs",
      "shepherding-entrepreneurship",
      "improvising-circularity",
      "entrepreneurial-curricula-ceo",
    ].map((id, index) => ({
      index: String(index + 1).padStart(2, "0"),
      publicationId: id,
      shortTitle: byId(id).shortTitle,
      summary: byId(id).summary,
    })),
  },

  direction: {
    eyebrow: "Where the Research Is Going",
    heading: "Current Research Direction",
    items: ["Circular Economy", "Frugal Innovation", "Informal Entrepreneurship", "Sustainable Value Creation"],
    body: "His 2026 Journal of Circular Economy publication demonstrates that his recent work continues to investigate informal resource recovery and frugal innovation.",
    source: {
      label: "Journal of Circular Economy",
      href: "https://circulareconomyjournal.org/ojs/JoCE/article/view/329",
    },
  },

  network: {
    heading: "Local research. International collaboration.",
    countries: [
      "Pakistan",
      "Sweden",
      "USA",
      "China",
      "South Korea",
      "Portugal",
      "Saudi Arabia",
      "Denmark",
      "Thailand",
      "Nepal",
    ],
    body:
      "His publications demonstrate collaboration across multiple institutions and countries, including research involving scholars affiliated with universities in Pakistan, China, South Korea, Spain and Chile.",
    source: {
      label: "Frontiers in Psychology",
      href: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.870555/full",
    },
  },

  cta: {
    heading: "Explore the complete body of research.",
    links: [
      { label: "View Publications", href: "#publications", variant: "onDark" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=j9b2AokAAAAJ&hl=en", variant: "onDarkSecondary" },
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/M-Tariq-Yousafzai", variant: "onDarkSecondary" },
    ],
  },

  /** The searchable publication library itself is rendered from content/publications.ts. */
  library: {
    eyebrow: "Publications",
    heading: "Explore the Research",
    note: "Records are structured data (content/publications.ts); connect the verified ResearchGate / Google Scholar / ORCID dataset to grow the library without editing markup.",
  },
};
