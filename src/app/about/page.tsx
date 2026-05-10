"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { data } from "@/data/resume";
import Link from "next/link";

const D = 0.06;

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 space-y-12">
      <BlurFade delay={D}>
        <div className="space-y-2">
          <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Who I Am
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">About</h1>
        </div>
      </BlurFade>

      <BlurFade delay={D * 2}>
        <div className="bento-card p-6 md:p-8 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {data.summary}
          </p>
          <p className="text-sm text-muted-foreground/70">
            Based in {data.location}
          </p>
        </div>
      </BlurFade>

      {/* Work */}
      <section>
        <BlurFade delay={D * 3}>
          <h2 className="text-2xl font-display font-bold mb-6">Experience</h2>
        </BlurFade>
        <div className="space-y-4">
          {[
            {
              company: "Southwestern Enterprises Contracting",
              title: "Full Stack Engineer",
              start: "Oct 2025",
              end: "Present",
            },
            ...data.work,
            {
              company: "General Assembly",
              title: "Software Engineering Apprentice",
              start: "May 2024",
              end: "Aug 2024",
            },
          ].map((w, i) => (
            <BlurFade key={w.company + w.title} delay={D * (4 + i)}>
              <div className="bento-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{w.company}</h3>
                    <p className="text-sm text-muted-foreground">{w.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-mono shrink-0">
                    {w.start} — {w.end}
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <BlurFade delay={D * 7}>
          <h2 className="text-2xl font-display font-bold mb-6">Education</h2>
        </BlurFade>
        <div className="space-y-4">
          {data.education.map((edu, i) => (
            <BlurFade key={edu.company} delay={D * (8 + i)}>
              <div className="bento-card p-6">
                <h3 className="text-base font-semibold">{edu.company}</h3>
                <p className="text-sm text-muted-foreground">{edu.title}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {edu.start} — {edu.end}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <BlurFade delay={D * 10}>
          <h2 className="text-2xl font-display font-bold mb-6">Skills</h2>
        </BlurFade>
        <BlurFade delay={D * 11}>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Certifications */}
      <section>
        <BlurFade delay={D * 12}>
          <h2 className="text-2xl font-display font-bold mb-6">Certifications</h2>
        </BlurFade>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.certifications.map((cert, i) => (
            <BlurFade key={cert.company} delay={D * (13 + i)}>
              <div className="bento-card p-6 h-full">
                <h3 className="text-base font-semibold">{cert.company}</h3>
                <p className="text-sm text-muted-foreground">{cert.title}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{cert.start}</p>
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
