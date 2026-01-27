"use client";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { useRef } from "react";
import SkillCards from "./SkillCard";

export default function MySkills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const MySkills = [
    {
      icon: (
        <img src="/assets/html5.png" alt="HTML & CSS" className="w-20 h-20" />
      ),
      name: "HTML & CSS",
      description:
        "Building semantic, accessible, and responsive layouts with a strong focus on clean structure and cross-browser compatibility.",
    },

    {
      icon: <img src="/assets/js.png" alt="JavaScript" className="w-20 h-20" />,
      name: "JavaScript (ES6+)",
      description:
        "Developing dynamic and interactive web features using modern JavaScript practices and clean, maintainable code.",
    },
    {
      icon: (
        <img src="/assets/typeScript.png" alt="jQuery" className="w-20 h-20" />
      ),
      name: "TypeScript",
      description:
        "Building scalable and maintainable applications with static typing, strong tooling, and improved developer experience across modern frontend projects.",
    },
    {
      icon: (
        <img
          src="/assets/tailwind.png"
          alt="Tailwind CSS"
          className="w-20 h-20"
        />
      ),
      name: "Tailwind CSS",
      description:
        "Creating consistent and responsive user interfaces efficiently using utility-first CSS and modern design principles.",
    },
    {
      icon: <img src="/assets/react.png" alt="React" className="w-20 h-20" />,
      name: "React",
      description:
        "Building reusable components and interactive user interfaces with a focus on performance, scalability, and maintainability.",
      wrapper: true,
    },
    {
      icon: (
        <img src="/assets/nextjs.png" alt="Next.js" className="w-20 h-20" />
      ),
      name: "Next.js",
      description:
        "Developing modern web applications with optimized routing, server-side rendering, and SEO-friendly architecture.",
      wrapper: true,
    },

    {
      icon: <img src="/assets/jquery.png" alt="jQuery" className="w-20 h-20" />,
      name: "jQuery (Legacy UI & AJAX)",
      description:
        "Maintaining and enhancing legacy interfaces with DOM manipulation, event handling, and AJAX-based workflows.",
    },
    {
      icon: (
        <img
          src="/assets/aspnet.png"
          alt="ASP.NET MVC / Razor Pages"
          className="w-24 h-20"
        />
      ),
      name: "ASP.NET MVC / Razor Pages",
      description:
        "Developing front-end user interfaces for enterprise web applications using Razor views and MVC architecture.",
    },

    {
      icon: (
        <img
          src="/assets/expo.png"
          alt="React Native Expo"
          className="w-20 h-20"
        />
      ),
      name: "React Native (Expo)",
      description:
        "Building cross-platform mobile applications with reusable components and a streamlined development workflow.",
    },
    {
      icon: <img src="/assets/figma.png" alt="Figma" className="w-14 h-20" />,
      name: "Figma",
      description:
        "Designing and translating UI concepts into clean, developer-friendly components with attention to layout and usability.",
    },
    {
      icon: (
        <img
          src="/assets/github.png"
          alt="Git & GitHub"
          className="w-32 h-20"
        />
      ),
      name: "Git & GitHub",
      description:
        "Managing version control, collaboration, and clean commit workflows across personal and corporate projects.",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-dvh w-full bg-white/4   justify-center items-center px-5 lg:px-20 ">
      <div className="flex flex-col space-y-5 w-full text-white/70  ">
        <h3 className="text-xl">
          <span className="text-2xl  text-blue-600">{`//`}</span> My Skills
        </h3>

        <div className="lg:flex space-y-5 justify-between md:w-1/2 ">
          <h1 className="text-2xl lg:text-4xl font-semibold flex items-center ">
            My extensive list of skills
          </h1>

          <div className="flex h-max gap-2 ">
            <button
              onClick={() => handleScroll("left")}
              className="rounded-3xl p-5 bg-gray-800 hover:bg-cyan-600 transition-all duration-300 hover:scale-75 cursor-pointer"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="rounded-3xl p-5 bg-gray-800  hover:bg-cyan-600  transition-all duration-300 hover:scale-75 cursor-pointer"
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={scrollRef}
          className="flex  overflow-x-auto  gap-5 mt-10 w-full "
        >
          {MySkills.map((item, index) => (
            <SkillCards key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
