'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  accent,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        {title.split(accent || '').map((part, i) => (
          <span key={i}>
            {i > 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">{accent}</span>}
            {part}
          </span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "text-xl text-gray-400 leading-relaxed",
            centered && "max-w-3xl mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
