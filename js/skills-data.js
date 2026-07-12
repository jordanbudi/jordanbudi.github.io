// Skills section — grouped skills with optional proof links.
// Each group: title, blurb (one line of context), and a list of skills.
// A skill with an "href" renders as a clickable pill linking to the evidence —
// use "#section-id" for a spot on this page or a full URL for external proof.

const SKILL_GROUPS = [
  {
    id: "production",
    title: "Production & Leadership",
    blurb: "The day job: shipping and operating live games with large teams at Blizzard and Infinity Ward.",
    skills: [
      { label: "Live ops & release management", href: "#experience" },
      { label: "Agile & sprint planning" },
      { label: "Cross-functional team leadership" },
      { label: "Roadmapping & milestone planning" },
      { label: "JIRA & Confluence" },
      { label: "Stakeholder communication" }
    ]
  },
  {
    id: "teaching",
    title: "Teaching & Communication",
    blurb: "Eight years teaching high school math and computer science — the rarest production skill is making complex things clear.",
    skills: [
      { label: "Curriculum design", href: "#experience" },
      { label: "Mentoring & coaching" },
      { label: "Public speaking" },
      { label: "Explaining hard things simply" }
    ]
  },
  {
    id: "ai",
    title: "AI-Augmented Building",
    blurb: "I don't train models — I ship things with them.",
    skills: [
      { label: "Claude & Claude Code" },
      { label: "ChatGPT" },
      { label: "Lovable", href: "#my-projects" },
      { label: "TensorFlow.js & Teachable Machine", href: "#my-projects" },
      { label: "AI curriculum design (AI4ALL)", href: "#experience" },
      { label: "Prompt-driven prototyping" }
    ]
  },
  {
    id: "web",
    title: "Building for the Web",
    blurb: "Enough of the web stack to take an idea to a live URL.",
    skills: [
      { label: "JavaScript" },
      { label: "HTML & CSS" },
      { label: "Bootstrap" },
      { label: "p5.js", href: "#my-projects" },
      { label: "Git & GitHub Pages" },
      { label: "WordPress" }
    ]
  }
];
