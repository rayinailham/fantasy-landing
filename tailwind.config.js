/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Warm editorial luxury palette
        cream: {
          50: '#FDFBF7',
          100: '#F8F2E7',
          200: '#EFE4D0',
          300: '#E2D0B0',
          400: '#D4B892'
        },
        clay: {
          300: '#C9A179',
          400: '#B07F58',
          500: '#8E5E3E',
          600: '#6E4528',
          700: '#4F2F1A'
        },
        ember: {
          400: '#C8623E',
          500: '#A84A2A',
          600: '#83361B'
        },
        ink: {
          800: '#2A1F18',
          900: '#1A1310',
          950: '#0F0A07'
        },
        sage: {
          400: '#8FA08A',
          500: '#6E8068'
        }
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Geist"', 'system-ui', 'sans-serif'],
        editorial: ['"PP Editorial New"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Geist"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em',
        ultrawide: '0.32em'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      boxShadow: {
        'soft-lift': '0 24px 60px -32px rgba(78,47,26,0.35)',
        'inner-warm': 'inset 0 1px 0 rgba(255,255,255,0.45)'
      }
    }
  },
  plugins: []
}
