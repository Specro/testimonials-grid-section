/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        'moderate-violet': '#7541C8',
        'very-dark-grayish-blue': '#48556A',
        'very-dark-blackish-blue': '#19212E',
        'light-gray': '#CFCFCF',
        'light-grayish-blue': '#ECF2F8'
      },
      fontSize: {
        'sm': '0.8125rem',
        '2xl': '1.3125rem',
        '2xs': '0.6875rem'
      },
      spacing: {
        18: '4.5rem'
      },
      backgroundPosition: {
        'right-6': 'top right 1.5rem',
        'right-6': 'top right 5rem'
      },
      backgroundSize: {
        quotation: '116px'
      },
      boxShadow: {
        card: '15px 25px 35px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

