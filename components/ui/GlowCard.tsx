"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div 
      className={cn(
        "group relative bg-surface border border-border rounded-2xl transition-colors duration-300 hover:border-border-2",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ boxShadow: "0 0 40px rgba(255,255,255,0.04)" }} />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
