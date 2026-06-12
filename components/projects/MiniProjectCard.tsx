"use client";

import GlowCard from "../ui/GlowCard";
import Badge from "../ui/Badge";
import type { Project } from "@/data/content";

interface MiniProjectCardProps {
  project: Project;
}

export default function MiniProjectCard({ project }: MiniProjectCardProps) {
  return (
    <GlowCard className="p-8 flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-light text-white">{project.title}</h4>
          <span className="font-mono text-xs text-text-muted">{project.year}</span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed mt-4">
          {project.description}
        </p>
      </div>
      
      <div className="mt-auto pt-6 flex justify-between items-center">
        <div className="flex gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <Badge key={i} variant="mono">{t}</Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="mono">+{project.tech.length - 3}</Badge>
          )}
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="text-text-muted hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="text-text-muted hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
