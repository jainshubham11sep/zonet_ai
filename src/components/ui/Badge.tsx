import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

const variantClasses = {
  default: 'bg-badge-bg border-badge-border text-muted',
  accent: 'bg-accent/10 border-accent/20 text-accent',
  outline: 'bg-transparent border-border-custom text-muted',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`section-label ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
