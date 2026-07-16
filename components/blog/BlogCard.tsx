"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog";
import Badge from "../ui/Badge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.a
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, boxShadow: "0 8px 40px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.1)" }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex-shrink-0 w-[300px] md:w-[360px] bg-surface border border-border rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
      data-cursor="hover"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)" }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-text-muted">{post.date}</span>
          <span className="font-mono text-xs text-text-muted">{post.readTime}</span>
        </div>

        <h3 className="text-xl font-light text-white leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag, i) => (
            <Badge key={i} variant="mono">{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-sm text-white group-hover:text-emerald-400 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.38-2.88-3.38-6.42s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
          Read on Medium
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </motion.a>
  );
}
