"use client";

import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { data } from "@/data/resume";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/ui/blur-fade";
import { StatCounter } from "@/components/stat-counter";
import { Marquee } from "@/components/marquee";
import { GlowCard } from "@/components/glow-card";
import GitHubCalendar from "@/components/githubcalendar";

const D = 0.08;

function ArrowIcon() {
  return (
    <svg
      className="size-4"
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
  );
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-4">
      {/* ── Row 1: Hero | Marquee + Blog + Projects ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Hero Card */}
        <BlurFade delay={D} className="md:col-span-6 md:row-span-2">
          <GlowCard className="p-6 md:p-8 h-full flex items-center gap-6">
            <div className="shrink-0">
              <Avatar className="w-28 h-28 md:w-36 md:h-36 rounded-2xl border-0 bg-gradient-to-br from-pink-400/20 to-purple-500/20">
                <AvatarImage
                  alt={data.name}
                  src={data.avatarUrl}
                  className="object-cover rounded-2xl"
                />
                <AvatarFallback className="rounded-2xl text-3xl font-display font-bold bg-gradient-to-br from-pink-400/20 to-purple-500/20">
                  {data.initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2 min-w-0">
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase whitespace-nowrap">
                Full Stack Engineer @ SW Enterprises
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                Chandler
                <br />
                Casey
              </h1>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </div>
            <Link href="/about" className="card-arrow">
              <ArrowIcon />
            </Link>
          </GlowCard>
        </BlurFade>

        {/* Marquee */}
        <BlurFade delay={D * 2} className="md:col-span-6">
          <GlowCard className="p-0 overflow-hidden">
            <Marquee
              items={[
                "FEATURED",
                "EasyBank",
                "Condensed",
                "LATEST WORK AND",
                "FEATURED",
                "Pump.Fun GraphQL",
                "Chatter",
              ]}
            />
          </GlowCard>
        </BlurFade>

        {/* Blog Card */}
        <BlurFade delay={D * 3} className="md:col-span-3">
          <Link href="/blog" className="block h-full">
            <GlowCard className="p-6 h-full flex flex-col justify-end">
              <div className="flex-1 flex flex-col items-center justify-center px-4 gap-3">
                <span className="text-muted-foreground/30 text-2xl">&#10022;</span>
                <h3 className="text-lg font-display font-bold text-muted-foreground/60">
                  Coming Soon
                </h3>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                  Articles & Thoughts
                </span>
                <h2 className="text-lg font-display font-bold mt-0.5">
                  Blog
                </h2>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </GlowCard>
          </Link>
        </BlurFade>

        {/* Projects Card */}
        <BlurFade delay={D * 4} className="md:col-span-3">
          <Link href="/projects" className="block h-full">
            <GlowCard className="p-0 h-full flex flex-col overflow-hidden">
              <div className="flex-1 bg-gradient-to-br from-blue-600/30 to-indigo-700/40 flex items-center justify-center p-6">
                <span className="font-display text-2xl font-bold text-white/90">
                  {data.projects[0]?.title}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                  Showcase
                </span>
                <h2 className="text-lg font-display font-bold mt-0.5">
                  Projects
                </h2>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </GlowCard>
          </Link>
        </BlurFade>
      </div>

      {/* ── Row 2: GitHub Calendar | Skills | Social ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* GitHub Calendar */}
        <BlurFade delay={D * 5} className="md:col-span-5">
          <Link
            href="https://github.com/chandlercasey13"
            target="_blank"
            rel="noreferrer"
            className="block h-full"
          >
            <GlowCard className="pt-8 px-8 pb-5 h-full group flex flex-col">
              <div className="flex-1 overflow-hidden flex items-center justify-end">
                <GitHubCalendar username="chandlercasey13" />
              </div>
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                    GitHub
                  </span>
                  <h2 className="text-lg font-display font-bold mt-0.5">
                    Contributions
                  </h2>
                </div>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </GlowCard>
          </Link>
        </BlurFade>

        {/* Skills Card */}
        <BlurFade delay={D * 6} className="md:col-span-4">
          <Link href="/about" className="block h-full">
            <GlowCard className="p-6 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center py-4">
                <div className="grid grid-cols-4 gap-3">
                  {data.skills.slice(0, 8).map((skill) => (
                    <div
                      key={skill}
                      className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center"
                    >
                      <span className="text-[8px] font-semibold text-muted-foreground text-center leading-tight px-0.5">
                        {skill.length > 6 ? skill.slice(0, 5) + "." : skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                  Specialization
                </span>
                <h2 className="text-lg font-display font-bold mt-0.5">
                  Skills
                </h2>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </GlowCard>
          </Link>
        </BlurFade>

        {/* Social Card */}
        <BlurFade delay={D * 7} className="md:col-span-3">
          <GlowCard className="p-6 h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center gap-4 py-4">
              {data.contact.social
                .filter((s) => s.navbar)
                .map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-muted-foreground/15 transition-colors"
                  >
                    <social.icon className="size-6 text-foreground" />
                  </Link>
                ))}
            </div>
            <div>
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                Stay With Me
              </span>
              <h2 className="text-lg font-display font-bold mt-0.5">
                Social Media
              </h2>
            </div>
          </GlowCard>
        </BlurFade>
      </div>

      {/* ── Row 3: Stats | Let's Work Together ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <BlurFade delay={D * 8} className="md:col-span-2">
          <GlowCard className="px-6 py-1.5 h-full flex items-center justify-center">
            <StatCounter value={2} suffix="+" label="YEARS" sublabel="EXPERIENCE" />
          </GlowCard>
        </BlurFade>
        <BlurFade delay={D * 9} className="md:col-span-2">
          <GlowCard className="px-6 py-1.5 h-full flex items-center justify-center">
            <StatCounter value={4} prefix="+" suffix="" label="PROJECTS" sublabel="COMPLETED" />
          </GlowCard>
        </BlurFade>
        <BlurFade delay={D * 10} className="md:col-span-2">
          <GlowCard className="px-6 py-1.5 h-full flex items-center justify-center">
            <StatCounter value={3} prefix="" suffix="x" label="AWS" sublabel="CERTIFIED" />
          </GlowCard>
        </BlurFade>

        <BlurFade delay={D * 11} className="md:col-span-6">
          <Link href="/contact" className="block h-full">
            <GlowCard className="px-8 md:px-10 py-3 md:py-4 pb-6 md:pb-8 h-full flex flex-col justify-center overflow-visible">
              <div className="space-y-1">
                <span className="text-muted-foreground/40 text-xl">&#10022;</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold overflow-visible" style={{ lineHeight: 1.3 }}>
                  Let&apos;s work
                  <br />
                  <span className="text-muted-foreground italic inline-block pb-3" style={{ lineHeight: 1.2 }}>together</span>
                </h2>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </GlowCard>
          </Link>
        </BlurFade>
      </div>

      <footer className="pt-8 pb-6 text-center">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Chandler Casey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
