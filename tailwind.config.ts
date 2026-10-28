import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EE",
        white: "#FFFFFF",
        ink: "#111111",
        orange: "#FF5A1F",
        stone: "#6B6B6B",
        line: "#D9D3C7",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        window: "0 20px 50px -12px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
        card: "0 10px 30px -8px rgba(17, 17, 17, 0.06), 0 1px 2px rgba(17, 17, 17, 0.04)",
        float: "0 20px 40px -15px rgba(17, 17, 17, 0.08), 0 0 0 1px rgba(217, 211, 199, 0.6)",
        orangeGlow: "0 0 40px -10px rgba(255, 90, 31, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
