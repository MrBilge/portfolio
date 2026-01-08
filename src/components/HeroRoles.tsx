"use client";

import { useEffect, useRef } from "react";

const roles = [
  "Modern Frontend Developer",
  "Legacy UI Developer",
  "React / Next.js Specialist",
  "ASP.NET MVC UI Engineer",
];

export default function HeroRoles() {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const roleIndexRef = useRef(0);

  useEffect(() => {
    if (!spanRef.current) return;

    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const role = roles[roleIndexRef.current];

      spanRef.current!.textContent = role.slice(0, ++charIndex);

      if (charIndex < role.length) {
        timeout = setTimeout(type, 60);
      } else {
        timeout = setTimeout(() => {
          spanRef.current!.textContent = "";
          charIndex = 0;
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
          type();
        }, 1500);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return <span ref={spanRef} className="block h-[2.2em]" />;
}
