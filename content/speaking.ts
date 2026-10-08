/**
 * Speaking & Public Engagement page content.
 *
 * Only verified engagements are recorded. Archive deliberately left open-ended
 * rather than inventing a speaking history.
 */

export const speakingPage = {
  header: {
    eyebrow: "Speaking & Public Engagement",
    heading: "Ideas that move beyond the classroom.",
    body: "Dr. Muhammad Tariq Yousafzai shares research-driven perspectives on entrepreneurship, innovation, sustainability, entrepreneurial education and value creation.",
    links: [
      { label: "View Speaking Engagements", href: "#archive", variant: "primary" },
      { label: "Invite Dr. Tariq", href: "/contact", variant: "secondary" },
    ],
  },

  intro: {
    heading: "Research becomes meaningful when it reaches people.",
    paragraphs: [
      "Through seminars, academic sessions and educational engagements, Dr. Tariq connects research with practical questions facing students, entrepreneurs, educators and communities.",
      "His public engagement reflects a broader interest in entrepreneurship as a means of recognizing opportunity, creating value and developing sustainable livelihoods.",
    ],
  },

  featured: {
    eyebrow: "Featured Speaking Engagement",
    date: "17 January 2022",
    heading: "Nurturing Entrepreneurial Capacities",
    meta: "Riphah School of Leadership · Malakand",
    paragraphs: [
      "Dr. Muhammad Tariq Yousafzai participated as the guest speaker at a seminar organized to foster entrepreneurial skills among students and encourage them to pursue entrepreneurial opportunities.",
      "The session emphasized engaging students in creative and innovative activities, recognizing business opportunities and developing the mindset required for entrepreneurship.",
    ],
    cta: { label: "Read Event Coverage", href: "https://riphah.edu.pk/wp-content/uploads/2023/09/E-magazine-Feb-2022-Reduced.pdf" },
    source: {
      label: "Riphah International University (e-magazine, February 2022)",
      href: "https://riphah.edu.pk/wp-content/uploads/2023/09/E-magazine-Feb-2022-Reduced.pdf",
    },
  },

  topics: {
    heading: "Areas of Speaking",
    items: [
      {
        index: "01",
        title: "Entrepreneurship",
        body: "Opportunity recognition, entrepreneurial thinking and value creation.",
      },
      {
        index: "02",
        title: "Entrepreneurship Education",
        body: "Building entrepreneurial capabilities and connecting academic learning with real-world practice.",
      },
      {
        index: "03",
        title: "Innovation",
        body: "Frugal innovation, creative problem-solving and resource-constrained environments.",
      },
      {
        index: "04",
        title: "Sustainable Entrepreneurship",
        body: "Circular economy, recycling, resource recovery and sustainable value creation.",
      },
      {
        index: "05",
        title: "Informal & Bottom-of-Pyramid Entrepreneurship",
        body: "Understanding entrepreneurship within underserved and informal communities.",
      },
      {
        index: "06",
        title: "Research & Academic Development",
        body: "Research practice, qualitative inquiry and translating academic questions into meaningful research.",
      },
    ],
  },

  formats: {
    heading: "Academic & Public Engagement",
    items: [
      "Guest Lectures",
      "Seminars & Workshops",
      "University Events",
      "Entrepreneurship Sessions",
      "Research Discussions",
      "Capacity-Building Programs",
    ],
    note: "No fabricated event counts — the archive grows as verified engagements are collected.",
  },

  researchLink: {
    heading: "Research that informs the conversation",
    items: [
      {
        title: "Entrepreneurship at the Bottom of the Pyramid",
        body: "Research examining how marginalized communities create livelihoods and value through informal entrepreneurial activity.",
        source: {
          label: "ResearchGate",
          href: "https://www.researchgate.net/publication/383023474_Shepherding_Entrepreneurship_based_value_creation_below_the_base_of_the_pyramid_in_Pakistan",
        },
      },
      {
        title: "Circularity & Informal Innovation",
        body: "Research exploring frugal innovation and informal resource-recovery cycles in Pakistan.",
        source: {
          label: "Journal of Circular Economy",
          href: "https://circulareconomyjournal.org/ojs/JoCE/article/view/329",
        },
      },
      {
        title: "Entrepreneurship Education",
        body: "Research investigating the gap between university entrepreneurship education and actual business practice.",
        source: {
          label: "City University Research Journal",
          href: "https://www.cusitjournals.com/index.php/CURJ/article/download/507/319",
        },
      },
    ],
    cta: { label: "Explore Research", href: "/research" },
  },

  archive: {
    id: "archive",
    heading: "Selected Engagements",
    items: [
      {
        year: "2022",
        title: "Nurturing Entrepreneurial Capacities",
        venue: "Riphah School of Leadership, Malakand",
        format: "Guest Speaker · Entrepreneurship Education",
        source: {
          label: "Riphah International University",
          href: "https://riphah.edu.pk/wp-content/uploads/2023/09/E-magazine-Feb-2022-Reduced.pdf",
        },
      },
      {
        year: "2023",
        title: "Aspiring for Quality Education with Relevance",
        venue: "University of Swat",
        format: "Webinar · Academic Quality & Assessment",
        date: "April 2023",
        note: "A publicly available presentation identifies Dr. Muhammad Tariq Yousafzai as Director QEC and presenter of the April 2023 webinar.",
        source: {
          label: "Presentation (Scribd) — link title appears mismatched; reconfirm before publication",
          href: "https://www.scribd.com/presentation/637201131/Paper-wetting-by-HEC",
        },
      },
    ],
    moreNote: "More engagements coming soon",
    note: "Homepage also lists recent LinkedIn-reported talks (September–October 2026); reconcile into one verified archive over time.",
  },

  philosophy: {
    statement:
      "Entrepreneurship is not only about starting businesses. It is about recognizing possibilities, creating value and responding creatively to real-world challenges.",
    label: "A perspective reflected across his teaching, research and public engagement.",
    note: "Display as a speaking-philosophy positioning statement — do not set in quotation marks as a recorded quote.",
  },

  invite: {
    eyebrow: "Invite Dr. Tariq",
    heading: "Looking for an academic voice on entrepreneurship, innovation or sustainability?",
    body: "Dr. Tariq is available for selected academic seminars, guest lectures, entrepreneurship education sessions and research-oriented discussions.",
    cta: { label: "Invite Dr. Tariq", href: "/contact", variant: "onDark" },
    secondary: { label: "Explore Research", href: "/research", variant: "onDarkSecondary" },
  },

  assetsToCollect: [
    "One strong archival event photograph from the Riphah School of Leadership seminar (17 January 2022)",
    "Approved portrait for the Speaking page header",
  ],
};
