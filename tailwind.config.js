/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#111624",
          light: "#182033",
          soft: "#222C43",
        },
        ivory: {
          DEFAULT: "#F3F0E8",
          dim: "#D7D4CC",
        },
        teal: {
          DEFAULT: "#417D75",
          light: "#72AAA2",
          dark: "#2C5A55",
        },
        sand: {
          DEFAULT: "#B98B5F",
          light: "#D0AA83",
          dark: "#7F5E3E",
        },
        paper: {
          DEFAULT: "#E7E2D8",
          soft: "#F0ECE4",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
}
