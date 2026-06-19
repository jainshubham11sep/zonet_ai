interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: 'pill' | 'dot';
  className?: string;
}

export function SectionBadge({ children, variant = 'pill', className = '' }: SectionBadgeProps) {
  if (variant === 'dot') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547] shrink-0" />
        <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
          {children}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 border border-[#E6E4DF] rounded-full px-4 py-1.5 bg-white/60 backdrop-blur-sm ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#E8C547] shrink-0" />
      <span className="text-[11px] font-semibold tracking-[0.15em] text-[#686B6B] uppercase">
        {children}
      </span>
    </div>
  );
}
