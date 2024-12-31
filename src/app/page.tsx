
import BlurFade from "@/components/ui/blur-fade";
import { FadeText } from "@/components/ui/fade-text";

import { ResumeCard } from "@/components/resume-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { data } from "@/data/resume";
import Markdown from "react-markdown";



const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
   
      <main className="">
        <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-1.5">
              <FadeText
                //delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
               // yOffset={8}
                text={`${data.name.split(" ")[0]}`}
              />
              <FadeText
                className="max-w-[600px] md:text-md"
                //delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 border">
                <AvatarImage alt={data.name} src={data.avatarUrl} />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className=" max-w-full text-pretty  text-sm ">
            {data.summary}
          </Markdown>
          <div className="flex flex-wrap gap-4 mt-4 ">
            {data.contact.social.map((social) => (
              <div
                key={social.url}
                className="flex gap-1 justify-center items-center"
              >
                <social.icon className="size-4" />
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {data.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      </main>
      
    
  );
}
