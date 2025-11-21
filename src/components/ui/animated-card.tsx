'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={cn(
        "relative group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-secondary-900/90 to-black backdrop-blur-xl border border-secondary-800/50 rounded-2xl p-8 h-full shadow-2xl group-hover:border-primary-600/50 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
}
