/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,9,89,0.64)',
            borderRadius: '8px',
            border: '0px solid #f1f1f1',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(0,9,89)',
          },
        },
      };
      addUtilities(newUtilities);
    }
  ],
  darkMode: 'class',
}