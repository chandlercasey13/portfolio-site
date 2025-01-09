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
    "React Native",
    "Amazon Web Services",
    "Python",
    "Postgres",
    "Flask",
    "MongoDB",
    "TailwindCSS",
    "Zustand",
    "TanStack Query",
    
    "Shadcn UI",
    "Firebase",
    
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
      {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~012f0b21236c113c1c",
        icon: Icons.upwork,

        navbar: true,
      },
     
    ],
  },

  work: [
    {
      company: "PROJXON",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Application Specialist Intern",
      logoUrl: "/projxon.jpg",
      start: "Dec 2024",
      end: "Current",
      description:
        "Currently engaged in an internship, where I assist developers with workflow optimization and contribute to tailoring applications to align with client-specific requirements, ensuring efficient and customized solutions.",
    },
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
        "I specialize in delivering high-quality software solutions tailored to client needs. From ideation to deployment, I build scalable, efficient applications that meet business goals and exceed user expectations. With a keen focus on clean code and best practices, I ensure reliable, bug-free applications that drive results and enhance user experiences.",
    },
  ],
  projects: [
    {
      title: "Cryptocurrency Metrics (In Progress)",
      href: "",
      dates: "2024",
      active: true,
      description:
        " A real-time cryptocurrency metrics app for instant updates and dynamic tracking of promising coins on Pump.Fun",
      technologies: ["TypeScript", "Next.js", "TailwindCSS", "WebSockets"],
      links: [
        {
          type: "Website",
          href: "https://pumpfun-graduated-430c947ecf6a.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Chatter",
      href: "https://chatter-messaging.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "Chatter is a dynamic chat app built with React, Node.js, and Tailwind CSS. It offers real-time messaging and an intuitive interface for seamless conversations.",
      technologies: ["React", "Redux", "Node.js", "AWS S3", "TailwindCSS", "WebSockets",],
      links: [
        {
          type: "Website",
          href: "https://chatter-messaging.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hamiter Construction Site",
      href: "",
      dates: "2024",
      active: true,
      description:
        "A sleek construction site built for Hamiter Construction using Next.js, TypeScript, and Tailwind CSS featuring dynamic project showcases and  email contact service. ",
      technologies: ["TypeScript", "Next.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://chandlercasey13.github.io/hamiter-construction-site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SureLock",
      href: "",
      dates: "2024",
      active: true,
      description:
        "SureLock is a secure password manager built with Django and Python, featuring high-level encryption, easy password generation, and safe sharing for your sensitive data.",
      technologies: ["Python", "Django"],
      links: [
        {
          type: "Website",
          href: "https://surelock-password-app-fcf68c8b901a.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
  ],
} as const;