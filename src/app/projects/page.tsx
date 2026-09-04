import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import ProjectTabs from "@/components/ProjectTabs";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my web and mobile development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-dvh bg-[#0b0c0e] px-5 py-6 text-white/60 md:px-10 lg:px-20 lg:py-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_at_85%_0%,rgba(252,211,77,0.09),transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Page navigation" className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="group inline-flex items-center gap-3 text-sm transition-colors hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-amber-300">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-amber-300/50"><ArrowLeftIcon className="size-4" /></span> Back to home
          </Link>
          <span className="text-xs tracking-[0.2em] text-white/40">PORTFOLIO<span className="text-amber-300">.</span></span>
        </nav>
        <header className="mb-12 mt-14 lg:mb-16 lg:mt-20">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-amber-300"><span className="h-px w-8 bg-amber-300" /> Selected work</p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Ideas turned into<br /><span className="font-serif italic text-amber-200">digital experiences.</span></h1>
            <div className="max-w-xs space-y-5 lg:pb-2">
              <p className="text-sm leading-7">A selection of my web and mobile projects. Pick a project and explore the details.</p>
              <p className="flex items-center gap-3 text-xs text-white/40"><span className="size-1.5 rounded-full bg-amber-300" /> Selected projects · Web & mobile</p>
            </div>
          </div>
        </header>
        <ProjectTabs projects={projects} />
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-7 text-xs text-white/35">
          <span>Made with care. Built to be explored.</span>
          <Link href="/" className="transition-colors hover:text-amber-300">Back to portfolio ↗</Link>
        </footer>
      </div>
    </main>
  );
}
