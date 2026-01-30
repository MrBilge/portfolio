import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";

import Avatar from "./Avatar";

export default function Footer() {
  return (
    <div
      className="w-full    bg-gradient-to-t to-white/3  text-white/50 md:px-0 py-10 lg:px-10 xl:px-30 relative before:absolute before:inset-0 
before:bg-gradient-to-t before:from-blue-500/5 before:to-transparent 
before:pointer-events-none "
    >
      <div className=" w-full p-10 gap-10  lg:gap-0 flex flex-col-reverse   md:flex-row justify-between">
        <div className="flex justify-center items-center  space-x-5 ">
          <div>
            <Avatar />
          </div>

          <div className=" flex  flex-col justify-center text-sm text-white/60  font-sans  ">
            <div className="space-y-3 ">
              <h1 className=" w-max">A. Bilgehan Eybek</h1>
              <h2 className="w-max">Modern & Legacy UI</h2>
              <div className="flex mt-2 w-max space-x-3 group">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:text-white hover:scale-110 cursor-pointer" />
                </a>
                <a
                  href="https://www.github.com/MrBilge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:text-white hover:scale-110 hover:translate-y2 cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmet-bilgehan-eybek-874762272//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:text-white hover:scale-110 hover:translate-y2 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="group  font-serif tracking-wide ">
            Get in touch
            <ArrowRightIcon className="inline w-10 h-10 text-blue-600 ml-2 transition-all duration-300 group-hover:translate-x-3" />
          </h1>

          <div className="flex flex-col md:flex-row gap-8 text-sm text-white/60">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Email
              </p>
              <a
                href="mailto:b.eybek9307@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                b.eybek9307@gmail.com
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Phone
              </p>
              <a
                href="tel:+905468810094"
                className="hover:text-white transition-colors duration-300"
              >
                +90 546 881 00 94
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 mt-10 pt-6 overflow-hidden">
        {/* moving light */}
        <div
          className="absolute top-0  w-[30%] h-[1px] 
                  bg-gradient-to-r  via-white/60
                  footer-light"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30 tracking-wider">
          <p>© 2026 Ahmet Bilgehan Eybek</p>

          <p className="flex items-center gap-2">
            Built with
            <span className="text-white/50">Next.js</span> &
            <span className="text-white/50">Tailwind</span>
          </p>
        </div>
      </div>
    </div>
  );
}
