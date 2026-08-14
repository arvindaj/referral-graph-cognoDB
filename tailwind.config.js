/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10141F",
        ink2: "#1A2032",
        ink3: "#242C42",
        paper: "#EDEEF3",
        muted: "#8A90A3",
        gold: "#E3A945",
        teal: "#4FB6A8",
        coral: "#E1665A",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
