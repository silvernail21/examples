/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        surface: '#111111',
        'surface-2': '#1A1A1A',
        border: '#222222',
        accent: '#C8A96E',
        'accent-hover': '#B8966A',
        ink: '#F0EDE6',
        muted: '#888888',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'ken-burns': 'ken-burns 18s ease-out infinite alternate',
        marquee: 'marquee 32s linear infinite',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}

