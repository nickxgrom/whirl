/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --main-background: #F0F0F0;
        "wh-main-bg": "#F0F0F0",
        // --main-card-background: #FFF;
        "wh-card-bg": "#FFF",
        // --main-text-color: #424649;
        "wh-main-text-color": "#424649",
        // --black-04: rgba(0, 0, 0, .4);
        "wh-black-04": "rgba(0, 0, 0, .4)"
      }
    },
  },
  plugins: [],
}

