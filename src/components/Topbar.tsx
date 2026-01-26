"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

type TopbarProps = {
  onScrollClick: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: Record<string, React.RefObject<HTMLDivElement | null>>;
};

export default function Topbar({ onScrollClick, refs }: TopbarProps) {
  const menuItem = [
    {
      name: "About",
      ref: refs.aboutRef,
    },
    {
      name: "My Skills",
      ref: refs.mySkillsRef,
    },
    {
      name: "Portfolio",
      ref: refs.portfolioRef,
    },

    {
      name: "Contact",
      ref: refs.contactRef,
    },
  ];
  return (
    <div className="sticky top-0  z-50 flex justify-between bg-black px-5  md:px-10">
      <Logo />

      <div className="group hidden lg:flex justify-between gap-10 items-center text-white/70 font-serif">
        {menuItem.map((item, index) => (
          <p
            key={index}
            onClick={() => onScrollClick(item.ref)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX < rect.left + rect.width / 2 ? -1 : 1;
              e.currentTarget.style.transform = `translateX(${
                x * 6
              }px) translateY(-4px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0,0)";
            }}
            className="
        transition-all duration-300
      
       cursor-pointer
        group-hover:opacity-40
        hover:!opacity-100 hover:text-white hover:scale-110
        hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.6)]
      "
          >
            {item.name}
          </p>
        ))}
      </div>

      <MobileFullMenu onScrollClick={onScrollClick} refs={refs} />
    </div>
  );
}

function MobileFullMenu({ onScrollClick, refs }: TopbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    { name: "About", ref: refs.aboutRef },
    { name: "My Skills", ref: refs.mySkillsRef },
    { name: "Portfolio", ref: refs.portfolioRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <>
      <button
        className="lg:hidden z-50 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 second-bg text-white flex flex-col items-center justify-center gap-12 z-40"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            {menuItem.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    onScrollClick(item.ref);
                  }, 300);
                }}
                className="text-3xl font-serif tracking-wider cursor-pointer hover:text-gray-400 transition"
              >
                {item.name}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
