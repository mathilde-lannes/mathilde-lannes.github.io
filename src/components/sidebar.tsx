import { SocialList } from "@/components/social-list";
import { person } from "@/content/resume";
import { nav, tagline } from "@/content/site";

export function Sidebar() {
  return (
    <header className="intro flex flex-col gap-10 min-[1080px]:sticky min-[1080px]:top-0 min-[1080px]:h-[calc(100vh-12rem)] min-[1080px]:justify-between">
      <div>
        <h1 className="text-5xl font-semibold tracking-tight text-heading">
          {person.name}
        </h1>
        <p className="mt-3 text-xl text-heading">{person.jobTitle}</p>
        <p className="mt-4 max-w-xs text-muted">{tagline}</p>
        <nav aria-label="Sections" className="mt-10">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 min-[1080px]:flex-col">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group inline-flex items-center py-1 font-mono text-xs tracking-widest text-muted uppercase"
                >
                  <span className="mr-3 hidden text-accent min-[1080px]:inline">
                    {item.index}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/resume.pdf"
          className="mt-8 inline-flex rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Résumé
        </a>
      </div>
      <SocialList />
    </header>
  );
}
