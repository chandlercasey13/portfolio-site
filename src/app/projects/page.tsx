"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { data } from "@/data/resume";
import Link from "next/link";

const D = 0.06;

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-12">
      <BlurFade delay={D}>
        <div className="space-y-2">
          <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Showcase
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Projects
          </h1>
        </div>
      </BlurFade>

      <div className="grid md:grid-cols-2 gap-4">
        {data.projects.map((project, i) => (
          <BlurFade key={project.title} delay={D * (2 + i)}>
            <Link
              href={project.links?.[0]?.href || project.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              <div className="bento-card p-6 h-full group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.15em]">
                      {project.dates}
                    </span>
                    <h3 className="text-xl font-display font-bold mt-1 group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-full border border-border group-hover:border-muted-foreground/30 transition-colors">
                    <svg
                      className="size-4 text-muted-foreground group-hover:text-foreground transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>

      <footer className="pt-6 pb-4 text-center">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Chandler Casey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
