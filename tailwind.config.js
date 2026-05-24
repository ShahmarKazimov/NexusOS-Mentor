/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        graphite: "#050608",
        panel: "rgba(11, 13, 18, 0.72)",
        line: "rgba(255, 255, 255, 0.12)",
        blueglow: "#3cc8ff",
        violetglow: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 40px rgba(60, 200, 255, 0.24)",
        violet: "0 0 46px rgba(139, 92, 246, 0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(18px,-22px,0) rotate(8deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 4s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
