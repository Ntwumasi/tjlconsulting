'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export function ServiceCard({ icon, title, description, delay = 0, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className={cn("relative group cursor-pointer", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-primary-700/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full bg-gradient-to-br from-secondary-900/80 to-secondary-950/80 backdrop-blur-xl border border-secondary-800/50 rounded-2xl p-8 overflow-hidden group-hover:border-primary-600/50 transition-all duration-300">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-all duration-500" />

        <div className="relative">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-600/20"
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
