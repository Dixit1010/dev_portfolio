"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";
import Badge from "../ui/Badge";
import MagneticButton from "../ui/MagneticButton";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const renderVisual = () => {
    if (project.id === "travplan") {
      return (
        <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50 z-10" />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: [0, 90, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 bg-blue-500/30 rounded-full blur-3xl mix-blend-screen"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1], 
              x: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 bg-purple-500/30 rounded-full blur-3xl mix-blend-screen"
          />
          <div className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-mono uppercase tracking-widest">AI Powered</span>
          </div>
        </div>
      );
    }
    if (project.id === "hirexx") {
      return (
        <div className="relative w-full h-full bg-[#0a0a0a] p-6 flex flex-col justify-center">
          <div className="bg-[#111] border border-border rounded-lg p-4 font-mono text-xs shadow-2xl">
            <div className="flex gap-2 mb-4 border-b border-border pb-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-gray-300"
            >
              <span className="text-blue-400">const</span> <span className="text-yellow-300">jobListing</span> = {'{'}
              <br/>&nbsp;&nbsp;role: <span className="text-orange-300">&quot;Frontend Engineer&quot;</span>,
              <br/>&nbsp;&nbsp;auth: <span className="text-orange-300">&quot;Clerk OAuth&quot;</span>,
              <br/>&nbsp;&nbsp;rbac: <span className="text-blue-400">true</span>
              <br/>{'}'};
            </motion.div>
          </div>
        </div>
      );
    }
    if (project.id === "chatify") {
      return (
        <div className="relative w-full h-full bg-surface-2 p-6 flex flex-col justify-center gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 text-white p-3 rounded-2xl rounded-tl-sm w-3/4 text-sm shadow-md"
          >
            Hey! The real-time sockets are working perfectly.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#222] text-text-primary p-3 rounded-2xl rounded-tr-sm w-2/3 self-end text-sm border border-border shadow-md"
          >
            Awesome. Are push notifications integrated?
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-600/20 text-blue-400 p-3 rounded-2xl rounded-tl-sm w-16 text-sm flex gap-1 justify-center items-center h-10 shadow-md"
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </motion.div>
        </div>
      );
    }
    return <div className="w-full h-full bg-surface-2" />;
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onClick(project)}
      className="w-[85vw] md:w-[60vw] max-w-[800px] h-[65vh] md:h-[70vh] flex-shrink-0 bg-surface border border-border hover:border-white/20 transition-colors duration-300 rounded-3xl overflow-hidden cursor-pointer flex flex-col md:flex-row group"
      data-cursor="hover"
    >
      {/* Left Panel */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
          <Badge variant="outline">{project.year}</Badge>
        </div>
        
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">{project.title}</h3>
          <p className="text-text-muted leading-relaxed mt-4 max-w-sm line-clamp-3">
            {project.description}
          </p>
          <p className="text-sm text-text-muted mt-2 truncate hidden sm:block">
            {project.longDescription.split('\n')[0]}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tech.slice(0, 4).map((t, i) => (
              <Badge key={i} variant="mono">{t}</Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="mono">+{project.tech.length - 4}</Badge>
            )}
          </div>
          
          <div className="flex items-center gap-6">
            <MagneticButton strength={0.1}>
              <span className="font-mono text-sm text-white group-hover:text-blue-400 transition-colors pointer-events-none">
                View Project &rarr;
              </span>
            </MagneticButton>
            {project.githubUrl && (
              <MagneticButton strength={0.1}>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden md:block w-[40%] border-l border-border bg-[#0a0a0a] relative overflow-hidden">
        {renderVisual()}
      </div>
    </motion.div>
  );
}
