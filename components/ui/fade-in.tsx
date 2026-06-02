"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({ children, className, delay = 0, direction = "up", duration = 0.7 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const offsets = {
    up:    { x: 0,   y: 36 },
    left:  { x: -48, y: 0  },
    right: { x: 48,  y: 0  },
    none:  { x: 0,   y: 0  },
  };

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
