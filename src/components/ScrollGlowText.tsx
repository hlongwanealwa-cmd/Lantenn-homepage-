import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollGlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollGlowText({ children, className = "" }: ScrollGlowTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of this element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a rich text glow and color effect
  // - Starts at a subtle slate color
  // - Reaches full white with a beautiful warm brand glow around the screen center (0.4 to 0.6)
  // - Fades gracefully back to slate as it leaves
  const color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.42, 0.58, 0.75, 1],
    ["#4b5563", "#94a3b8", "#ffffff", "#ffffff", "#94a3b8", "#4b5563"] // gray-600 -> slate-400 -> white -> white -> slate-400 -> gray-600
  );

  const glow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.42, 0.58, 0.75, 1],
    [
      "drop-shadow(0 0 0px rgba(245,154,30,0))",
      "drop-shadow(0 0 2px rgba(245,154,30,0.1))",
      "drop-shadow(0 0 8px rgba(245,154,30,0.5)) drop-shadow(0 0 16px rgba(255,92,18,0.25))",
      "drop-shadow(0 0 8px rgba(245,154,30,0.5)) drop-shadow(0 0 16px rgba(255,92,18,0.25))",
      "drop-shadow(0 0 2px rgba(245,154,30,0.1))",
      "drop-shadow(0 0 0px rgba(245,154,30,0))"
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.42, 0.58, 0.75, 1],
    [0.98, 0.99, 1.015, 1.015, 0.99, 0.98]
  );

  return (
    <motion.p
      ref={ref}
      style={{ color, filter: glow, scale }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </motion.p>
  );
}
