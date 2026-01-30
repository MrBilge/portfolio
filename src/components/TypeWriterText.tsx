import { useEffect, useRef } from "react";

export default function Typewriter() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const texts = [
      "Frontend Developer - Modern & Legacy",
      "Modern Web Specialist",
      "React / Next.js Engineer",
      "Modern & Legacy Systems Developer",
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!el.current) return;

      const current = texts[textIndex];

      // Yazıyı güncelle
      el.current.textContent = current.substring(0, charIndex);

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex++;
        } else {
          // Yazı bitti bekle
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      setTimeout(type, isDeleting ? 35 : 60 + Math.random() * 60);
    };

    type();
  }, []);

  return (
    <span className="block mt-5 w-3/4 text-3xl font-medium">
      <span ref={el}></span>
      <span className="animate-pulse">|</span>
    </span>
  );
}
