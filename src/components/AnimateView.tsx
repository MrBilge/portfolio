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
    threshold: 0.3, // yüzde 20’si görünürse tetiklenir
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
