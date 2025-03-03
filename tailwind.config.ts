import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'secondary-2': 'var(--color-secondary-2)',
        'taupe-dark': 'var(--color-taupe-dark)',
        hover: 'var(--color-hover)',
        'dark-hover': 'var(--color-dark-hover)',
        background: 'var(--color-background)',
        'light-text': 'var(--color-light-text)',
        'dark-text': 'var(--color-dark-text)',
        'ui-blocks': 'var(--color-ui-blocks)',
      },
      screens: {
        '2xs': '400px',
        xs: '480px',
        '2xl': '1440px',
      },
      height: {
        header: 'var(--height-header)',
        'xs-header': 'var(--height-xs-header)',
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-in-out forwards',
        'slide-out': 'slide-out 0.3s ease-in-out forwards',
        'fade-in': 'fade-in 0.3s ease-in-out forwards',
        'fade-out': 'fade-out 0.3s ease-in-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'primary-inset':
          '0 0 40px 40px var(--color-primary) inset, 0 0 0 0 var(--color-primary)',
        'primary-outset':
          '0 0 10px 0 var(--color-primary) inset, 0 0 10px 4px var(--color-primary)',
      },
    },
  },
  plugins: [],
} satisfies Config;
