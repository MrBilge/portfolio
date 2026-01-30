import { useEffect, useState } from "react";

export default function Typewriter() {
  const texts = [
    "Frontend Developer - Modern & Legacy",
    "Modern Web Specialist",
    "React / Next.js Engineer",
    "Modern & Legacy Systems Developer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // YAZMA
          const next = currentText.slice(0, displayed.length + 1);
          setDisplayed(next);

          if (next === currentText) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          const next = currentText.slice(0, displayed.length - 1);
          setDisplayed(next);

          if (next === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 50,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex]);

  return (
    <span className="block mt-5 w-3/4 text-3xl font-medium">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
