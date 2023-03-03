/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#FF00A6",
        434343: "#434343",
      },
      lineHeight: {
        64: "4rem",
      },
      letterSpacing: {
        5: "0.3125rem",
      },
      borderRadius: {
        30: "1.875rem",
      },
      boxShadow: {
        card: "0 0.25rem 0.625rem rgba(0, 0, 0, 0.15)",
      },
      width: {
        xl: "63.54166666666667%",
      },
      height: {
        cardXl: "24rem",
      },
      padding: {
        cardTitle: "5.875rem",
        cardContent: "3.25rem",
      },
      spacing: {
        cardXl: "6.625rem",
      },
    },
  },
  plugins: [],
};
