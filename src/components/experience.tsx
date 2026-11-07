import { experience } from "@/content/resume";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <ol>
        {experience.map((job) => (
          <li key={`${job.company}-${job.startDate}`}>
            <h3>
              {job.role} · {job.company}
            </h3>
            <p>
              <time dateTime={job.startDate}>{job.startLabel}</time>
              {" — "}
              {job.endDate === "Present" ? (
                <span>{job.endLabel}</span>
              ) : (
                <time dateTime={job.endDate}>{job.endLabel}</time>
              )}
              {job.location ? ` · ${job.location}` : null}
            </p>
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
