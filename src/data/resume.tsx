import { Icons } from "@/components/icons";

export const data = {
  name: "Chandler Casey",
  initials: "CC",
  url: "",
  location: "College Station-Bryan Area, Texas",
  locationLink: "",
  description:
    "Full-stack software engineer focused on React, TypeScript, Node.js, AWS, and backend automation systems.",
  summary:
    "I build production web applications, internal tools, data workflows, and cloud services that reduce manual work and improve operational efficiency. My experience includes AI-assisted development tooling, client-facing web applications, deployment automation, lead enrichment pipelines, fraud visibility features, and admin portals for managing users, permissions, and client data. My current focus is full-stack AI tooling, product engineering, and software systems that combine practical user interfaces with reliable backend workflows.",
  avatarUrl: "/avatar.png",
  skills: [
    "Node.js",
    "Typescript",
    "React",
    "Next.js",
    "Python",
    "Amazon Web Services",
    "Cloud Computing",
    "Golang",
    "PostgreSQL",
    "MongoDB",
    "React Native",
    "GraphQL",
    "Linux",
    "Flask",
    "TailwindCSS",
    "Zustand",
    "TanStack Query",
    "Shadcn UI",
    "Firebase",
    "Java",
    "Spring Boot",
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
        navbar: false,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/chandercasey/",
        icon: Icons.instagram,
        navbar: true,
      },
    ],
  },

  education: [
    {
      company: "Georgia Institute of Technology",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Master of Science, Computer Science",
      logoUrl: "",
      start: "2026",
      end: "May 2028",
      description: "Specialization in Computing Systems.",
    },
    {
      company: "Western Governors University",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Bachelor of Science, Computer Science",
      logoUrl: "/wgu.svg",
      start: "Aug 2024",
      end: "May 2026",
      description:
        "Coursework includes data structures and algorithms, operating systems, computer architecture, backend programming, advanced Java, AI/ML, and information security.",
    },
  ],
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
  ],
  certifications: [
    {
      company: "AWS Certified Developer - Associate",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Amazon Web Services",
      logoUrl: "/aws.svg",
      start: "2025",
      end: "",
      description:
        "Validates proficiency in developing, deploying, and debugging cloud-based applications on AWS.",
    },
    {
      company: "AWS Certified Solutions Architect - Associate",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Amazon Web Services",
      logoUrl: "/aws.svg",
      start: "Oct 2025",
      end: "",
      description:
        "Validates skills in designing secure, resilient, and cost-optimized architectures on AWS.",
    },
    {
      company: "Linux Essentials",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Linux Professional Institute (LPI)",
      logoUrl: "",
      start: "Jul 2025",
      end: "",
      description:
        "Demonstrates foundational knowledge of Linux, cloud computing, and open-source tools.",
    },
    {
      company: "Java Backend Developer (Spring Boot)",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Hyperskill",
      logoUrl: "",
      start: "Sep 2025",
      end: "",
      description:
        "Validates proficiency in Java and Spring Boot for backend development.",
    },
    {
      company: "AWS Certified Cloud Practitioner",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Amazon Web Services",
      logoUrl: "/aws.svg",
      start: "Jan 2025",
      end: "",
      description:
        "Demonstrates foundational knowledge of cloud concepts, AWS services, security, billing, and support.",
    },
  ],
  projects: [
    {
      title: "EasyBank",
      href: "https://easybankfinance.com",
      dates: "2026",
      active: true,
      description:
        "A comprehensive banking application featuring card management and loan services. Built with Spring Boot and Spring Security to ensure secure authentication and authorization for financial transactions.",
      technologies: ["Java", "Spring Boot", "Spring Security", "ECS Fargate", "AWS RDS"],
      links: [
        {
          type: "Website",
          href: "https://easybankfinance.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Condensed",
      href: "",
      dates: "2025",
      active: true,
      description:
        "An AI-powered Chrome extension that generates concise summaries of webpage content. It enables users to quickly grasp key points of articles, blogs, and documents directly in the browser, enhancing productivity and efficiency.",
      technologies: ["TypeScript", "React", "Redis", "AWS"],
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
      dates: "2024",
      active: true,
      description:
        "A GraphQL endpoint designed for PumpFun Coins, providing users with advanced coin analytics. Features include retrieving sniper data, bundling statistics, and other key metrics to help users make informed decisions quickly and efficiently.",
      technologies: ["Golang", "TypeScript", "GraphQL", "WebSockets"],
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
      technologies: ["React", "Redux", "Node.js", "AWS S3", "TailwindCSS", "WebSockets"],
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
  ],
} as const;
