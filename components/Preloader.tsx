"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const enRef = useRef<HTMLHeadingElement>(null);
  const hiRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setIsLoading(false);
      },
    });

    tl.to(progressRef.current, {
      width: "50%",
      duration: 0.5,
      ease: "power2.inOut",
    })
      .to(enRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      })
      .fromTo(
        hiRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      )
      .to(progressRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to([enRef.current, hiRef.current], {
        scale: 1.1,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <section
      ref={overlayRef}
      id="preloader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="relative h-[1.2em] w-64 mb-8 flex items-center justify-center">
        <h1
          ref={enRef}
          className="absolute inset-0 flex items-center justify-center font-mono text-6xl tracking-wide text-white"
        >
          Dixit
        </h1>
        <h1
          ref={hiRef}
          className="absolute inset-0 flex items-center justify-center font-mono text-6xl tracking-wide text-white opacity-0"
        >
          दीक्षित
        </h1>
      </div>
      <div className="w-48 h-[1px] bg-border overflow-hidden">
        <div ref={progressRef} className="h-full w-0 bg-white" />
      </div>
    </section>
  );
}
