import Image from "next/image";
import { about } from "@/content/site";
import { technologies } from "@/content/resume";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <h2
        id="about-heading"
        className="mb-6 flex items-baseline gap-3 font-mono text-sm tracking-widest text-heading uppercase"
      >
        <span className="text-accent">01.</span>
        About
      </h2>
      <div className="grid items-start gap-10 min-[700px]:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          {about.map((paragraph) => (
            <p key={paragraph} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs">
            {technologies.map((skill) => (
              <li key={skill} className="relative pl-5">
                <span className="absolute left-0 text-accent" aria-hidden="true">
                  ▹
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-[70%] max-w-[300px] min-[700px]:w-full">
          <div
            className="absolute top-4 left-4 h-full w-full rounded border-2 border-accent"
            aria-hidden="true"
          />
          <Image
            src="/me.png"
            alt="Portrait of Mathilde Lannes"
            width={460}
            height={460}
            className="relative rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
}
