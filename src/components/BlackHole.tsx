"use client";
import { useEffect, useRef, useState } from "react";
import { blackhole } from "./blackhole-canvas";

export default function BlackHole({ onEnter }: { onEnter: () => void }) {
  const [closing, setClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const dispose = blackhole(container);

    return () => {
      dispose();
      if (enterTimeoutRef.current !== null) {
        clearTimeout(enterTimeoutRef.current);
        enterTimeoutRef.current = null;
      }
    };
  }, []);

  const handleClick = () => {
    if (enterTimeoutRef.current !== null) return;
    setClosing(true);

    enterTimeoutRef.current = setTimeout(() => {
      onEnter();
    }, 400);
  };

  return (
    <div
      id="blackhole"
      ref={containerRef}
      className={`
        relative overflow-hidden  w-full h-full flex justify-center items-center
        transition-all duration-700 ease-out
        ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}
      `}
    >
      {!closing && (
        <button type="button" className="centerHover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300" onClick={handleClick}>
          <span className="text-white tracking-widest">LET’S TALK</span>
        </button>
      )}
    </div>
  );
}
