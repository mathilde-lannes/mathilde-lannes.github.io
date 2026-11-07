# Personal portfolio

Personal site for Mathilde Lannes. Built with Next.js and Tailwind, published as a static export on GitHub Pages.

```bash
pnpm install
pnpm dev
pnpm resume:pdf   # dev server must be running
pnpm build
```

GitHub Pages should use the Actions workflow in `.github/workflows/pages.yml`.

## Content

Site copy lives in `src/content/site.ts`: the tagline, the About text, the “lately” list, navigation, and the contact blurb.

Résumé content lives in `src/content/resume.ts`: roles, skills, projects, and education. The Experience and Work sections, and the printable résumé, read from this file.

`public/resume.pdf` is generated from `resume.ts` when GitHub Actions deploys the site, then published with the rest of the pages. The file is gitignored, so a fresh clone has no PDF until `pnpm resume:pdf` runs locally or the workflow runs. Edit the résumé content, not the PDF.
