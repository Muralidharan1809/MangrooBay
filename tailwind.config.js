/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#123C32',
          deep: '#0B2620',
          light: '#1B4D41',
          muted: '#17362E'
        },
        mangrove: {
          DEFAULT: '#315C4A',
          light: '#42745E',
          soft: '#254739'
        },
        sand: {
          DEFAULT: '#E9D8B8',
          light: '#F5ECDB',
          dark: '#D4C09B',
          muted: '#FAF5EA'
        },
        cream: {
          DEFAULT: '#F7F4ED',
          pure: '#FAF8F3',
          warm: '#EFECE2'
        },
        sunset: {
          DEFAULT: '#D9825B',
          glow: '#E49571',
          deep: '#BA6640'
        },
        charcoal: {
          DEFAULT: '#17211E',
          soft: '#25332F',
          muted: '#52635E'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        luxury: '0.3em',
      },
      boxShadow: {
        'luxury': '0 20px 50px -15px rgba(18, 60, 50, 0.12)',
        'floating': '0 25px 60px -12px rgba(18, 60, 50, 0.25)',
        'glass': '0 8px 32px 0 rgba(18, 60, 50, 0.08)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}
