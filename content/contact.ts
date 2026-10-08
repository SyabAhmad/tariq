/**
 * Contact & Collaboration page content — the conversion page.
 */

export const contact = {
  header: {
    eyebrow: "Contact & Collaboration",
    heading: "Let\u2019s build meaningful academic connections.",
    body: "Whether you are a researcher, university, student, organization or event organizer, Dr. Tariq welcomes conversations around research, entrepreneurship education, innovation and sustainable value creation.",
    links: [
      { label: "Start a Conversation", href: "#start", variant: "primary" },
      { label: "View Research", href: "/research", variant: "secondary" },
    ],
  },

  collaboration: {
    heading: "Ways to Collaborate",
    items: [
      {
        title: "Academic Collaboration",
        body: "Research partnerships, interdisciplinary projects and scholarly collaboration.",
      },
      {
        title: "Entrepreneurship Education",
        body: "Guest lectures, seminars, workshops and entrepreneurship-focused academic programs.",
      },
      {
        title: "Research Discussion",
        body: "Conversations around entrepreneurship, sustainability, circular economy, informal economies and value creation.",
      },
      {
        title: "Academic Events",
        body: "Invitations for seminars, conferences, panel discussions and university events.",
      },
      {
        title: "Institutional Engagement",
        body: "Academic quality, educational development and institutional improvement initiatives.",
      },
    ],
  },

  form: {
    id: "start",
    eyebrow: "Start a Conversation",
    heading: "Send a message",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "your@email.com", type: "email" },
      organization: {
        label: "Organization / Institution",
        placeholder: "University, company or organization",
      },
      reason: {
        label: "Reason for Contact",
        options: [
          "Research Collaboration",
          "Guest Lecture / Seminar",
          "Academic Event",
          "Entrepreneurship Education",
          "Institutional Collaboration",
          "Other",
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell Dr. Tariq briefly about your idea...",
      },
    },
    submitLabel: "Send Message",
    privacy: "Your information will only be used to respond to your inquiry.",
    note: "Form submission endpoint (email service, route handler or form provider) to be wired during the build phase.",
  },

  direct: {
    eyebrow: "Direct Contact",
    heading: "Prefer a direct conversation?",
    email: "muhammadtariq@uswat.edu.pk",
    emailNote: "Institutional email shown in published articles — confirm with Dr. Tariq before displaying publicly.",
    university: "University of Swat",
    department: "Centre for Management and Commerce",
    location: "Swat, Khyber Pakhtunkhwa, Pakistan",
    profiles: [
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/M-Tariq-Yousafzai" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=j9b2AokAAAAJ&hl=en",
      },
      {
        label: "ORCID",
        href: "https://orcid.org/orcid-search/search?searchQuery=Muhammad%20Tariq%20Yousafzai",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-m-tariq-yusafzai-47376455/" },
    ],
  },

  researchCollaboration: {
    eyebrow: "Research Collaboration",
    heading: "Have a research question worth exploring?",
    body: "Dr. Tariq\u2019s research brings together entrepreneurship, innovation, sustainability and community-level economic activity.",
    areas: [
      "Entrepreneurship",
      "Circular Economy",
      "Sustainable Value Creation",
      "Informal Economy",
      "Entrepreneurship Education",
      "Innovation",
    ],
    cta: { label: "Discuss a Research Idea", href: "#start" },
  },

  speakingInvitations: {
    eyebrow: "Speaking Invitations",
    heading: "Invite Dr. Tariq to Speak",
    body: "For universities, academic institutions and organizations interested in entrepreneurship and innovation.",
    suitableFor: [
      "Guest lectures",
      "University seminars",
      "Entrepreneurship programs",
      "Academic conferences",
      "Research discussions",
      "Capacity-building sessions",
    ],
    cta: { label: "Send Speaking Request", href: "#start" },
  },

  location: {
    heading: "University of Swat",
    lines: ["Centre for Management and Commerce", "University of Swat", "Khyber Pakhtunkhwa, Pakistan"],
    note: "Understated location visual — the map is not the centerpiece; this is an academic portfolio, not a business location page.",
  },

  finalStatement: {
    lines: ["Research starts with a question.", "Collaboration starts with a conversation."],
    cta: { label: "Start a Conversation", href: "#start" },
  },
};
