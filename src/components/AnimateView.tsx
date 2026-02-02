"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimateOnViewProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimateView({
  children,
  className = "",
}: AnimateOnViewProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
