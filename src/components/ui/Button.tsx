import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus:ring-[var(--color-accent)]',
    secondary: 'bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-light)] focus:ring-[var(--color-accent)]',
    outline: 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-bg-alt)] focus:ring-[var(--color-accent)]',
    ghost: 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-accent)]',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    md: 'h-11 px-6 text-base rounded-md',
    lg: 'h-14 px-8 text-lg rounded-lg',
  };

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
