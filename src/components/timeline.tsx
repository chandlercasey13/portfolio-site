"use client";

import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

interface TimelineItem {
  organization: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  dotColor: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-border" />
      
      {/* Right side decorative line for symmetry */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-1 bg-border opacity-30" /> */}
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <BlurFade key={index} delay={index * 0.1}>
            <div className="group relative flex items-start cursor-pointer">
              {/* White dot - positioned absolutely to align with line center */}
              <div className="absolute left-[15px] z-10 flex-shrink-0 -translate-x-1/2">
                <div
                  className={cn(
                    "w-3.5 h-3.5 rounded-full border-2 border-background bg-white",
                    "transition-all duration-300 ease-out",
                    "group-hover:w-5 group-hover:h-5"
                  )}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 pl-8 pr-8 pt-0.5">
                <div className="space-y-1">
                  <h3 className="text-base font-semibold leading-tight">{item.organization}</h3>
                  <p className="text-sm text-muted-foreground leading-tight">{item.role}</p>
                  <p className="text-sm text-muted-foreground leading-tight mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Right side date display for visual balance */}
              <div className="absolute right-0 top-0.5 text-right">
                <div className="text-xs text-muted-foreground/60 font-mono tabular-nums pr-1">
                  {item.startDate} - {item.endDate}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

