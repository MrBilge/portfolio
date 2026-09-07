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
    id: "jetbacklinks",
    title: "JetbackLinks",
    description:
      "An SEO platform connecting publishers and advertisers through backlink and content placement opportunities. The publisher dashboard brings website listings, advertising options, orders, earnings, and customer reviews together in one streamlined workspace.",
    img1: "/assets/jetbacklinks-dashboard.png",
    img2: "/assets/jetbacklinks-new-website.png",
    img3: "/assets/jetbacklinks-reviews.png",
    technologies: [],
    category: "SEO",
  },
  {
    id: "butad-akademi",
    title: "Butad Akademi",
    description:
      "An online learning platform bringing courses, educational books, and personal learning resources together. The interface connects course discovery, video lessons, progress tracking, and certificate access in one clear, accessible experience.",
    img1: "/assets/butad-akademi-course.png",
    img2: "/assets/butad-akademi-books.png",
    img3: "/assets/butad-akademi-login.png",
    technologies: [],
    category: "Web Development",
    href: "https://butadakademi.com/",
  },
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
