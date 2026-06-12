"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Badge from "./ui/Badge";
import MagneticButton from "./ui/MagneticButton";
import { useLenisContext } from "@/providers/LenisProvider";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });

const ROLES = ["MERN Stack", "Embedded Systems", "Full Stack", "ML Integration"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const lenis = useLenisContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateChars = (ref: React.RefObject<HTMLElement>, delay: number) => {
        if (!ref.current) return;
        const chars = ref.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 60, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.03, duration: 0.8, ease: "power3.out", delay }
        );
      };

      animateChars(headline1Ref, 2.2);
      animateChars(headline2Ref, 2.5);

      if (sublineRef.current) {
        gsap.fromTo(
          sublineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 3.0, ease: "power2.out" }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 3.2, ease: "power2.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderSplitText = (text: string) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="char inline-block opacity-0">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  const scrollToWork = () => {
    if (lenis) {
      lenis.scrollTo("#projects", { offset: -80 });
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden border-b border-border bg-background md:bg-transparent"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-background to-background md:hidden" />

      <HeroScene />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col justify-center h-full">
        
        <div className="flex items-center gap-4 mb-8 md:mb-12 mt-20 md:mt-0">
          <Badge variant="mono">Available for opportunities</Badge>
          <div className="w-1 h-1 rounded-full bg-border-2" />
          <span className="font-mono text-xs text-text-muted">Noida, India</span>
        </div>

        <div className="flex flex-col relative z-20">
          <h1 
            ref={headline1Ref}
            className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight text-white mb-2"
            style={{ perspective: "1000px" }}
          >
            {renderSplitText("Dixit Kumar")}
          </h1>
          <h2 
            ref={headline2Ref}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-text-secondary"
            style={{ perspective: "1000px" }}
          >
            {renderSplitText("Software Engineer")}
          </h2>
        </div>

        <p 
          ref={sublineRef}
          className="max-w-lg text-text-muted text-base md:text-lg leading-relaxed mt-6 opacity-0"
        >
          Building reliable systems at scale. From embedded firmware to AI-powered web.
        </p>

        <div className="h-6 mt-4 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-0 font-mono text-sm text-text-secondary"
            >
              {ROLES[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 relative z-20">
          <div className="opacity-0">
            <MagneticButton strength={0.2}>
              <button 
                onClick={scrollToWork}
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                data-cursor="hover"
              >
                View Work ↓
              </button>
            </MagneticButton>
          </div>
          <div className="opacity-0">
            <MagneticButton strength={0.2}>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="block border border-border text-text-secondary px-6 py-3 rounded-full text-sm hover:bg-white/5 hover:text-white transition-colors"
                data-cursor="hover"
              >
                Resume
              </a>
            </MagneticButton>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-30 opacity-[0.03] pointer-events-none noise" />
    </section>
  );
}
