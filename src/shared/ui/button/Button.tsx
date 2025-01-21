'use client'

import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import clsx from 'clsx'


const variantStyles = {
  primary: 'bg-primary text-dark-text',
  secondary: 'bg-secondary text-light-text',
}

const sizeStyles = {
  sm: 'px-6 py-4',
  md: 'px-8 py-6',
}

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
        'w-full rounded-full flex items-center justify-between gap-3 text-sm tracking-[0.23em] uppercase font-bold hover:bg-hover transition-all',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
