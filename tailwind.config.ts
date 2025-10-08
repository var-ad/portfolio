import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jetbrains-mono)", "monospace"],
        bubblegum: ["var(--font-bubblegum-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
