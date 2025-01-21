import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        'header': 'var(--height-header)',
        'xs-header': 'var(--height-xs-header)',
      },
    },
  },
  plugins: [],
} satisfies Config
