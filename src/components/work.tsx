import { projectHighlights } from "@/content/resume";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24">
      <h2
        id="work-heading"
        className="mb-6 flex items-baseline gap-3 font-mono text-sm tracking-widest text-heading uppercase"
      >
        <span className="text-accent">03.</span>
        Work
      </h2>
      <ol className="space-y-2">
        {projectHighlights.map((project) => (
          <li key={project.name} className="hover-row rounded px-4 py-4 transition-colors">
            <h3 className="text-heading">{project.name}</h3>
            <p className="mt-2 max-w-xl leading-relaxed">{project.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
