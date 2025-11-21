'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function GradientButton({
  children,
  href,
  onClick,
  className,
  variant = 'primary'
}: GradientButtonProps) {
  const Component = href ? 'a' : 'button';

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-xl overflow-hidden group transition-all duration-300";

  const variantStyles = variant === 'primary'
    ? "bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 hover:shadow-2xl hover:shadow-primary-600/50"
    : "bg-gradient-to-r from-secondary-800 to-secondary-900 border border-secondary-700 hover:border-primary-600/50";

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(baseStyles, variantStyles, className)}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </Component>
  );
}
