/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#05070a',
          900: '#090d14',
          850: '#0d131e',
          800: '#121a29',
          700: '#1c283c',
          600: '#283955',
          border: 'rgba(56, 189, 248, 0.15)',
          borderRed: 'rgba(244, 63, 94, 0.2)'
        },
        electric: {
          cyan: '#00f0ff',
          blue: '#0066ff',
          ice: '#e0f7ff'
        },
        crimson: {
          DEFAULT: '#ff1e56',
          bright: '#ff3366',
          glow: 'rgba(255, 30, 86, 0.5)'
        },
        titanium: {
          100: '#f8fafc',
          200: '#e2e8f0',
          400: '#94a3b8',
          600: '#475569',
          800: '#1e293b'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.35)',
        'cyan-sm': '0 0 10px rgba(0, 240, 255, 0.25)',
        'crimson-glow': '0 0 25px rgba(255, 30, 86, 0.35)',
        'crimson-sm': '0 0 10px rgba(255, 30, 86, 0.25)',
        'hud-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.06)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 6s linear infinite',
        'glitch': 'glitch 3s infinite',
        'float': 'float 5s ease-in-out infinite'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
