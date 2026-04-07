'use client';

interface LabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'section-header';
  size?: 'sm' | 'md' | 'lg';
}

export const Label: React.FC<LabelProps> = ({
  children,
  variant = 'default',
  size = 'md',
}) => {
  const getStyles = () => {
    const baseStyles = {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      display: 'inline-block',
      transition: 'all 0.2s ease',
    };

    const sizeStyles = {
      sm: {
        fontSize: 'clamp(10px, 1.2vw, 12px)',
        padding: '2px 6px',
        borderRadius: '4px',
      },
      md: {
        fontSize: 'clamp(12px, 1.3vw, 14px)',
        padding: '3px 8px',
        borderRadius: '6px',
      },
      lg: {
        fontSize: 'clamp(14px, 1.5vw, 16px)',
        padding: '4px 12px',
        borderRadius: '8px',
      },
    };

    const variantStyles = {
      default: {
        color: '#7c5cfc',
        background: 'rgba(124, 92, 252, 0.1)',
        border: '1px solid rgba(124, 92, 252, 0.2)',
      },
      accent: {
        color: '#00d68f',
        background: 'rgba(0, 214, 143, 0.1)',
        border: '1px solid rgba(0, 214, 143, 0.2)',
      },
      'section-header': {
        color: '#e2e8f0',
        background: 'transparent',
        border: '1px solid rgba(226, 232, 240, 0.2)',
      },
    };

    return (
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          display: 'inline-block',
          transition: 'all 0.2s ease',
          fontSize: sizeStyles[size]?.fontSize,
          padding: sizeStyles[size]?.padding,
          borderRadius: sizeStyles[size]?.borderRadius,
          color: variantStyles[variant]?.color,
          background: variantStyles[variant]?.background,
          border: variantStyles[variant]?.border,
        }}
      >
        {children}
      </span>
    );
  };

  return getStyles();
};
