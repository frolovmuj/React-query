/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        react: '#53cfc8',
        vuejs: {
          100: '#7cde68',
          200: '#6bbf5a',
        },
      },
      screens: {
        '4xl': '1500px',
      },
    },
  },
  plugins: [],
};
