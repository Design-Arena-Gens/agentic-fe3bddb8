import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.08)'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.2)'
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: [],
} satisfies Config
