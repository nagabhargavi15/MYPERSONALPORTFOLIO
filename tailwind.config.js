/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0a1122',
          850: '#0d1730',
          800: '#111e3f',
          700: '#1a2b56',
          600: '#233970',
        },
        purple: {
          brand: '#8b5cf6',
          dark: '#6d28d9',
          light: '#a78bfa',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        indigo: {
          brand: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-navy': '0 0 30px -5px rgba(10, 17, 34, 0.75)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-light': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-purple': 'linear-gradient(135deg, #0a1122 0%, #111e3f 50%, #1a163a 100%)',
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
      }
    },
  },
  plugins: [],
}
