import { Icons } from "@/components/icons";

export const data = {
  name: "Chandler Casey",
  initials: "CC",
  url: "",
  location: "Bryan, Texas",
  locationLink: "",
  description:
    "Full Stack Developer proficient in TypeScript, Next.js, React Native, and Node.js",
  summary:
    " Focused on building scalable, efficient, and user-centric applications for both web and mobile platforms. With a strong foundation in both frontend and backend development, I create seamless, high-performance solutions that prioritize functionality and user experience. Experienced in designing responsive interfaces and managing complex data systems, I am committed to writing clean, maintainable code and staying up to date with the latest industry practices. My approach ensures the delivery of reliable and impactful applications that meet diverse development needs.   ",
  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "Next.js",
    "Node.js",
    "Python",
    "Postgres",
    "Flask",
    "MongoDB",
    "TailwindCSS",
    "Zustand",
    "TanStack Query",
    "React Native",
    "Shadcn UI",
    "Firebase",
    "Express.js",
  ],
  contact: {
    email: "chandlercasey13@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chandlercasey13",
        icon: Icons.github,

        navbar: true,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chandler-casey1",
        icon: Icons.linkedin,

        navbar: true,
      },
     
      {
        name: "Email",
        url: "mailto: chandlercasey13@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    ],
  },

  work: [
    {
      company: "Upwork",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/upworklogo.png",
      start: "May 2024",
      end: "Current",
      description:
        "Built and maintained responsive user interfaces with Next.js and Tailwind CSS for seamless user experiences, collaborating closely with backend teams to implement features, resolve issues, and ensure a cohesive product. Leveraged AWS for efficient image uploads and storage, implemented real-time socket communication, and optimized load times to enhance frontend performance. Utilized state management tools like Zustand and Context API for efficient application state management, and developed reusable components for a clean, scalable codebase, contributing to the project’s overall maintainability.",
    },
  ],
  projects: [
    {
      title: "",
      href: "",
      dates: "2024",
      active: true,
      description:
        "",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "",
      href: "",
      dates: "2024",
      active: false,
      description:
        "",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "",
      href: "",
      dates: "2024",
      active: false,
      description:
        "",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "",
      href: "",
      dates: "2024",
      active: false,
      description:
        "",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;