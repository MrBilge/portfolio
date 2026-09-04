export type Project = {
  id: string;
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3?: string;
  technologies: string[];
  category: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "urbon-pop",
    title: "Urbon Pop",
    description:
      "A mobile application for billboard tracking. Browse the project screens below to explore its mobile interface.",
    img1: "/assets/urbanpop1.jpg",
    img2: "/assets/urbanpop2.png",
    img3: "/assets/urbanpop3.png",
    technologies: ["React Native", "Expo"],
    category: "Mobile Development",
  },
  {
    id: "green-drive",
    title: "Green Drive",
    description:
      "An electric vehicle charging project spanning web and mobile development. These screens showcase the website and application design.",
    img1: "/assets/greendrive1.png",
    img2: "/assets/greendrive.png",
    img3: "/assets/greenyeni.PNG",
    technologies: ["React", "React Native", "Expo"],
    category: "Mobile / Web Development",
    href: "https://greendrive.com.tr/",
  },
  {
    id: "sarj-noktasi",
    title: "Şarj Noktası",
    description:
      "An electric vehicle charging website built with Next.js. Explore the project’s pages and visual design in the gallery below.",
    img1: "/assets/eSarj4.png",
    img2: "/assets/eSarj2.png",
    img3: "/assets/eSarj3.png",
    technologies: ["Next.js"],
    category: "Web Development",
  },
];
