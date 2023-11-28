/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DARKBLUE05: "#6148FF",
        DARKBLUE04: "#6148FF.35",
        DARKBLUE03: "#489CFF",
        DARKBLUE02: "#D0B7E6",
        DARKBLUE01: "#E2D4F0",

        LIMEGREEN05: "#AA9B87",
        LIMEGREEN04: "#D4C2A8",
        LIMEGREEN03: "#FFE9CA",
        LIMEGREEN02: "#FFF0DC",
        LIMEGREEN01: "#FFF8ED",

        WARNING: "#FF0000",
        ATTENTION: "#F9CC00",
        SUCCESS: "#73CA5C",
      },
      width: {
        THREESEVEN: "380px",
      },
      margin: {
        TOP: "8px",
        RIGHT: "332px",
        rightt: "500px",
        right: "450px",
        LEFT: "100px",
        LEFTWR: "113px",
        LEFTWG: "60px",
        MiNLEFT: "-500px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
