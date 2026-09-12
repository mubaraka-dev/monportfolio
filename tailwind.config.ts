import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0F172A",
        electric: "#2563EB",
        fresh: "#22C55E",
        mist: "#F8FAFC",
        cloud: "#E2E8F0"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.10)",
        glow: "0 18px 50px rgba(37, 99, 235, 0.20)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.07) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(226,232,240,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
