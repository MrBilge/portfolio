"use client";
import { useEffect, useState } from "react";
import { blackhole } from "./blackhole-canvas";

export default function BlackHole({ onEnter }: { onEnter: () => void }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    blackhole("#blackhole");

    return () => {
      const el = document.querySelector("#blackhole");
      if (el) el.innerHTML = "";
    };
  }, []);

  const handleClick = () => {
    setClosing(true);

    setTimeout(() => {
      onEnter();
    }, 400);
  };

  return (
    <div
      id="blackhole"
      className={`
        relative w-full h-full flex justify-center items-center
        transition-all duration-700 ease-out
        ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}
      `}
    >
      {!closing && (
        <div className="centerHover" onClick={handleClick}>
          <span className="text-white tracking-widest">LET’S TALK</span>
        </div>
      )}
    </div>
  );
}
