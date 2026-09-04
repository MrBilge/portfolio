"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimateOnViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimateView({
  children,
  className = "",
  delay = 0.4,
}: AnimateOnViewProps) {
  const { ref, inView } = useInView({
    // Tall mobile sections may never fit 30% of their height in the viewport.
    threshold: 0,
    rootMargin: "0px 0px -40px 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
