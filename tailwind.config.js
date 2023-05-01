/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wh-main-bg": "#F0F0F0",
        // --main-background: #F0F0F0;
        "wh-card-bg": "#FFF",
        // --main-card-background: #FFF;
        "wh-main-text-color": "#424649",
        // --main-text-color: #424649;
        "wh-black-04": "rgba(0, 0, 0, .4)"
        // --black-04: rgba(0, 0, 0, .4);
      }
    },
  },
  plugins: [],
}

