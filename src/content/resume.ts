export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  startLabel: string;
  endLabel: string;
  highlights: string[];
  skills: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ProjectHighlight = {
  name: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startLabel: string;
  endLabel: string;
};

export const person = {
  name: "Mathilde Lannes",
  jobTitle: "Senior Frontend Engineer",
  email: "mathilde.lannes@gmail.com",
  location: "Paris, France",
  website: "https://mathilde-lannes.github.io/",
  websiteLabel: "mathilde-lannes.github.io",
  github: "https://github.com/mathilde-lannes",
  githubLabel: "github.com/mathilde-lannes",
  sameAs: [
    "https://mathilde-lannes.github.io/",
    "https://github.com/mathilde-lannes",
  ],
} as const;

export const profile =
  "I build—and occasionally design—digital experiences that are fast, accessible and easy to use. My current focus is helping neuroscience researchers collect and analyze data.";

/** Short summary used on the Brittany-style PDF header. */
export const pdfSummary =
  "Senior frontend engineer focused on building and designing digital experiences that are fast, accessible and easy to use.";

export const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Python",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java"],
  },
  {
    label: "Libraries & Frameworks",
    items: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Elastic UI",
      "Styled Components",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitLab",
      "App Store",
      "Play Store",
      "Kibana",
      "Docker",
      "Figma",
    ],
  },
];

export const beyondCode = "Knitting and sewing";

export const interests = "Knitting, sewing, climbing and reading";

export const projectHighlights: ProjectHighlight[] = [
  {
    name: "Moodeling",
    description:
      "Mobile app for daily longitudinal mood monitoring in clinical research on mood disorders; 400+ users.",
  },
  {
    name: "TraumaCare",
    description:
      "Mobile app for PTSD screening, care, and follow-up, built with the ICM Care Lab and Paris CUMP; public prize at Congrès de l’Encéphale.",
  },
];

export const education: Education[] = [
  {
    school: "GOBELINS Paris",
    degree: "UX Design — methodology and practice",
    startLabel: "2023",
    endLabel: "2023",
  },
  {
    school: "Université Toulouse — Jean Jaurès",
    degree: "Master, Collaborative Computing in Enterprise",
    startLabel: "2017",
    endLabel: "2019",
  },
  {
    school: "Université Toulouse — Jean Jaurès",
    degree: "Bachelor, Mathematics and Computer Science",
    startLabel: "2014",
    endLabel: "2017",
  },
];

export const experience: Experience[] = [
  {
    company: "Institut du Cerveau",
    role: "Senior front-end engineer",
    location: "Paris, France",
    startDate: "2024-04",
    endDate: "Present",
    startLabel: "Apr 2024",
    endLabel: "Present",
    highlights: [
      "Own the full mobile ecosystem: architecture, development, testing, deployment, maintenance, and continuous improvement.",
      "Ensure technical consistency across web and mobile: guide frontend development, make technical trade-offs, and rationalize existing systems; strong focus on automation to simplify work for the whole team.",
      "Partially delegate web development while reviewing frontend code and stepping in on complex problems; continue to develop all mobile features.",
      "Shape requirements early through UX workshops, mockups, and specs, combining UX expertise and domain knowledge to deliver the right technical solutions.",
    ],
    skills: ["React", "React Native", "TypeScript", "Expo", "Node.js"],
  },
  {
    company: "Institut du Cerveau",
    role: "Front-end engineer",
    location: "Paris, France",
    startDate: "2021-09",
    endDate: "2024-04",
    startLabel: "Sep 2021",
    endLabel: "Apr 2024",
    highlights: [
      "Designed and developed web and mobile apps with React, React Native and Node.js; facilitated UX workshops.",
      "Managed company App Store and Play Store accounts.",
      "Trained trainees on Git and actively participated in the internal Dev Club.",
    ],
    skills: ["React", "React Native", "Node.js", "Git", "App Store", "Play Store"],
  },
  {
    company: "Thales",
    role: "Front-end engineer",
    location: "Rennes, France",
    startDate: "2019-09",
    endDate: "2021-08",
    startLabel: "Sep 2019",
    endLabel: "Aug 2021",
    highlights: [
      "Developed an Android package-management app in Java and Kibana plugins with React and Node.js.",
      "Managed part of a project in a product-owner-like role.",
      "Developed a React web app with machine-learning components for chemistry.",
    ],
    skills: ["Java", "React", "Node.js", "Kibana"],
  },
  {
    company: "Synapse",
    role: "Apprentice front-end developer",
    location: "Toulouse, France",
    startDate: "2018-10",
    endDate: "2019-09",
    startLabel: "Oct 2018",
    endLabel: "Sep 2019",
    highlights: [
      "Developed NLP apps with Vue and Python; co-wrote and presented a research paper at a national conference.",
    ],
    skills: ["Vue", "Python"],
  },
  {
    company: "GeometricPLM",
    role: "Apprentice full stack developer",
    location: "Toulouse, France",
    startDate: "2017-08",
    endDate: "2018-09",
    startLabel: "Aug 2017",
    endLabel: "Sep 2018",
    highlights: [
      "Developed an NLP parser with Node.js and Express, and a PDF semantic annotation app with React, Scala and GraphDB.",
      "Built a natural-language smart assistant with Ionic, Angular 4, Scala and GraphDB, and machine-learning semantic components with spaCy.",
    ],
    skills: ["Node.js", "Express", "React", "Angular", "Ionic", "Scala"],
  },
  {
    company: "IRIT",
    role: "Front-end intern",
    location: "Toulouse, France",
    startDate: "2017-04",
    endDate: "2017-06",
    startLabel: "Apr 2017",
    endLabel: "Jun 2017",
    highlights: [
      "Developed an Angular 2 natural-language question/answer web app; co-wrote a research paper on NLP.",
    ],
    skills: ["Angular"],
  },
];

export function toMarkdownResume(): string {
  const lines: string[] = [
    `# ${person.name}`,
    "",
    `${person.jobTitle}`,
    `${person.location}`,
    `Website: ${person.website}`,
    `Email: ${person.email}`,
    `GitHub: ${person.github}`,
    "",
    "## Profile",
    "",
    profile,
    "",
    "## Relevant Experience",
    "",
  ];

  for (const job of experience) {
    lines.push(
      `### ${job.role} · ${job.company}`,
      "",
      `${job.location}`,
      `${job.startLabel}–${job.endLabel}`,
      "",
    );
    for (const highlight of job.highlights) {
      lines.push(`- ${highlight}`);
    }
    if (job.skills.length > 0) {
      lines.push("", job.skills.join(", "));
    }
    lines.push("");
  }

  lines.push("## Skills", "");
  for (const group of skillGroups) {
    lines.push(`### ${group.label}`, "", group.items.join(", "), "");
  }

  lines.push("## Project highlights", "");
  for (const project of projectHighlights) {
    lines.push(`### ${project.name}`, "", project.description, "");
  }

  lines.push("## Education", "");
  for (const item of education) {
    const years =
      item.startLabel === item.endLabel
        ? item.endLabel
        : `${item.startLabel}–${item.endLabel}`;
    lines.push(`### ${item.school}`, "", `${item.degree}`, years, "");
  }

  lines.push("## Interests", "", interests, "");

  return lines.join("\n");
}

export function toJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${person.website}#person`,
        name: person.name,
        jobTitle: person.jobTitle,
        email: person.email,
        url: person.website,
        sameAs: person.sameAs,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        knowsAbout: [...technologies],
        description: profile,
      },
      {
        "@type": "ProfilePage",
        "@id": `${person.website}#profile`,
        name: `${person.name} — Resume`,
        about: { "@id": `${person.website}#person` },
        mainEntity: { "@id": `${person.website}#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${person.website}#experience`,
        name: "Work experience",
        itemListElement: experience.map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Occupation",
            name: job.role,
            hiringOrganization: {
              "@type": "Organization",
              name: job.company,
            },
            occupationalCategory: job.role,
            description: job.highlights.join(" "),
            startDate: job.startDate,
            endDate: job.endDate === "Present" ? undefined : job.endDate,
            jobLocation: {
              "@type": "Place",
              address: job.location,
            },
          },
        })),
      },
    ],
  };
}
