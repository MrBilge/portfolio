import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";

import Avatar from "./Avatar";

export default function Footer() {
  return (
    <div className="w-full  flex  md:items-center bg-white/2 text-white/50 md:px-0 lg:px-10 xl:px-30 ">
      <div className=" w-full p-10 gap-10  lg:gap-0 flex flex-col-reverse   md:flex-row justify-between">
        <div className="flex justify-center items-center  space-x-5 ">
          <div>
            <Avatar />
          </div>

          <div className=" flex  flex-col justify-center text-sm">
            <div className="space-y-3 ">
              <h1 className="font-serif tracking-widest w-max">
                A. Bilgehan Eybek
              </h1>
              <h2 className="tracking-widest font-serif w-max">
                Web UI Engineer
              </h2>
              <div className="flex mt-2 w-max space-x-3 group">
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
                  {" "}
                  <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmet-bilgehan-eybek-874762272//"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center space-y-5">
          <h1 className=" group  font-serif tracking-wide ">
            Get in touch
            <ArrowRightIcon className="inline w-10 h-10 text-blue-600 ml-2 transition-all duration-300 group-hover:translate-x-3" />
          </h1>

          <div className=" flex gap-5 md:gap-10 text-sm ">
            <div className="space-y-2 tracking-wide  font-semibold">
              <p className="">EMAIL</p>
              <div className="group w-max flex items-center">
                <p className=" border-b border-gray-500 transition-all duration-300 hover:border-white w-max py-1 ">
                  b.eybek9307@gmail.com
                </p>
                <span>
                  <ArrowRightIcon className="hidden sm:block w-6 h-6 ml-2 transition-all duration-300 group-hover:translate-x-3" />
                </span>
              </div>
            </div>
            <div className="w-full space-y-2 font-semibold">
              <p className="">GSM</p>
              <div className="group w-max flex items-center">
                <p className="border-b border-gray-500 transition-all duration-300 hover:border-white w-max py-1 ">
                  +90 546 881 00 94
                </p>
                <span>
                  <ArrowRightIcon className="hidden sm:block w-6 h-6 ml-2 transition-all duration-300 group-hover:translate-x-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
