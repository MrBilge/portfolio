import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";
//  import HeroRoles from "./HeroRoles";

type HeroProps = {
  onScrollClick: () => void;
};

export function Hero({ onScrollClick }: HeroProps) {
  return (
    <div className="flex h-screen w-full justify-between bg-[url('/assets/bilge.png')] bg-no-repeat px-10 md:px-20 xl:py-10  bg-center ">
      <div className="flex flex-col justify-end md:justify-start  mb-30    gap-5 sm:w-1/2  sm:mt-30  ">
        <div className="hidden sm:block bg-white w-32 h-1"></div>
        <div className="block space-y-5 md:space-y-10">
          <h1 className="text-3xl md:text-3xl text-amber-100 font-sans sm:font-mono sm:tracking-wider">
            I&apos;m Bilgehan
            <span className="block mt-1">
               {/* <HeroRoles />  */}
               Modern & Legacy / Frontend Developer
            </span>
          </h1>
          <p className="text-sm xl:text-lg font-sans text-gray-300 tracking-widest bg-black/60 sm:bg-transparent p-2 rounded ">
            I build modern, fast, and user-friendly web experiences using
            Next.js,
            <span className="block mt-2">
              React, and Tailwind CSS. I care deeply about clean code and
              elegant design.
            </span>
          </p>
        </div>

        <div
          style={{ borderRadius: "50%" }}
          onClick={onScrollClick}
          className="w-max p-4 md:p-6 xl:p-10  sm:bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-75"
        >
          <ChevronDownIcon className="h-9 xl:w-9 animate-bounce-large" />
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-1/2 md:w-1/3 mt-30 space-y-5 xl:space-y-10 text-xs">
        <div className="space-y-2">
          <h1 className="text-lg font-sans tracking-widest text-amber-100">
            About Me
          </h1>
          <p className="text-sm xl:text-lg text-gray-300 font-sans tracking-widest">
            I’m a developer who enjoys problem-solving and creating innovative
            solutions. I write code to make technology more accessible and
            closer to people.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-lg font-sans tracking-widest text-amber-100">
            My Work
          </h1>
          <p className="text-sm xl:text-lg text-gray-300 font-sans tracking-widest">
            A selection of projects where I focus on building clean, responsive,
            and user-friendly interfaces. My work includes both personal
            projects and internal applications developed for corporate
            environments.
          </p>
        </div>

        <div className="space-y-2">
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
        </div>
      </div>
    </div>
  );
}
