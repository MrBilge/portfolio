import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import HeroSkillCard from "./HeroSkilsCard";
import Typewriter from "./TypeWriterText";

type HeroProps = {
  onScrollClick: () => void;
};

export function Hero({ onScrollClick }: HeroProps) {
  return (
    <div
      className="
    flex
    flex-col
    sm:flex-row-reverse
    lg:flex-row
    justify-between
    portrait:justify-start
    portrait:pt-32
    w-full
    min-h-dvh
    portrait:min-h-0
    portrait:h-[100vh] 
    portraith:py-48
    bg-[url('/assets/me.jpeg')]
    bg-no-repeat
    bg-bottom
    bg-cover
    xl:bg-[length:40%_auto]
     sm:bg-[length:70%_auto]

    py-40
    px-5
    lg:px-15
  "
    >
      <div className="flex flex-col justify-center  lg:gap-20  sm:w-2/5 xl:w-1/2  mt-0 ">
        <div className="hidden xl:block  w-36 h-[10px]  bg-white/10 rounded-full"></div>
        <div className="hidden xl:block space-y-5 md:space-y-10">
          <h1 className="text-3xl bg-black/60 lg:bg-transparent md:text-3xl text-amber-100 font-sans sm:font-mono ">
            I&apos;m Bilgehan
            <Typewriter />
          </h1>
          <p className="text-lg  font-sans text-white/50 tracking-widest lg:w-3/5">
            I build modern, fast, and user-friendly web experiences using
            Next.js, React, and Tailwind CSS.
            <span className="block mt-2">
              I care deeply about clean code and elegant design.
            </span>
          </p>
        </div>

        <div
          style={{ borderRadius: "50%" }}
          onClick={onScrollClick}
          className=" hidden xl:block w-max p-4 mb-10   bg-white/10 cursor-pointer transition-all duration-300 hover:scale-75"
        >
          <ChevronDownIcon className="h-9 xl:w-9 text-white/30 animate-bounce-large" />
        </div>
      </div>

      <div className="hidden xl:flex  flex-col  w-1/2 md:w-1/3 mt-20  lg:mt-10   lg:mb-60  space-y-5 xl:space-y-10 text-xs">
        <HeroSkillCard />

        {/* <div className="space-y-2">
          <h1 className="text-lg font-sans tracking-widest text-amber-100">
            About Me
          </h1>
          <p className="text-sm xl:text-lg text-gray-300 font-sans tracking-widest">
            I’m a developer who enjoys problem-solving and creating innovative
            solutions. I write code to make technology more accessible and
            closer to people.
          </p>
        </div> */}

        {/* <div className="space-y-2">
          <h1 className="text-lg font-sans tracking-widest text-amber-100">
            Follow Me
          </h1>
          <div className="flex w-max space-x-3 group text-md">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer" />
            </a>
            <a
              href="https://www.github.com/MrBilge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmet-bilgehan-eybek-874762272/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
