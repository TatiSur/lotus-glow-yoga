'use client';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

const variantStyles = {
  primary: 'bg-primary text-dark-text hover:bg-hover',
  secondary: 'bg-secondary text-light-text hover:bg-hover',
  text: 'bg-transparent !px-0 py-1 hover:opacity-80',
};

const sizeStyles = {
  sm: 'px-6 py-4',
  md: 'px-8 py-6',
};

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'flex w-full items-center justify-between gap-3 rounded-full text-sm font-bold uppercase tracking-[0.23em] transition-all',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
