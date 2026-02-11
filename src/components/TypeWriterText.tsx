"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TEXTS = [
  "Frontend Developer - Modern & Legacy",
  "Modern Web Specialist",
  "React / Next.js Engineer",
  "Modern & Legacy Systems Developer",
];

export default function Typewriter() {
  const el = useRef<HTMLSpanElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  const { ref: heroRef, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView) {
      // Hero görünmüyorsa tamamen dur
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const type = () => {
      if (!el.current || !inView) return;

      const current = TEXTS[textIndex.current];
      el.current.textContent = current.slice(0, charIndex.current);

      if (!isDeleting.current) {
        if (charIndex.current < current.length) {
          charIndex.current++;
        } else {
          timeoutRef.current = window.setTimeout(() => {
            isDeleting.current = true;
            type();
          }, 1000);
          return;
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current--;
        } else {
          isDeleting.current = false;
          textIndex.current = (textIndex.current + 1) % TEXTS.length;
        }
      }

      timeoutRef.current = window.setTimeout(
        type,
        isDeleting.current ? 40 : 80,
      );
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView]);

  return (
    <span
      ref={heroRef}
      className="relative block mt-5   text-2xl xl:text-3xl   font-medium"
      style={{ width: "520px", maxWidth: "100%" }}
    >
      {/* layout stabilizer */}
      <span className="invisible">Modern & Legacy Systems Developer</span>

      {/* typewriter */}
      <span className="absolute left-0 top-0">
        <span ref={el} />
        <span className="ml-1 animate-cursor">|</span>
      </span>
    </span>
  );
}
