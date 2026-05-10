import BlurFade from "@/components/ui/blur-fade";

const D = 0.06;

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 space-y-12">
      <BlurFade delay={D}>
        <div className="space-y-2">
          <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Articles & Thoughts
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Blog</h1>
        </div>
      </BlurFade>

      <BlurFade delay={D * 2}>
        <div className="bento-card p-12 flex flex-col items-center text-center gap-4">
          <span className="text-muted-foreground/30 text-4xl">&#10022;</span>
          <h2 className="text-2xl font-display font-bold text-muted-foreground/60">
            Coming Soon
          </h2>
          <p className="text-sm text-muted-foreground/40 max-w-sm">
            Posts are on the way. Check back soon.
          </p>
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
