import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        add: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        bounce: {
          from: { transform: "scale(1.2)", opacity: "0" },
          t0: { transform: "scale(1)", opacity: "1" },
          // "0%": { transform: "scale(.5)" },
          // "50%": { transform: "scale(1.2)" },
          // "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        bounce: "bounce 1.5s",
      },
    },
  },
  plugins: [],
} satisfies Config;
