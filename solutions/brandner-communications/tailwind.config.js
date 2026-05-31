/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#334155',
        cta: '#0369A1',
        'cta-hover': '#0284C7',
        'brand-bg': '#F8FAFC',
        'brand-text': '#020617',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
