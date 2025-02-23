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
        primary: {
          50: "#f0f4ff",
          100: "#dde5fa",
          200: "#bacdf5",
          300: "#94b2f0",
          400: "#6d95eb",
          500: "#4278e6",
          600: "#002366", // Brand primary
          700: "#001b4d",
          800: "#001433",
          900: "#000d1a",
        },
        secondary: {
          50: "#f0f9f5",
          100: "#d6f1e4",
          200: "#ade3c9",
          300: "#85d5ae",
          400: "#5cc793",
          500: "#33b978",
          600: "#007A4D", // Brand secondary
          700: "#005c3a",
          800: "#003d26",
          900: "#001f13",
        },
        accent: {
          50: "#fff9e6",
          100: "#ffefb3",
          200: "#ffe680",
          300: "#ffdc4d",
          400: "#ffd319",
          500: "#FFD700", // Brand accent
          600: "#e6c100",
          700: "#ccaa00",
          800: "#b39400",
          900: "#997d00",
        },
      },
      animation: {
        rotate: "rotate 20s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
