export const tagline = "I like building web & mobile apps.";

export const about = [
  "Hello! My name is Mathilde and I enjoy making things for the Internet. In my free time, I am really into knitting and sewing my own clothes, but this portfolio is all about tech!",
  "I’ve had the privilege of working at a start-up specialized in NLP and a huge corporation. My main focus now is helping researchers at a neuroscience institute by providing them tools to collect and analyze data.",
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
