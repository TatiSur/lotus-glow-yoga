import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        hover: 'var(--color-hover)',
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
    },
  },
  plugins: [],
} satisfies Config;
