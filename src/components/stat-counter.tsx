"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(duration / value);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-4xl font-display font-bold">
        {prefix}
        {count}
        {suffix}
      </span>
      <div className="mt-1">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase block">
          {label}
        </span>
        <span className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground/60 uppercase block">
          {sublabel}
        </span>
      </div>
    </div>
  );
}
