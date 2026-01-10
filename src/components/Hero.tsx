import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";
//  import HeroRoles from "./HeroRoles";

type HeroProps = {
  onScrollClick: () => void;
};

export function Hero({ onScrollClick }: HeroProps) {
  return (
    <div className="sm:flex-reverse lg:flex  h-screen w-full justify-between bg-[url('/assets/bilge.png')] bg-no-repeat px-5 lg:px-15  bg-center ">
      <div className="flex flex-col justify-center lg:justify-start lg:gap-20  sm:w-1/2 mt-0 lg:mt-50  ">
       <div className="hidden lg:block  w-36 h-[10px]  bg-white/10 rounded-full"></div>
        <div className="hidden lg:block space-y-5 md:space-y-10">
          <h1 className="text-3xl bg-black/60 lg:bg-transparent md:text-3xl text-amber-100 font-sans sm:font-mono sm:tracking-wider">
            I&apos;m Bilgehan
            <span className="block mt-3  w-3/4">
              {/* <HeroRoles />  */}
              Modern & Legacy / UI Engineer
            </span>
          </h1>
          <p className="text-sm xl:text-lg font-sans text-gray-300 tracking-widest  lg:w-4/5     ">
            I build modern, fast, and user-friendly web experiences using
            Next.js, React, and Tailwind CSS.
            <span className="block mt-2">
              I care deeply about clean code and
              elegant design.
            </span>
          </p>
        </div>

        <div
          style={{ borderRadius: "50%" }}
          onClick={onScrollClick}
          className=" hidden lg:block w-max p-4   bg-white/10 cursor-pointer transition-all duration-300 hover:scale-75"
        >
          <ChevronDownIcon className="h-9 xl:w-9 text-white/30 animate-bounce-large" />
        </div>
      </div>

      <div className="hidden md:flex flex-col w-1/2 md:w-1/3  lg:mt-0 lg:mb-90  space-y-5 xl:space-y-10 text-xs">


   <div className="relative w-full h-full flex items-center justify-center">
  <div className="glow glow-purple" />
  <div className="glow glow-blue" />

  <div className="relative z-10 w-80 h-40 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 
                flex flex-col justify-center gap-3 p-4 text-[11px]">

  <span className=" inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10 text-sm
                   text-purple-300 tracking-wide">
    Scalable UI Systems
  </span>

  <span className="inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10    text-sm
                   text-blue-300 tracking-wide">
    Performance-Focused Design
  </span>

  <span className="inline-block w-max px-3 py-1 rounded-full 
                   bg-white/5 border border-white/10   text-sm
                   text-gray-200 tracking-wide">
    Clean & Maintainable Code
  </span>

</div>

</div>




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
