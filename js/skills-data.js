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
      { label: "Risk & dependency management" },
      { label: "Stakeholder communication" }
    ]
  },
  {
    id: "military",
    title: "Military Leadership",
    blurb: "15 years as a U.S. Army Reserve officer — Field Grade planning, leading, and executing under real uncertainty.",
    skills: [
      { label: "Strategic & operational planning" },
      { label: "Leading through uncertainty" },
      { label: "Aligning large organizations" },
      { label: "Civil Affairs & Signal Corps", href: "#experience" },
      { label: "Field Grade Officer (Major)" }
    ]
  },
  {
    id: "teaching",
    title: "Teaching & Communication",
    blurb: "Eight years teaching high school math and computer science — I just really like explaining complex things, and I'm good at it.",
    skills: [
      { label: "Curriculum design", href: "#experience" },
      { label: "Explaining hard things simply" },
      { label: "Mentoring & coaching" },
      { label: "Public speaking" },
      { label: "A/B-tested learning design", href: "#experience" },
      { label: "National Geographic education advisory" }
    ]
  },
  {
    id: "ai",
    title: "AI-Augmented Building",
    blurb: "I build and ship with AI every day — working prototypes, real tools, and classroom curriculum.",
    skills: [
      { label: "AI-assisted development (Claude, ChatGPT, Lovable)", href: "#my-projects" },
      { label: "AI curriculum design (AI4ALL)", href: "#experience" },
      { label: "ML in the classroom (TensorFlow.js)", href: "#my-projects" },
      { label: "Prompt-driven prototyping" }
    ]
  },
  {
    id: "web",
    title: "Building for the Web",
    blurb: "Enough of the web stack to take an idea to a live URL.",
    skills: [
      { label: "JavaScript & the modern web stack" },
      { label: "p5.js creative coding", href: "#my-projects" },
      { label: "Git & GitHub Pages" }
    ]
  }
];
