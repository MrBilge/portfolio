// "use client";
// import { useEffect, useState } from "react";

// const roles = [
//   "Modern Frontend Developer",
//   "Legacy UI Developer",
//   "React / Next.js Specialist",
//   "ASP.NET MVC UI Engineer",
// ];

// export default function HeroRoles() {
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     const currentRole = roles[roleIndex];

//     if (charIndex < currentRole.length) {
//       const timeout = setTimeout(() => {
//         setText(currentRole.slice(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);
//       }, 40);

//       return () => clearTimeout(timeout);
//     }

//     const pause = setTimeout(() => {
//       setCharIndex(0);
//       setText("");
//       setRoleIndex((prev) => (prev + 1) % roles.length);
//     }, 1500);

//     return () => clearTimeout(pause);
//   }, [charIndex, roleIndex]);

//   return (
//     <span className="block h-[2.2em] " aria-live="polite">
//       {text}
//     </span>
//   );
// }
