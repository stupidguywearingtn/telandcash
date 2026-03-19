import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-gradient-primary text-white shadow-primary-glow hover:shadow-lg",
      secondary: "bg-background text-foreground shadow-sm border border-border hover:bg-muted",
      outline: "border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "hover:bg-muted text-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-8 py-4 rounded-xl font-semibold",
      lg: "px-10 py-5 text-lg rounded-2xl font-bold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
