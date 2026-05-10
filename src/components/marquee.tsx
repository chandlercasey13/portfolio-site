"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const text = items.join(" • ");

  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 px-4">
          {text} • {text} •&nbsp;
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 px-4">
          {text} • {text} •&nbsp;
        </span>
      </motion.div>
    </div>
  );
}
