"use client";

import { useEffect, useRef } from "react";

const TEXTS = [
  "Frontend Developer - Modern & Legacy",
  "Modern Web Specialist",
  "React / Next.js Engineer",
  "Modern & Legacy Systems Developer",
];

export default function Typewriter() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      if (!el.current) return;

      const current = TEXTS[textIndex];
      el.current.textContent = current.slice(0, charIndex);

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex++;
        } else {
          timeoutId = window.setTimeout(() => {
            isDeleting = true;
            type();
          }, 1000);
          return;
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % TEXTS.length;
        }
      }

      timeoutId = window.setTimeout(type, isDeleting ? 40 : 80);
    };

    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span
      className="relative block mt-5 text-3xl font-medium"
      style={{ width: "520px", maxWidth: "100%" }}
    >
      {/* layout stabilizer (görünmez placeholder) */}
      <span className="invisible">Modern & Legacy Systems Developer</span>

      {/* gerçek typewriter */}
      <span className="absolute left-0 top-0">
        <span ref={el} />
        <span className="ml-1 inline-block animate-cursor">|</span>
      </span>
    </span>
  );
}
