/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
          extend: {
            fontFamily: {
              sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
              heading: ['Poetsen One', ...defaultTheme.fontFamily.sans],
              lato: ['Lato', ...defaultTheme.fontFamily.sans],
              playfair: ['Playfair Display', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
              'radial-gold-accent': 'radial-gradient(circle, rgba(200,150,62,0.22) 0%, transparent 70%)',
                        'radial-gold-accent-2': 'radial-gradient(circle, rgba(200,150,62,0.13) 0%, transparent 70%)',
                                  'subtle-grain': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
                                  'bg-divider-gold': 'linear-gradient(90deg, #C8963E, #f5c97a, #C8963E)',
                                },      colors: {
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'secondary': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'accent': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'neutral': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'base-100': '#ffffff',
      },
    },
  },
  plugins: [],
}

