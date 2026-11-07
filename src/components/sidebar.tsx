"use client";

import { useEffect, useId, useState } from "react";
import { SocialList } from "@/components/social-list";
import { person } from "@/content/resume";
import { nav, tagline } from "@/content/site";

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>(nav[0].id);
  const [barVisible, setBarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const inFlowNav = document.getElementById("section-nav");
    const navObserver = new IntersectionObserver(([entry]) => {
      setBarVisible(!entry.isIntersecting);
      if (entry.isIntersecting) {
        setMenuOpen(false);
      }
    });

    if (inFlowNav) {
      navObserver.observe(inFlowNav);
    }

    return () => {
      sectionObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div
        className="mobile-bar fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-deep/95 backdrop-blur min-[1080px]:hidden"
        hidden={!barVisible}
      >
        <div className="flex items-center justify-between px-6 py-2">
          <a href="#about" className="text-sm font-semibold text-heading" onClick={closeMenu}>
            {person.name}
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center px-3 font-mono text-xs tracking-widest text-accent uppercase"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen ? (
          <nav id={menuId} aria-label="Sections" className="px-6 pb-4">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={item.id === activeId ? "location" : undefined}
                    className={`block py-2 font-mono text-xs tracking-widest uppercase ${
                      item.id === activeId ? "text-accent" : "text-muted"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              className="mt-2 inline-flex rounded border border-accent px-4 py-2 font-mono text-sm text-accent"
              onClick={closeMenu}
            >
              Résumé
            </a>
          </nav>
        ) : null}
      </div>

      <header className="intro flex flex-col gap-10 min-[1080px]:sticky min-[1080px]:top-0 min-[1080px]:h-[calc(100vh-12rem)] min-[1080px]:justify-between">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-heading">{person.name}</h1>
          <p className="mt-3 text-xl text-heading">{person.jobTitle}</p>
          <p className="mt-4 max-w-xs text-muted">{tagline}</p>
          <nav id="section-nav" aria-label="Sections" className="mt-10">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 min-[1080px]:flex-col">
              {nav.map((item) => {
                const active = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? "location" : undefined}
                      className={`group inline-flex items-center py-1 font-mono text-xs tracking-widest uppercase ${
                        active ? "text-accent" : "text-muted"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`nav-bar mr-3 hidden h-px min-[1080px]:inline-block ${
                          active ? "w-16 bg-accent" : "w-8 bg-muted"
                        }`}
                      />
                      <span className="mr-3 hidden text-accent min-[1080px]:inline">{item.index}</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
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
    </>
  );
}
