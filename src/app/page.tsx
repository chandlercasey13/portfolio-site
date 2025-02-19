
import BlurFade from "@/components/ui/blur-fade";
import { FadeText } from "@/components/ui/fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { data } from "@/data/resume";
import Markdown from "react-markdown";
import GitHubCalendar from '../components/githubcalendar'



const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <>
  
    
      <main className=" flex flex-col lg:max-w-2xl space-y-10 z-50 mx-auto py-12 sm:py-24 px-6 max-w-[100svw] ">
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
              <div className="pt-2">
              <FadeText
                className="max-w-[600px]  md:text-md  "
                //delay={BLUR_FADE_DELAY}
                text={data.description}
              />
              </div>
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
          <h2 className="text-xl font-bold pb-2">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className=" max-w-full text-pretty  text-sm ">
            {data.summary}
          </Markdown>
          <div className="flex flex-wrap gap-4 mt-4 ">
            {data.contact.social.map((social) => (
              <div
                key={social.url}
                className="flex gap-1 justify-center items-center hover:shadow-lg hover:bg-white/10  transition-all duration-300 ease-out rounded-lg p-1 "
              >
                <social.icon className="size-4 " />
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>
      <section id="work" >
        <div className="flex min-h-0 flex-col gap-y-3 border-none">
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
      <section id ="certifications" className="pt-0">
      <div className="flex min-h-0 flex-col gap-y-3  border-none">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          {data.certifications.map((cert, id) => (
            <BlurFade
              key={cert.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={cert.company}
                logoUrl={cert.logoUrl}
                altText={cert.company}
                title={cert.company}
                subtitle={cert.title}
                href={cert.href}
                badges={cert.badges}
                period={`${cert.start}`}
                description={cert.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      

      <section id="projects">
        <div className="space-y-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Projects</h2>
          </BlurFade>
          <BlurFade  delay={BLUR_FADE_DELAY * 11}>
          <GitHubCalendar  username="chandlercasey13"  />
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {data.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
               
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
               
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

    </main>  
    </>
    
      
      
    
  );
}
