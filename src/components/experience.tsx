import { experience } from "@/content/resume";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24"
    >
      <h2
        id="experience-heading"
        className="mb-6 flex items-baseline gap-3 font-mono text-sm tracking-widest text-heading uppercase"
      >
        <span className="text-accent">02.</span>
        Experience
      </h2>
      <ol>
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.startDate}`}
            className="hover-row rounded px-4 py-4 transition-colors"
          >
            <div className="grid gap-2 min-[1080px]:grid-cols-[11rem_minmax(0,1fr)] min-[1080px]:gap-4">
              <p className="font-mono text-xs text-muted">
                <time dateTime={job.startDate}>{job.startLabel}</time>
                {" — "}
                {job.endDate === "Present" ? (
                  <span>{job.endLabel}</span>
                ) : (
                  <time dateTime={job.endDate}>{job.endLabel}</time>
                )}
              </p>
              <div>
                <h3 className="text-heading">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <a
        href="/resume.pdf"
        className="mt-6 inline-flex font-mono text-sm text-accent hover:underline"
      >
        View Full Résumé
      </a>
    </section>
  );
}
