/** @type {import('tailwindcss').Config} */
export default  {
  content: [ "./index.html", "./src/**/*.{js,jsx}"], 
  theme: {
    extend: {
      boxShadow:{
           'custom-red': '10px 10px 4px 15px rgba(209, 88, 44, 0.9)',
      }
    },
  },
  plugins: [],
};
