export const tagline = "I like building web & mobile apps.";

export const aboutIntro =
  "Hello! My name is Mathilde and I enjoy making things for the Internet. In my free time, I am really into knitting and sewing my own clothes, but this portfolio is all about tech!";

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
