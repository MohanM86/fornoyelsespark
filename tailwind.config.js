/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#1A1A1A', card: '#242424', elevated: '#2E2E2E', input: '#333333' },
        txt: { DEFAULT: '#FFFFFF', secondary: '#A0A0A0', muted: '#707070', faint: '#505050' },
        brd: { DEFAULT: '#333333', light: '#2A2A2A' },
        g: { green: '#34A853', red: '#EA4335', yellow: '#FBBC04', blue: '#4285F4' },
        badge: { blue: '#E8F0FE', red: '#FCE8E6', green: '#E6F4EA', yellow: '#FEF7E0' },
      },
      fontFamily: { sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'] },
    },
  },
  plugins: [],
}
