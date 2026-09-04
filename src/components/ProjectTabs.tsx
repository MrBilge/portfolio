"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import type { Project } from "@/data/projects";

export default function ProjectTabs({ projects }: { projects: Project[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[selectedIndex];

  if (!project) return <p>No projects to display yet.</p>;

  return (
    <div className="grid items-start gap-8 border-t border-white/10 pt-8 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      <aside className="md:sticky md:top-8">
        <p className="mb-5 px-1 text-[11px] uppercase tracking-[0.2em] text-white/35">Selected projects</p>
        <div role="tablist" aria-label="Projects" aria-orientation="vertical" className="flex flex-col gap-2">
          {projects.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-controls={`panel-${item.id}`}
              tabIndex={selectedIndex === index ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                let nextIndex = index;
                if (event.key === "ArrowDown") nextIndex = (index + 1) % projects.length;
                else if (event.key === "ArrowUp") nextIndex = (index - 1 + projects.length) % projects.length;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = projects.length - 1;
                else return;
                event.preventDefault();
                setSelectedIndex(nextIndex);
                tabRefs.current[nextIndex]?.focus();
              }}
              className={`group flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${selectedIndex === index ? "border-amber-300/25 bg-amber-300/10 text-amber-200" : "border-transparent text-white/55 hover:border-white/10 hover:bg-white/4 hover:text-white"}`}
            >
              <span className="min-w-0 flex-1 space-y-1.5"><span className="block text-sm font-medium">{item.title}</span><span className="block text-[10px] leading-relaxed text-white/40">{item.category}</span></span>
              <ArrowUpRightIcon className={`size-4 shrink-0 transition-transform duration-300 ${selectedIndex === index ? "rotate-45 text-amber-300" : "text-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
            </button>
          ))}
        </div>
      </aside>

      {projects.map((item) => (
        <section
          key={item.id}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== project.id}
          tabIndex={0}
          className="min-w-0 space-y-8 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
        >
          {item.id === project.id && (
            <>
              <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 lg:p-9">
                <p className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-amber-200/80"><span className="size-1 rounded-full bg-amber-300" />{item.category}</p>
                <h2 className="text-4xl font-medium tracking-tight text-white lg:text-5xl">{item.title}</h2>
                <p className="mb-7 mt-5 max-w-xl text-sm leading-7 text-white/50">{item.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[11px] text-white/60">{technology}</li>
                  ))}
                </ul>
                {item.href && (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-4 py-2.5 text-xs font-medium text-black transition-colors hover:bg-amber-300">
                    Visit website <span className="sr-only">(opens in a new tab)</span><ArrowUpRightIcon className="size-4" />
                  </a>
                )}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/45">Project gallery</h3>
                <span className="text-[11px] text-white/30">Click to explore ↗</span>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {[item.img1, item.img2, item.img3].filter((src): src is string => Boolean(src)).map((src, index) => (
                  <a
                    key={src}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} — open original screenshot ${index + 1} in a new tab`}
                    className="@container group/gallery relative isolate block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#17191c] shadow-lg shadow-black/20 ring-1 ring-white/10 transition-[scale,translate,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 motion-reduce:translate-none motion-reduce:scale-none motion-reduce:transition-none"
                  >
                    <Image src={src} alt={`${item.title} — screenshot ${index + 1}`} fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/15 transition-colors duration-700 group-hover/gallery:border-amber-200/45 group-focus-visible/gallery:border-amber-200/45" />
                    <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 hidden rounded-full @min-[280px]:block border border-white/20 bg-black/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/85">
                      Project preview
                    </span>
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent px-5 pb-5 pt-20">
                      <span className="flex items-end justify-between gap-4">
                        <span className="min-w-0 space-y-1.5">
                          <span className="block text-[9px] uppercase tracking-[0.15em] text-amber-200/90">{item.category}</span>
                          <span className="block text-xl font-medium tracking-tight text-white">{item.title}</span>
                        </span>
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-[background-color,border-color,color,rotate] duration-500 group-hover/gallery:rotate-45 group-hover/gallery:border-amber-200 group-hover/gallery:bg-amber-200 group-hover/gallery:text-black group-focus-visible/gallery:border-amber-200 group-focus-visible/gallery:bg-amber-200 group-focus-visible/gallery:text-black motion-reduce:rotate-none motion-reduce:transition-none"><ArrowUpRightIcon className="size-4" /></span>
                      </span>
                      <span className="mt-4 hidden items-center justify-between border-t border-white/20 pt-3 text-[10px] text-white/65 @min-[280px]:flex">
                        <span>View original</span>
                        <span className="text-white/40">Opens in a new tab ↗</span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  );
}
