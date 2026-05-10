"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  seed?: number;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("bento-card", className)}
      style={{
        background: isHovered
          ? `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, hsl(0 0% 10.5%) 0%, hsl(0 0% 9%) 50%, hsl(0 0% 8%) 100%)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
