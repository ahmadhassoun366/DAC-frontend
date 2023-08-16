/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {

        'CustomColor1': '#04080F',
        'CustomColor2': '#507DBC',
        'CustomColor3': '#A1C6EA',
        'CustomColor4': '#BBD1EA',
        'CustomColor5': '#DAE3E5',
        'anotherCustomColor': {
          '100': '#f7fafc',
          '200': '#edf2f7',
          '300': '#e2e8f0',
          '900': '#1a202c',
        }
      }
    },
  },
  plugins: [],
}

