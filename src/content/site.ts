export const tagline =
  "I take web and mobile apps from the first sketch to the store.";

export const aboutIntro =
  "Hello! My name is Mathilde and I enjoy making software, from concept to deployment. In my free time, I am really into knitting and sewing my own clothes, but this portfolio is all about tech!";

export const lately = {
  label: "What I’ve been up to lately:",
  items: [
    "Running UX workshops with researchers",
    "Designing in Figma",
    "Building with React and React Native",
    "Testing with Jest, Maestro, Cypress, and more",
    "Reviewing frontend code from great teammates",
    "Shipping faster with Cursor",
    "Publishing on the App Store and Play Store",
  ],
} as const;

export const aboutLinks = [
  {
    href: "https://www.synapse-developpement.fr",
    label: "a start-up specialized in NLP",
  },
  {
    href: "https://www.thalesgroup.com/fr",
    label: "a huge corporation",
  },
  {
    href: "https://institutducerveau-icm.org/fr/",
    label: "a neuroscience institute",
  },
] as const;

export const nav = [
  { id: "about", index: "01", label: "About" },
  { id: "experience", index: "02", label: "Experience" },
  { id: "work", index: "03", label: "Work" },
  { id: "contact", index: "04", label: "Contact" },
] as const;

export const socials = [
  { name: "GitHub", url: "https://github.com/mathilde-lannes" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mathilde-lannes" },
] as const;

export const contact = {
  eyebrow: "What’s next?",
  title: "Get in touch",
  body: "I’m based in Paris and currently building tools for researchers at the Paris Brain Institute. My inbox is open for engineering conversations.",
} as const;
