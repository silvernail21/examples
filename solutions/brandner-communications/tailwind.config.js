/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011219',
        surface: '#051D28',
        'surface-2': '#082535',
        border: '#0F3248',
        accent: '#EC0C2A',
        'accent-hover': '#C80A23',
        mint: '#24F1E3',
        ink: '#F9F5F1',
        muted: '#7A8FA0',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(350%)' },
        },
        'count-roll': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'scroll-line': 'scroll-line 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
