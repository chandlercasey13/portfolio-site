
import BlurFade from "@/components/ui/blur-fade";
import { FadeText } from "@/components/ui/fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { data } from "@/data/resume";




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
      </main>
      
    
  );
}
