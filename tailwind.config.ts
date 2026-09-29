import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#022448",

        secondary: "#7d562d",

        background: "#f7f9ff",

        surface: "#ffffff"
      },

      fontFamily: {
        display: ["Playfair Display"],
        body: ["Inter"]
      }
    }
  },

  plugins: []
};

export default config;