"use client";

import BlurFade from "@/components/ui/blur-fade";
import { data } from "@/data/resume";

const D = 0.06;

const timeline = [
  {
    org: "Georgia Institute of Technology",
    role: "M.S. Computer Science — Computing Systems",
    date: "2026 — May 2028",
    description: "",
  },
  {
    org: "Southwestern Enterprises Contracting",
    role: "Full Stack Engineer",
    date: "Oct 2025 — Present",
    description:
      "As a Full Stack Engineer, I architected a Node.js orchestration layer with a React GUI for an AI-assisted Astro website editor, integrating Claude Code and visual element selection to shorten client first design iterations from 7 days to 4 days. I built a Core Web Vitals optimization service for Astro sites, using Node.js and Claude Code to audit LCP, CLS, and load-performance issues, apply targeted source fixes, and reduce tuning time by 50%. I also created a React workflow dashboard for Astro site delivery, improving process visibility and standardizing project progression from intake to publishing.",
  },
  ...data.work.map((w) => ({
    org: w.company,
    role: w.title,
    date: `${w.start} — ${w.end}`,
    description: w.description,
  })),
  {
    org: "Western Governors University",
    role: "B.S. Computer Science",
    date: "Aug 2024 — May 2026",
    description: "",
  },
  {
    org: "General Assembly",
    role: "Software Engineering Apprentice",
    date: "May 2024 — Aug 2024",
    description:
      "480 hours of hands-on coding bootcamp training in full-stack development.",
  },
  {
    org: "Hotel McCoy",
    role: "Maintenance Manager",
    date: "Jan 2023 — May 2024",
    description:
      "Managed maintenance operations, vendor coordination, and issue resolution across a customer-facing hospitality environment.",
  },
  {
    org: "BH",
    role: "Maintenance Technician",
    date: "Jan 2022 — Dec 2023",
    description:
      "Performed preventative maintenance, repairs, and service requests across residential property units.",
  },
  {
    org: "University of North Texas",
    role: "General Coursework",
    date: "2018 — 2020",
    description: "",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 space-y-12">
      <BlurFade delay={D}>
        <div className="space-y-2">
          <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Career Path
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Experience
          </h1>
        </div>
      </BlurFade>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <BlurFade key={item.org + item.role} delay={D * (2 + i)}>
              <div className="relative pl-12">
                <div className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full bg-foreground border-2 border-background" />
                <div className="bento-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold">{item.org}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground/60 font-mono shrink-0">
                      {item.date}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground/80 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      <section>
        <BlurFade delay={D * 12}>
          <h2 className="text-2xl font-display font-bold mb-6">
            Certifications
          </h2>
        </BlurFade>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.certifications.map((cert, i) => (
            <BlurFade key={cert.company} delay={D * (13 + i)}>
              <div className="bento-card p-6 h-full">
                <h3 className="text-base font-semibold">{cert.company}</h3>
                <p className="text-sm text-muted-foreground">{cert.title}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {cert.start}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <footer className="pt-6 pb-4 text-center">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Chandler Casey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
