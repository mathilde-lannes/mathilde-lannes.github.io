import {
  education,
  experience,
  interests,
  pdfSummary,
  person,
  projectHighlights,
  skillGroups,
} from "@/content/resume";
import { MdHeading } from "@/components/resume/md-heading";

const accent = "#1d4ed7";
const ink = "#18181b";
const body = "#52525b";

export function PrintResume() {
  return (
    <article
      className="resume-pdf mx-auto bg-white text-[#52525b]"
      aria-label={`${person.name} resume`}
    >
      <header className="resume-pdf__header grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1.75fr)_minmax(11.5rem,1fr)] sm:items-start sm:gap-7">
        <div className="min-w-0">
          <MdHeading
            level={1}
            className="text-[2.6rem] leading-none font-bold tracking-tight"
            style={{ color: accent }}
          >
            {person.name}
          </MdHeading>
          <p className="mt-2.5 max-w-[28rem] text-[0.8rem] leading-snug" style={{ color: body }}>
            {pdfSummary}
          </p>
        </div>
        <address className="not-italic text-[0.7rem] leading-[1.45] text-[#71717a] sm:pt-1.5 sm:text-right">
          <a className="block hover:underline" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <span className="block">{person.location}</span>
          <a className="block hover:underline" href={person.github}>
            {person.githubLabel}
          </a>
          <a className="block hover:underline" href={person.website}>
            {person.websiteLabel}
          </a>
        </address>
      </header>

      <div
        className="my-7 h-px w-full bg-[#e4e4e7]"
        aria-hidden="true"
      />

      <div className="resume-pdf__body grid grid-cols-1 gap-7 sm:grid-cols-[minmax(0,1.75fr)_minmax(11.5rem,1fr)] sm:gap-7">
        <section aria-labelledby="pdf-experience-heading">
          <MdHeading
            level={2}
            id="pdf-experience-heading"
            className="mb-2.5 text-[0.92rem] font-bold"
            style={{ color: accent }}
          >
            Relevant Experience
          </MdHeading>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={`${job.company}-${job.startDate}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <MdHeading
                    level={3}
                    className="text-[0.8rem] leading-snug font-normal"
                    style={{ color: ink }}
                  >
                    {job.role} ·{" "}
                    <span className="font-bold">{job.company}</span>
                  </MdHeading>
                  <p className="shrink-0 text-[0.7rem] text-[#a1a1aa] tabular-nums">
                    <time dateTime={job.startDate}>{job.startLabel}</time>
                    {" — "}
                    {job.endDate === "Present" ? (
                      <span>{job.endLabel}</span>
                    ) : (
                      <time dateTime={job.endDate}>{job.endLabel}</time>
                    )}
                  </p>
                </div>
                {job.highlights.length > 0 ? (
                  <ul
                    className="mt-1 list-disc space-y-0.5 pl-3.5 text-[0.72rem] leading-[1.35] marker:text-[#a1a1aa]"
                    style={{ color: body }}
                  >
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section aria-labelledby="pdf-skills-heading">
            <MdHeading
              level={2}
              id="pdf-skills-heading"
              className="mb-2 text-[0.92rem] font-bold"
              style={{ color: accent }}
            >
              Skills
            </MdHeading>
            <div className="space-y-2.5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <MdHeading
                    level={3}
                    className="text-[0.76rem] font-bold"
                    style={{ color: ink }}
                  >
                    {group.label}
                  </MdHeading>
                  <p className="mt-0.5 text-[0.7rem] leading-snug" style={{ color: body }}>
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="pdf-projects-heading">
            <MdHeading
              level={2}
              id="pdf-projects-heading"
              className="mb-2 text-[0.92rem] font-bold"
              style={{ color: accent }}
            >
              Project highlights
            </MdHeading>
            <div className="space-y-2.5">
              {projectHighlights.map((project) => (
                <div key={project.name}>
                  <MdHeading
                    level={3}
                    className="text-[0.76rem] font-bold"
                    style={{ color: ink }}
                  >
                    {project.name}
                  </MdHeading>
                  <p className="mt-0.5 text-[0.7rem] leading-snug" style={{ color: body }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="pdf-education-heading">
            <MdHeading
              level={2}
              id="pdf-education-heading"
              className="mb-2 text-[0.92rem] font-bold"
              style={{ color: accent }}
            >
              Education
            </MdHeading>
            <div className="space-y-2.5">
              {education.map((item) => (
                <div key={`${item.school}-${item.degree}`}>
                  <MdHeading
                    level={3}
                    className="text-[0.76rem] font-bold"
                    style={{ color: ink }}
                  >
                    {item.school}
                  </MdHeading>
                  <p className="mt-0.5 text-[0.7rem] leading-snug" style={{ color: body }}>
                    {item.degree}
                  </p>
                  <p className="mt-0.5 text-[0.65rem] text-[#a1a1aa] tabular-nums">
                    {item.startLabel === item.endLabel
                      ? item.endLabel
                      : `${item.startLabel} — ${item.endLabel}`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="pdf-interests-heading">
            <MdHeading
              level={2}
              id="pdf-interests-heading"
              className="mb-1.5 text-[0.92rem] font-bold"
              style={{ color: accent }}
            >
              Interests
            </MdHeading>
            <p className="text-[0.7rem] leading-snug" style={{ color: body }}>
              {interests}
            </p>
          </section>
        </aside>
      </div>
    </article>
  );
}
