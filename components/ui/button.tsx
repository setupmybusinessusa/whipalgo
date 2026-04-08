import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent2 hover:-translate-y-0.5 focus:ring-accent',
    ghost:
      'text-muted hover:text-text bg-transparent border-none focus:ring-accent',
    secondary:
      'bg-surface text-text hover:bg-surface2 border border-border focus:ring-accent',
    outline:
      'bg-transparent text-text border border-border2 hover:border-accent hover:text-accent focus:ring-accent',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-8 py-4',
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
