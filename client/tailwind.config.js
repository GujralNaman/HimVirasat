/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#183c30',
        ivory: '#ede3cf',
        gold: '#b99a59',
        terra: '#a75e42',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        '13px': '13px',
        '15px': '15px',
      },
      spacing: {
        '1400px': '1400px',
      },
      maxWidth: {
        '1400px': '1400px',
      },
      minHeight: {
        '80vh': '80vh',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '5/4': '5 / 4',
        '16/10': '16 / 10',
        '3/4': '3 / 4',
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'drift-slow': 'drift 22s ease-in-out infinite reverse',
        'sun-breathe': 'sun-breathe 7s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-18px)' },
        },
        'sun-breathe': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        'scroll-cue': {
          '0%': { transform: 'scaleY(0)', 'transform-origin': 'top' },
          '45%': { transform: 'scaleY(1)', 'transform-origin': 'top' },
          '55%': { transform: 'scaleY(1)', 'transform-origin': 'bottom' },
          '100%': { transform: 'scaleY(0)', 'transform-origin': 'bottom' },
        },
      },
    },
  },
  plugins: [],
}
