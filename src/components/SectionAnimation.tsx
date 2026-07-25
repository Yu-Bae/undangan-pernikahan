"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const SectionAnimation: React.FC<SectionAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  id,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
