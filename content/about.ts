/**
 * About page content — Dr. Muhammad Tariq Yousafzai.
 *
 * Editorial narrative copy from the approved spec; every factual claim traces
 * to the research brief or its cited public profiles.
 */

import { featuredResearch, leadership, profile } from "./site";

export const about = {
  header: {
    eyebrow: "About Dr. Tariq",
    heading: "Academic leadership grounded in entrepreneurship, research and impact.",
    intro:
      "Dr. Muhammad Tariq Yousafzai is an Associate Professor at the Centre for Management and Commerce, University of Swat, and serves as Director of Quality Enhancement. His academic work focuses on entrepreneurship, value creation, sustainability, entrepreneurship education and economic activity within underserved communities.",
    cta: { label: "View Research", href: "/research" },
  },

  profile: {
    eyebrow: "Academic Profile",
    heading: "Researching entrepreneurship beyond conventional boundaries.",
    paragraphs: [
      "Dr. Tariq Yousafzai has more than 20 years of university teaching experience and has developed a research profile spanning entrepreneurship, entrepreneurship education, sustainability, recycling, waste management, circular economy and value creation.",
      "His work frequently examines entrepreneurship in contexts where resources are limited and formal economic structures are less accessible, including informal businesses and communities in the Malakand and Swat regions.",
      "His public ResearchGate profile currently lists 60 publications and international academic experience spanning multiple countries.",
    ],
    source: { label: "ResearchGate profile", href: profile.links.researchgate },
  },

  journey: {
    eyebrow: "Academic Journey",
    heading: "Twenty years of teaching, research and academic leadership.",
    stages: [
      {
        period: "Foundations",
        place: "Pakistan",
        title: "Academic Foundations",
        body: "Doctoral-level study in management sciences and business administration, alongside a career in university teaching and research.",
        credentials: [
          "PhD, Entrepreneurship — Qurtuba University of Science and Technology (2014–2018)",
          "MBA, Marketing — Institute of Management Sciences (2005–2006)",
        ],
      },
      {
        period: "International Exposure",
        place: "Sweden",
        title: "Entrepreneurship & International Exposure",
        body: "Entrepreneurship-focused academic exposure at the Jönköping International Business School.",
        credentials: ["MS, Innovation and Business Creation — Jönköping International Business School (2008–2010)"],
      },
      {
        period: "Engagement",
        place: "Saudi Arabia · Thailand · Denmark · Nepal · USA",
        title: "International Academic Engagement",
        body: "His academic profile records teaching and research exposure involving Saudi Arabia, Thailand, Denmark, Nepal, the United States and Sweden, as well as research collaborations involving scholars from countries including China, South Korea and Portugal.",
      },
      {
        period: "Present",
        place: "University of Swat",
        title: "University of Swat",
        body: "His work at the University of Swat — within the Centre for Management and Commerce — combines teaching, research, academic leadership and entrepreneurship-focused scholarship.",
      },
    ],
  },

  interests: {
    eyebrow: "Research Interests",
    heading: "Understanding how people create value.",
    lead: "Rather than treating entrepreneurship simply as business creation, Dr. Tariq\u2019s research explores entrepreneurship as a broader mechanism for economic, social and environmental value creation.",
    emphasis: "economic, social and environmental value creation",
    items: [
      {
        title: "Entrepreneurship",
        body: "Opportunity recognition, entrepreneurial activity and enterprise development.",
      },
      {
        title: "Entrepreneurship Education",
        body: "Curriculum development, entrepreneurial learning and developing enterprising graduates.",
      },
      {
        title: "Sustainability",
        body: "Sustainable entrepreneurship and environmentally responsible economic activity.",
      },
      {
        title: "Circular Economy",
        body: "Recycling, upcycling, downcycling and resource recovery.",
      },
      {
        title: "Bottom-of-Pyramid Markets",
        body: "Entrepreneurship and value creation among economically underserved communities.",
      },
      {
        title: "Informal Economy",
        body: "Understanding informal entrepreneurs, their contribution and the challenges they face.",
      },
    ],
  },

  community: {
    eyebrow: "From Classroom to Community",
    heading: "Research should explain the world beyond the classroom.",
    paragraphs: [
      "A significant part of Dr. Tariq\u2019s research looks at entrepreneurship in real communities, particularly in and around Swat.",
      "His research has examined groups including recycling entrepreneurs, waste pickers and shepherding communities, exploring how individuals create livelihoods and economic value despite limited resources and formal support structures.",
      "This approach connects academic research with local economic realities.",
    ],
    emphasis: "academic research with local economic realities",
  },

  selected: {
    eyebrow: "Selected Research",
    heading: "Three studies that frame a research agenda.",
    cards: [
      {
        paper: featuredResearch[0],
        shortTitle: "Accidental Entrepreneurs",
        summary: "Recycling, Upcycling and Downcycling by Ecopreneurs at Bottom of Pyramid in Upper Swat",
      },
      {
        paper: featuredResearch[1],
        shortTitle: "Shepherding Entrepreneurship",
        summary: "Value creation among landless shepherding entrepreneurs in Pakistan",
      },
      {
        paper: featuredResearch[2],
        shortTitle: "Entrepreneurial Learning",
        summary: "Developing entrepreneurial learning curricula from a CEO\u2019s perspective",
      },
    ],
    cta: { label: "Explore All Research", href: "/research#publications" },
  },

  leadership: {
    eyebrow: "Academic Leadership",
    heading: "Beyond research.",
    body: "As Director of Quality Enhancement at the University of Swat, Dr. Tariq contributes to the university\u2019s broader academic quality and institutional development. This role complements his work as an educator and researcher, bringing together:",
    pillars: ["Teaching", "Research", "Academic Quality", "Institutional Development"],
    roles: leadership.roles,
  },

  global: {
    eyebrow: "Global Perspective",
    heading: "Local research. Global conversations.",
    locations: [
      { label: "Pakistan", detail: "Primary academic and research base", kind: "base" },
      { label: "Sweden", detail: "Entrepreneurship education / academic exposure", kind: "study" },
      {
        label: "Saudi Arabia · Denmark · Thailand · Nepal · USA",
        detail: "International academic engagement",
        kind: "engagement",
      },
    ],
    note: "His academic work connects local entrepreneurial realities with international research conversations.",
  },

  closing: {
    heading: "Building knowledge that creates value.",
    body: "Through teaching, research and academic leadership, Dr. Tariq Yousafzai continues to explore how entrepreneurship can contribute to innovation, sustainable development and meaningful economic opportunity.",
    links: {
      primary: { label: "Explore Research", href: "/#research" },
      secondary: { label: "Get in Touch", href: `mailto:${profile.email}` },
    },
  },
};
