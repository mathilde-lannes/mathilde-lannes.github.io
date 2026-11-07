import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Sidebar } from "@/components/sidebar";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to Content
      </a>
      <div className="mx-auto min-h-screen w-full max-w-[1100px] px-6 py-12 min-[1080px]:grid min-[1080px]:grid-cols-[minmax(280px,5fr)_minmax(0,7fr)] min-[1080px]:gap-16 min-[1080px]:px-12 min-[1080px]:py-24">
        <Sidebar />
        <main id="content" className="mt-16 flex flex-col gap-24 min-[1080px]:mt-0">
          <About />
          <Experience />
          <Work />
          <Contact />
          <footer className="text-center text-sm text-muted">
            Built with Next.js and Tailwind.
          </footer>
        </main>
      </div>
    </>
  );
}
