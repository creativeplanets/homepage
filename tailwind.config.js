/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        // => @media (min-width: 600px) { ... }

        md: '1240px',
        // => @media (min-width:1240px) { ... }

        lg: '1440px',
        // => @media (min-width: 1440px) { ... }

        xl: '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        purple: '#FF00A6',
        blue: '#37538A',
        gray: '#434343',
      },
      lineHeight: {
        64: '4rem',
      },
      letterSpacing: {
        5: '0.3125rem',
      },
      boxShadow: {
        card: '0 0.25rem 0.625rem rgba(0, 0, 0, 0.15)',
      },
      width: {
        xxl: '65%',
        lg: '75%',
        md: '55%',
        sm: '90%',
      },
      spacing: {
        card2Xl: '5.5%',
        cardLg: '1.5%',
      },
      fontFamily: {
        fredokaOne: ['fredokaOne'],
      },
    },
  },
  plugins: [],
};
