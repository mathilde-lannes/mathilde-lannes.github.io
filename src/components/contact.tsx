import { contact } from "@/content/site";
import { person } from "@/content/resume";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-16 text-center"
    >
      <p className="font-mono text-sm text-accent">04. {contact.eyebrow}</p>
      <h2
        id="contact-heading"
        className="mt-4 text-[clamp(40px,5vw,60px)] leading-none font-semibold tracking-tight text-heading"
      >
        {contact.title}
      </h2>
      <p className="mx-auto mt-6 max-w-md leading-relaxed">{contact.body}</p>
      <a
        href={`mailto:${person.email}`}
        className="mt-10 inline-flex rounded border border-accent px-6 py-4 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
      >
        Say hello
      </a>
    </section>
  );
}
