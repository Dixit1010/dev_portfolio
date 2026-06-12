"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/content";
import Badge from "../ui/Badge";
import { useLenisContext } from "@/providers/LenisProvider";

const PREVIEW_IMAGES: Record<string, string> = {
  travsy: "/travsy-preview.png",
  saarthi: "/saarthi-preview.png",
};

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const lenis = useLenisContext();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[110] h-[92vh] md:h-[85vh] bg-[#111] border-t border-border rounded-t-3xl overflow-y-auto px-6 md:px-8 py-10"
          >
            <div className="max-w-4xl mx-auto relative">
              <button 
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-text-muted hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="w-12 h-1 bg-border rounded-full mx-auto mb-8" />
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-4xl font-light text-white mb-4 pr-12">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="mono">{t}</Badge>
                    ))}
                  </div>
                </div>

                {PREVIEW_IMAGES[project.id] && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative w-full h-[220px] md:h-[380px] rounded-2xl overflow-hidden border border-border"
                  >
                    <Image
                      src={PREVIEW_IMAGES[project.id]}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 via-transparent to-transparent" />
                  </motion.div>
                )}

                <p className="text-text-secondary leading-relaxed text-lg whitespace-pre-wrap">
                  {project.longDescription}
                </p>

                <div className="mt-8 flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                    >
                      Live Demo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      className="border border-border text-text-secondary px-6 py-3 rounded-full text-sm hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
                    >
                      GitHub
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
