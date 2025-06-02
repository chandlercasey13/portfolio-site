import { Icons } from "@/components/icons";

export const data = {
  name: "Chandler Casey",
  initials: "CC",
  url: "",
  location: "Bryan, Texas",
  locationLink: "",
  description:
    "Software Engineer focused on backend systems with proficiency in Golang, TypeScript, and cloud infrastructure.",
  summary:
    "Focused on building scalable, efficient backend systems with an emphasis on reliability, performance, and clean architecture. During internships at Fufild and Projxon, I implemented a high-performance web scraper in Golang using OCR and goroutines to extract structured data from unstructured sources at scale. I also engineered robust APIs, designed a Node.js mail server for scalable communication, and contributed to backend systems that improved security, data flow, and workflow automation. I'm currently pursuing a B.S. in Computer Science at Western Governors University, concentrating on software development, data structures, and system design.",
  avatarUrl: "/me.png",
  skills: [
    "Golang",
    "Typescript",
    "Java",
    "Amazon Web Services",
    "PostgreSQL",
    "Node.js",
    "MongoDB",
    "Next.js",
    "Python",
    "React",
    "React Native",
    'GraphQL',
    "Flask",
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
  url: "mailto:chandlercasey13@gmail.com?subject=Let's%20Connect&body=Hi%20Chandler%2C%0A%0AI%20wanted%20to%20reach%20out%20about...",
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

 education: [
       {
      company: "Western Governors University",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Bachelor's Degree of Computer Science",
      logoUrl: "/wgu.svg",
      start: "Expected: Aug 2026",
      end: "Current",
      description:
        "Currently pursuing a Computer Science degree with a focus on backend development, system architecture, and secure software design. Coursework includes data structures and algorithms, operating systems, computer architecture, backend programming, advanced Java, AI/ML, and information security. The program emphasizes applied problem-solving, software engineering principles, and collaborative project development aligned with industry needs.",
    },],
  work: [
       {
      company: "Fufild",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/fufild.svg",
      start: "Jan",
      end: "Jun 2025",
      description:
        "As a Software Engineering Intern, I worked on backend systems that improved data processing, platform security, and operational efficiency. I developed tools using Golang and concurrent programming to automate data extraction, and contributed to systems that enhanced cross-platform tracking and backend performance. I also worked with TypeScript and Next.js to support internal tooling and ensure seamless integration within a modern SaaS environment.",
    },
    {
      company: "PROJXON",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/projxonwhite.png",
      start: "Sep ",
      end: "Dec 2024",
      description:
        "Engaged in an internship, where I helped design and deploy an internal mail server in Node.js to streamline communications and outreach, and worked with TypeScript, and Next.js to support internal tooling and data tracking systems. My contributions enabled more efficient client data access and improved the reliability and scalability of internal processes.",
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