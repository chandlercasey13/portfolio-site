import { Icons } from "@/components/icons";

export const data = {
  name: "Chandler Casey",
  initials: "CC",
  url: "",
  location: "Bryan, Texas",
  locationLink: "",
  description:
    "Full Stack Developer proficient in TypeScript, Golang, and React/React Native.",
  summary:
    "Focused on building scalable, efficient backend systems with a strong emphasis on reliability, performance, and clean architecture. Through hands-on internship experience, I’ve contributed to real-world software used in production environments—supporting automation, system optimization, and secure data handling. My work has involved backend infrastructure, API development, and internal tooling to improve operational workflows. I'm currently pursuing a B.S. in Computer Science at Western Governors University, with a focus on software development, data structures, and system design.",
  avatarUrl: "/linkedinpic.png",
  skills: [
    "Typescript",
    "Next.js",
    "Golang",
    "Python",
    "PostgreSQL",
    "Node.js",
    "React",
    "React Native",
    "Amazon Web Services",
    'GraphQL',
   
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
        name: "Leetcode",
        url: "https://leetcode.com/u/Chandlercasey13/",
        icon: Icons.leetcode,

        navbar: true,
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
      company: "Dsalta",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Backend Software Engineering Intern",
      logoUrl: "/dsalta.svg",
      start: "Jun",
      end: "Current",
      description:
        "As a Backend Engineering Intern, I’ve been focused on backend development with an emphasis on building and maintaining robust API integrations. I’ve contributed to internal services that connect third-party platforms with our systems, ensuring seamless data flow and operational reliability. My work has supported the development of scalable integration pipelines, internal tooling, and system-wide improvements within a modern SaaS environment.",
    },
       {
      company: "Fufild",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/fufild.svg",
      start: "Jan 2025",
      end: "Current",
      description:
        "As a Software Engineering Intern, I contribute to the development of a multi-platform HR application for Web, iOS, and Android, using Typescript, Next.js, and React Native. My role involves building and optimizing application features, enhancing system functionality, and ensuring the platform delivers a seamless and efficient experience for users in a Software-as-a-Service (SaaS) environment.",
    },
    {
      company: "Projxon",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/projxonwhite.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Engaged in an internship where I assist developers with workflow optimization and contribute to tailoring applications using TypeScript, Python, and Next.js to align with client-specific requirements, ensuring efficient and customized solutions.",
    },
 
  ],
  certifications: [
    {
      company: "Certified Cloud Practioner",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Amazon Web Services",
      logoUrl: "/aws.svg",
      start: "Jan 2025",
      end: "",
      description:
        "Demonstrates foundational knowledge of cloud concepts, AWS services, security, billing, and support. Proficient in understanding core AWS services, cloud economics, and architecture best practices to support organizational cloud adoption and strategy.",
    },
    
  ],
  projects: [
    {
      title: "Condensed",
      href: "",
      dates: " 2025",
      active: true,
      description:
        "An AI-powered Chrome extension that generates concise summaries of webpage content. It enables users to quickly grasp key points of articles, blogs, and documents directly in the browser, enhancing productivity and efficiency.",
      technologies: ["TypeScript", "React", "Redis","AWS"],
      links: [
        {
          type: "Website",
          href: "https://chromewebstore.google.com/detail/condensed/bgkmnbolcblkeblallpkpofpfenciika",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pump.Fun GraphQL API",
      href: "",
      dates: " 2024",
      active: true,
      description:
        " A GraphQL endpoint designed for PumpFun Coins, providing users with advanced coin analytics. Features include retrieving sniper data, bundling statistics, and other key metrics to help users make informed decisions quickly and efficiently.",
      technologies: ["Golang","TypeScript","GraphQL",  "WebSockets"],
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