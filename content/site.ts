/**
 * Site content for the Dr. Muhammad Tariq Yousafzai portfolio.
 *
 * Copy is drawn from the research brief (dr-tariq-yousafzai-portfolio-research.md)
 * and the approved homepage spec. Self-reported items (LinkedIn counts, talks)
 * are marked with sources so they can be reconfirmed before publication.
 */

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "Publications", href: "/publications" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Contact", href: "/#contact" },
];

export const profile = {
  name: "Muhammad Tariq Yousafzai",
  wordmark: "Tariq Yousafzai",
  tagline: "Professor · Researcher · Entrepreneurship Educator",
  role: "Associate Professor · Centre for Management and Commerce · University of Swat",
  email: "muhammadtariq@uswat.edu.pk",
  links: {
    linkedin: "https://www.linkedin.com/in/dr-m-tariq-yusafzai-47376455/",
    researchgate: "https://www.researchgate.net/profile/M-Tariq-Yousafzai",
    scholar: "https://scholar.google.com/citations?user=j9b2AokAAAAJ&hl=en",
    orcid:
      "https://orcid.org/orcid-search/search?searchQuery=Muhammad%20Tariq%20Yousafzai",
  },
};

export const hero = {
  eyebrow: "Professor · Researcher · Entrepreneurship Educator",
  heading: "Muhammad Tariq Yousafzai",
  role: profile.role,
  quote:
    "Exploring entrepreneurship, value creation, sustainability and innovation through research, education and engagement with real-world communities.",
  credibility: ["20+ Years in University Teaching", "60 Publications", "International Research Collaborations"],
};

export const intro = {
  eyebrow: "Where Entrepreneurship Meets Research",
  heading: "Studying how people create value in places where opportunity is often overlooked.",
  body: "Dr. Muhammad Tariq Yousafzai is an Associate Professor at the Centre for Management and Commerce, University of Swat, and Director of the University\u2019s Quality Enhancement function.",
  body2:
    "His research focuses on entrepreneurship education, value creation, sustainability, recycling, waste management and circular economy, with particular interest in entrepreneurship within underserved and informal economic contexts.",
  source: { label: "ResearchGate profile", href: profile.links.researchgate },
};

export type ResearchArea = {
  title: string;
  description: string;
  source?: { label: string; href: string };
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Entrepreneurship Education",
    description:
      "Researching how universities can develop entrepreneurial capabilities and create more enterprising graduates. His work has examined curriculum, entrepreneurial learning and the relationship between university education and actual business practice.",
    source: {
      label: "Curriculum research",
      href: "https://www.researchgate.net/publication/334431706_Entrepreneurship_and_Value_Creation_Curriculum_at_Macro_Meso_and_Micro_level",
    },
  },
  {
    title: "Value Creation",
    description:
      "Exploring entrepreneurship as a process of creating value for individuals, communities and institutions.",
  },
  {
    title: "Sustainability & Circular Economy",
    description:
      "Investigating recycling, resource recovery, waste management and sustainable entrepreneurial activity. His research on waste-picker sustainopreneurs in Swat examines their contribution to recycling and municipal solid-waste mitigation.",
    source: {
      label: "Waste picker sustainopreneurs study",
      href: "https://www.mdpi.com/2071-1050/13/12/6533",
    },
  },
  {
    title: "Bottom-of-Pyramid Entrepreneurship",
    description:
      "Studying entrepreneurial activity among communities operating with limited resources and access to formal markets.",
  },
  {
    title: "Innovation",
    description:
      "Understanding how individuals and communities develop practical business models and forms of innovation under resource constraints.",
  },
  {
    title: "Informal Economy",
    description:
      "Examining the economic contribution, challenges and value-creation mechanisms of informal entrepreneurs.",
  },
];

export const philosophy = {
  eyebrow: "From Theory to Real-World Value",
  heading: "Entrepreneurship is more than starting a business.",
  question: "How do people create value when conventional systems, resources and opportunities are limited?",
  body: "From university entrepreneurship education to shepherding communities and informal recycling businesses in Swat, his research examines entrepreneurship as a mechanism for value creation, livelihood development and social and environmental impact.",
  emphasis: "value creation, livelihood development and social and environmental impact",
  source: {
    label: "Shepherding Entrepreneurship, City University Research Journal",
    href: "https://www.cusitjournals.com/index.php/CURJ/article/view/951",
  },
};

export type FeaturedPaper = {
  index: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  href: string;
};

export const featuredResearch: FeaturedPaper[] = [
  {
    index: "01",
    title:
      "Accidental Entrepreneurs: Recycling, Upcycling and Downcycling by Ecopreneurs at Bottom of Pyramid in Upper Swat",
    summary:
      "A qualitative study examining informal reclaimers, waste pickers and stockpile consolidators and their contribution to material recovery and recycling in Upper Swat.",
    year: "2025",
    tags: ["Entrepreneurship", "Sustainability", "Circular Economy"],
    href: "https://www.researchgate.net/publication/392942904_Accidental_Entrepreneurs_Recycling_Upcycling_and_Downcycling_by_Ecopreneurs_at_Bottom_of_Pyramid_in_Upper_Swat",
  },
  {
    index: "02",
    title: "Shepherding Entrepreneurship Based Value Creation Below the Base of the Pyramid in Pakistan",
    summary:
      "Research examining landless shepherding entrepreneurs in the Malakand region, with a focus on livelihood, value creation and the challenges surrounding informal economic activity.",
    year: "2024",
    tags: ["Entrepreneurship", "Value Creation", "Informal Economy"],
    href: "https://www.cusitjournals.com/index.php/CURJ/article/view/951",
  },
  {
    index: "03",
    title: "Developing Entrepreneurial Learning Curricula From a CEO\u2019s Perspective",
    summary:
      "Research examining the gap between entrepreneurship education at universities and actual business practices, based on qualitative interviews with CEOs.",
    year: "2021",
    tags: ["Entrepreneurship Education", "Curriculum", "Value Creation"],
    href: "https://www.researchgate.net/publication/356509967_Developing_Entrepreneurial_Learning_Curricula_From_A_CEO%27s_Perspective",
  },
];

export const impact = {
  eyebrow: "20+ Years of Academic Work",
  heading: "Teaching. Research. Knowledge creation.",
  lead: "His academic work spans entrepreneurship education, qualitative research, sustainability, recycling, waste management, innovation and value creation.",
  stats: [
    { value: "60", label: "Publications" },
    { value: "20+", label: "Years of University Teaching" },
    { value: "International", label: "Research & Academic Collaborations", wide: true },
  ],
  countries:
    "His public profile records teaching and research exposure involving Saudi Arabia, Thailand, Denmark, Nepal, the United States and Sweden, alongside research collaborations with researchers in the USA, China, South Korea, Portugal and Spain.",
  source: { label: "ResearchGate profile", href: profile.links.researchgate },
};

export const leadership = {
  eyebrow: "Academic Leadership",
  roles: [
    {
      title: "Associate Professor",
      department: "Centre for Management and Commerce",
      organization: "University of Swat",
    },
    {
      title: "Director — Quality Enhancement",
      department: "Quality Enhancement Cell",
      organization: "University of Swat",
    },
  ],
  cta: { label: "View Academic Profile", href: profile.links.researchgate },
};

export const globalPerspective = {
  eyebrow: "Research Without Borders",
  heading: "An academic journey across Asia, Europe and North America.",
  body: "His academic journey includes study in Pakistan, Sweden and the United States, alongside international teaching, research visits and collaborations.",
  columns: [
    { title: "Study", items: ["Pakistan", "Sweden", "United States"] },
    {
      title: "Teaching & Research Exposure",
      items: ["Saudi Arabia", "Thailand", "Denmark", "Nepal", "United States", "Sweden"],
    },
    {
      title: "Collaborations",
      items: ["USA", "China", "South Korea", "Portugal", "Spain"],
    },
  ],
  source: { label: "ResearchGate profile", href: profile.links.researchgate },
};

export const speaking = {
  eyebrow: "Selected Talks & Engagement",
  heading: "Sharing research with students, practitioners and communities.",
  items: [
    {
      date: "30 September 2026",
      title: "Social entrepreneurship",
      context: "Talk for Zindigi Prize participants",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7511369484465774593/",
    },
    {
      date: "7 October 2026",
      title: "Idea-pitching guidance",
      context: "Session with students at the University of Swat",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7513634055561580544/",
    },
    {
      date: "26 November 2024",
      title: "Research ethics roundtable",
      context:
        "Discussion with graduate students and faculty, Department of Media and Communication Studies, University of Swat",
      href: "https://www.linkedin.com/posts/dr-muhammad-tariq-yousafzai-47376455_conducted-a-roundtable-discussion-seminar-activity-7267398245838983168-EPOK",
    },
  ],
  note: "Talks are self-reported on LinkedIn; reconfirm before publication.",
};

export const latestResearch = {
  eyebrow: "Latest Research",
  title: "Improvising Circularity: Frugal Innovation and Informal Resource-Recovery Cycles in Pakistan",
  year: "2026",
  venue: "Journal of Circular Economy",
  summary:
    "The paper lists Muhammad Tariq Yousafzai with the University of Swat and examines frugal innovation, informal recycling and resource-recovery cycles in Pakistan.",
  href: "https://circulareconomyjournal.org/ojs/JoCE/article/view/329",
};

export const finalCta = {
  lines: ["Research.", "Entrepreneurship.", "Impact."],
  body: "Explore Dr. Yousafzai\u2019s research, academic work and contributions to entrepreneurship education.",
  links: {
    primary: { label: "Explore Research", href: "#research" },
    secondary: { label: "Get in Touch", href: `mailto:${profile.email}` },
  },
};
