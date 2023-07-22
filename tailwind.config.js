/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['var(--font-openSans)', 'sans-serif'],
      },
      colors: {
        primary: '#d1411e',
        secondary: '#ffa323',
        tertiary: '#331812',
        black: '#231714',
        orange: '#FF7A30',
        blackTransparent: 'rgba(0,0,0,0.5)'
      },
      backgroundImage: {
        hero: "url('/images/background.webp')"
      },
      screens: {
        xs: {'min': '451px', 'max': '639px'},
        xxs: {'max': '450px'}
      },
      keyframes: {
        spinner: {
         /* '0%, 100%': { borderColor: 'transparent',borderTop: '2px solid #FF7A30', borderBottom: '2px solid #ffa323'},
          '50%': {borderColor: 'transparent', borderLeft: '2px solid #FF7A30', borderRight: '2px solid #ffa323'}*/
          'to': {transform: 'rotate(1turn)'}
        },
        slice2: {
          '0%': {opacity: 0},
          '25%, 100%': {opacity: 1},
        },
        slice3: {
          '0%, 25%': {opacity: 0},
          '50%, 100%' : {opacity: 1}, 
        },
        slice4: {
          '0%, 50%': {opacity: 0},
          '75%, 100%': {opacity: 1},
        },
        slice5: {
          '0%, 75%': {opacity: 0}, 
          '100%': {opacity: 1},
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
