/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#151515',
        'green': '#4ee1a0',
        'dark-grey': '#242424',
        'grey': '#d9d9d9',
        'white' : '#ffffff'
      }
    },
    screens: {
      'sm' : '600px',
      'md' : '900px',
      'lg' : '1200px'
    }
  },
  plugins: [],
};
 