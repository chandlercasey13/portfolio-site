import { Icons } from "@/components/icons";

export const data = {
  name: "Chandler Casey",
  initials: "CC",
  url: "",
  location: "Bryan, Texas",
  locationLink: "",
  description:
    "Full Stack Engineer proficient in TypeScript, Next.js, and Node.js, committed to building highly functional, scalable, and data-efficient applications that prioritize exceptional user experience and performance",
  summary:
    "A Full Stack engineer, specialize in building dynamic web applications using TypeScript, Next.js, and React. I love using Tailwind CSS to create responsive designs and manage data with PostgreSQL, which keeps everything running smoothly. I&apos;m all about writing clean code and keeping up with the latest trends, aiming to deliver high-quality projects that users actually enjoy—without any pesky bugs, of course!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
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
        url: "",
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
      company: "",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Aug 2024",
      end: "Nov 2024",
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