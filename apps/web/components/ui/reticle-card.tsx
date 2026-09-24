'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ReticleCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  reticleVariant?: 'cyan' | 'alert' | 'muted';
}

export const ReticleCard: React.FC<ReticleCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  reticleVariant = 'cyan',
  ...motionProps
}) => {
  const bracketColors = {
    cyan: 'border-cyan/50 group-hover:border-cyan',
    alert: 'border-risk-red/60 group-hover:border-risk-red',
    muted: 'border-defense-600 group-hover:border-cyan/40',
  };

  const bracketClass = bracketColors[reticleVariant];

  return (
    <motion.div
      className={`group relative bg-defense-800/80 backdrop-blur-md border border-defense-700/70 p-5 md:p-6 transition-all duration-300 ${
        glowOnHover ? 'hover:border-cyan/40 hover:shadow-[0_0_25px_rgba(34,211,199,0.06)]' : ''
      } ${className}`}
      {...motionProps}
    >
      {/* Reticle Corner Brackets */}
      <span
        className={`absolute -top-px -left-px w-2.5 h-2.5 border-t-2 border-l-2 transition-colors duration-200 pointer-events-none ${bracketClass}`}
      />
      <span
        className={`absolute -top-px -right-px w-2.5 h-2.5 border-t-2 border-r-2 transition-colors duration-200 pointer-events-none ${bracketClass}`}
      />
      <span
        className={`absolute -bottom-px -left-px w-2.5 h-2.5 border-b-2 border-l-2 transition-colors duration-200 pointer-events-none ${bracketClass}`}
      />
      <span
        className={`absolute -bottom-px -right-px w-2.5 h-2.5 border-b-2 border-r-2 transition-colors duration-200 pointer-events-none ${bracketClass}`}
      />

      {children}
    </motion.div>
  );
};
