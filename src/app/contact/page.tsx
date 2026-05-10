"use client";

import BlurFade from "@/components/ui/blur-fade";
import { data } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";

const D = 0.06;

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 space-y-12">
      <BlurFade delay={D}>
        <div className="text-center space-y-4 pt-10">
          <span className="text-muted-foreground/40 text-3xl">&#10022;</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Let&apos;s work
            <br />
            <span className="text-muted-foreground italic pb-2 inline-block" style={{ lineHeight: 1.8 }}>together</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            I&apos;m always open to new opportunities, interesting projects, and
            collaborations. Let&apos;s create something great.
          </p>
        </div>
      </BlurFade>

      <div className="grid sm:grid-cols-2 gap-4">
        <BlurFade delay={D * 2}>
          <Link
            href={`mailto:${data.contact.email}?subject=Let's%20Connect&body=Hi%20Chandler%2C%0A%0AI%20wanted%20to%20reach%20out%20about...`}
            className="block"
          >
            <div className="bento-card p-8 group h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-muted-foreground/10 transition-colors">
                <Icons.email className="size-7 text-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {data.contact.email}
              </p>
            </div>
          </Link>
        </BlurFade>

        <BlurFade delay={D * 3}>
          <Link
            href={data.contact.social.find((s) => s.name === "LinkedIn")?.url || "#"}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="bento-card p-8 group h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-muted-foreground/10 transition-colors">
                <Icons.linkedin className="size-7 text-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Connect with me
              </p>
            </div>
          </Link>
        </BlurFade>

        <BlurFade delay={D * 4}>
          <Link
            href="https://github.com/chandlercasey13"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="bento-card p-8 group h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-muted-foreground/10 transition-colors">
                <Icons.github className="size-7 text-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold">GitHub</h3>
              <p className="text-sm text-muted-foreground mt-1">
                View my code
              </p>
            </div>
          </Link>
        </BlurFade>

        <BlurFade delay={D * 5}>
          <Link
            href={data.contact.social.find((s) => s.name === "Leetcode")?.url || "#"}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="bento-card p-8 group h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-muted-foreground/10 transition-colors">
                <Icons.leetcode className="size-7 text-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold">Leetcode</h3>
              <p className="text-sm text-muted-foreground mt-1">
                View my solutions
              </p>
            </div>
          </Link>
        </BlurFade>
      </div>

      <BlurFade delay={D * 6}>
        <div className="bento-card p-6">
          <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Stay With Me
          </span>
          <h2 className="text-xl font-display font-bold mt-1 mb-4">
            Social Media
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.contact.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-secondary hover:bg-muted-foreground/10 rounded-xl px-5 py-3 transition-colors"
              >
                <social.icon className="size-5" />
                <span className="text-sm font-medium">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </BlurFade>

      <footer className="pt-6 pb-4 text-center">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Chandler Casey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
