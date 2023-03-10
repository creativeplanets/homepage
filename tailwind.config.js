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
        434343: '#434343',
      },
      fontSize: {
        title: '3.5rem',
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
        xl: '63.54166666666667%',
      },
      spacing: {
        cardXl: '6.625rem',
      },
      fontFamily: {
        fredokaOne: ['fredokaOne'],
      },
    },
  },
  plugins: [],
};
