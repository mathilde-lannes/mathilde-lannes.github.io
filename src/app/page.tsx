import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { person } from "@/content/resume";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{person.name}</h1>
      <Experience />
      <Work />
    </main>
  );
}
