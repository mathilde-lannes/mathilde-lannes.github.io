import { projectHighlights } from "@/content/resume";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">Work</h2>
      <ol>
        {projectHighlights.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
