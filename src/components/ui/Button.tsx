import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'yellow' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

const variantClasses = {
  dark: 'bg-[#111111] text-white hover:shadow-lg hover:-translate-y-0.5',
  yellow: 'bg-[#E8C547] text-[#1A1A1A] hover:shadow-lg hover:-translate-y-0.5',
  outline: 'bg-transparent text-foreground border border-border-custom hover:border-accent hover:text-accent',
};

const sizeClasses = {
  sm: 'px-4 py-2.5 text-sm h-11',
  md: 'px-6 py-3 text-sm h-12',
  lg: 'px-8 py-4 text-base h-14',
};

export function Button({ variant = 'dark', size = 'md', href, children, className = '', ...props }: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
