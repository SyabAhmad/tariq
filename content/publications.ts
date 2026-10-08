/**
 * Structured publication records — the single source of truth for the
 * Publications page library, the Research page featured list and the About
 * page selected research.
 *
 * Records are compiled from the research brief's independently identifiable
 * papers plus publisher/journal pages. Abstracts are written as short factual
 * summaries (labelled "Summary" in the UI) pending verified abstracts and the
 * full 60+ publication dataset from ResearchGate / Google Scholar / ORCID.
 */

export type Category =
  | "Entrepreneurship"
  | "Sustainability"
  | "Education"
  | "Circular Economy"
  | "Innovation"
  | "Governance"
  | "Social Impact";

export const categories: Category[] = [
  "Entrepreneurship",
  "Sustainability",
  "Education",
  "Circular Economy",
  "Innovation",
  "Governance",
  "Social Impact",
];

export type Publication = {
  id: string;
  title: string;
  /** Lead author; co-authors noted where verified. */
  authors: string[];
  coAuthors?: boolean;
  year: number;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  /** Short factual summary — not a verbatim abstract. */
  summary: string;
  keywords: string[];
  doi?: string;
  publisherUrl: string;
  researchgateUrl?: string;
  categories: Category[];
};

export const publications: Publication[] = [
  {
    id: "improvising-circularity",
    title: "Improvising Circularity: Frugal Innovation and Informal Resource-Recovery Cycles in Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2026,
    journal: "Journal of Circular Economy",
    summary:
      "Examines frugal innovation, informal recycling and resource-recovery cycles in Pakistan. The paper lists Muhammad Tariq Yousafzai with the University of Swat.",
    keywords: ["Frugal Innovation", "Informal Recycling", "Resource Recovery", "Circular Economy", "Pakistan"],
    doi: undefined,
    publisherUrl: "https://circulareconomyjournal.org/ojs/JoCE/article/view/329",
    categories: ["Circular Economy", "Innovation", "Sustainability"],
  },
  {
    id: "accidental-entrepreneurs",
    title:
      "Accidental Entrepreneurs: Recycling, Upcycling and Downcycling by Ecopreneurs at Bottom of Pyramid in Upper Swat",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2025,
    journal: "Annual Methodological Archive Research Review",
    summary:
      "A qualitative study of informal reclaimers, waste pickers and stockpile consolidators, examining their contribution to material recovery and recycling in Upper Swat.",
    keywords: ["Ecopreneurs", "Waste Pickers", "Recycling", "Upcycling", "Downcycling", "Bottom of Pyramid", "Swat"],
    publisherUrl:
      "https://amresearchreview.com/index.php/Journal/article/download/245/286",
    categories: ["Entrepreneurship", "Sustainability", "Circular Economy"],
  },
  {
    id: "green-organisation-culture",
    title:
      "Comparative Study of the Adoption of Green Organisation Culture on Sustainable Performance of the Industrial Sector of Khyber Pakhtunkhwa, Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2025,
    journal: "Pakistan Journal of Social Sciences Review",
    summary:
      "A comparative study of green organisational culture and its relationship with sustainable performance in the industrial sector of Khyber Pakhtunkhwa.",
    keywords: ["Green Culture", "Organisational Culture", "Sustainable Performance", "Industry"],
    publisherUrl: "https://www.pjssrjournal.com/index.php/Journal/article/download/144/130/217",
    categories: ["Sustainability", "Governance"],
  },
  {
    id: "shepherding-entrepreneurship",
    title:
      "Shepherding Entrepreneurship Based Value Creation Below the Base of the Pyramid in Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2024,
    journal: "City University Research Journal",
    volume: "14",
    issue: "1",
    summary:
      "A qualitative study of landless shepherding entrepreneurs in District Malakand, examining livelihood strategies, value creation and the trade-offs of informal economic activity.",
    keywords: ["Shepherding", "Value Creation", "Bottom of Pyramid", "Informal Economy", "Malakand"],
    publisherUrl: "https://www.cusitjournals.com/index.php/CURJ/article/view/951",
    categories: ["Entrepreneurship", "Social Impact"],
  },
  {
    id: "tenant-farmers-climate",
    title: "Assessing Socioeconomic Risks of Climate Change on Tenant Farmers in Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2022,
    journal: "Frontiers in Psychology",
    volume: "13",
    pages: "870555",
    summary:
      "Assesses socioeconomic risks of climate change for tenant farmers in Pakistan using mixed methods with an interdisciplinary research team.",
    keywords: ["Climate Change", "Agriculture", "Tenant Farmers", "Socioeconomic Risk"],
    doi: "10.3389/fpsyg.2022.870555",
    publisherUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.870555/full",
    researchgateUrl: "https://www.researchgate.net/publication/361417382",
    categories: ["Social Impact", "Sustainability"],
  },
  {
    id: "waste-picker-sustainopreneurs",
    title:
      "Sustainability of Recycling Waste Picker Sustainopreneurs for Prevention and Mitigation of Municipal Solid Waste in Swat",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2021,
    journal: "Sustainability (MDPI)",
    volume: "13",
    issue: "12",
    pages: "6533",
    summary:
      "Studies the social and environmental value of informal waste pickers and their contribution to recycling and municipal solid-waste mitigation in Swat.",
    keywords: ["Waste Pickers", "Sustainopreneurs", "Recycling", "Municipal Solid Waste", "Swat"],
    doi: "10.3390/su13126533",
    publisherUrl: "https://www.mdpi.com/2071-1050/13/12/6533",
    categories: ["Sustainability", "Circular Economy", "Social Impact"],
  },
  {
    id: "formal-informal-recycling-stakeholders",
    title:
      "Assessing the Formal and Informal Waste Recycling Business Processes through a Stakeholders Lens in Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    coAuthors: true,
    year: 2021,
    journal: "Sustainability (MDPI)",
    volume: "13",
    issue: "21",
    pages: "11717",
    summary:
      "Examines formal and informal waste recycling business processes in Pakistan through a stakeholder lens.",
    keywords: ["Waste Recycling", "Stakeholders", "Informal Economy", "Pakistan"],
    doi: "10.3390/su132111717",
    publisherUrl: "https://www.mdpi.com/2071-1050/13/21/11717",
    categories: ["Circular Economy", "Governance"],
  },
  {
    id: "entrepreneurial-curricula-ceo",
    title: "Developing Entrepreneurial Learning Curricula From a CEO's Perspective",
    authors: ["Muhammad Tariq Yousafzai"],
    year: 2021,
    journal: "City University Research Journal",
    volume: "11",
    issue: "1",
    summary:
      "Examines the gap between university entrepreneurship education and business practice, based on qualitative interviews with CEOs.",
    keywords: ["Entrepreneurship Education", "Curriculum", "CEO Perspective", "Entrepreneurial Learning"],
    publisherUrl: "https://www.cusitjournals.com/index.php/CURJ/article/download/507/319",
    categories: ["Education", "Entrepreneurship"],
  },
  {
    id: "university-model-act-governance",
    title:
      "Assessing the Implications of University Model Act Reforms on Governance: A Case of Public Universities in Pakistan",
    authors: ["Muhammad Tariq Yousafzai"],
    year: 2021,
    journal: "The Dialogue",
    volume: "16",
    issue: "2",
    pages: "28–41",
    summary:
      "Assesses the implications of University Model Act reforms on the governance of public universities in Pakistan.",
    keywords: ["Governance", "Higher Education", "University Model Act", "Khyber Pakhtunkhwa"],
    publisherUrl: "https://nja.pastic.gov.pk/journals/index.php/TheDialogue/article/view/39841",
    categories: ["Governance", "Education"],
  },
];

/** Topic cloud — clicking a topic filters the library by category or keyword. */
export const topics: string[] = [
  "Entrepreneurship",
  "Entrepreneurship Education",
  "Value Creation",
  "Sustainability",
  "Circular Economy",
  "Recycling",
  "Informal Economy",
  "Bottom-of-Pyramid Markets",
  "Innovation",
  "Climate Change",
  "Agriculture",
  "Governance",
];

export const publicationMetrics = [
  { value: "60+", label: "Publications" },
  { value: "20+", label: "Years of Academic Experience" },
  { value: "339+", label: "Citations" },
  { value: "International", label: "Collaborations", wide: true },
];

/** Four large editorial cards for featured sections. */
export const featuredPublicationIds = [
  "improvising-circularity",
  "accidental-entrepreneurs",
  "shepherding-entrepreneurship",
  "entrepreneurial-curricula-ceo",
];

export const externalProfiles = [
  {
    label: "ResearchGate",
    detail: "Publications · citations · research activity",
    href: "https://www.researchgate.net/profile/M-Tariq-Yousafzai",
  },
  {
    label: "Google Scholar",
    detail: "Scholar metrics · citations · indexed research",
    href: "https://scholar.google.com/citations?user=j9b2AokAAAAJ&hl=en",
  },
  {
    label: "ORCID",
    detail: "Persistent academic identity",
    href: "https://orcid.org/orcid-search/search?searchQuery=Muhammad%20Tariq%20Yousafzai",
  },
  {
    label: "University Profile",
    detail: "Institutional affiliation",
    href: "https://uswat.edu.pk/",
  },
];
