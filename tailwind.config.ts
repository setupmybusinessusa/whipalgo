import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080810',
        surface: '#0d0d1a',
        surface2: '#111122',
        text: '#e8e8f0',
        muted: '#6b6b85',
        accent: '#7c5cfc',
        accent2: '#5c3fdb',
        green: '#00d68f',
        'green-dim': 'rgba(0,214,143,0.12)',
        red: '#ff4d6d',
        'red-dim': 'rgba(255,77,109,0.12)',
        'purple-dim': 'rgba(124,92,252,0.12)',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1' }],
        sm: ['12px', { lineHeight: '1.4' }],
        base: ['14px', { lineHeight: '1.6' }],
        lg: ['16px', { lineHeight: '1.75' }],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bar-grow': 'barGrow 1.4s ease forwards',
      },
      keyframes: {
        barGrow: {
          'to': { width: 'var(--pct)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
