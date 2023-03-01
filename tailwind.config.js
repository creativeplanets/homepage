/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'purple': '#FF00A6',
    },    lineHeight: {
      '64': '4rem',
    }},
  },
  plugins: [],
}
