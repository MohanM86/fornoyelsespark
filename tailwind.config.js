/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF8F3', dark: '#F3F0E8' },
        ink: { DEFAULT: '#1A1A1A', light: '#4A4A4A', muted: '#8A8A80', faint: '#B8B8AE' },
        g: { green: '#34A853', red: '#EA4335', yellow: '#FBBC04', blue: '#4285F4' },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
}
