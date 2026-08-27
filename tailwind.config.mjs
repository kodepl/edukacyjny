import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        campus: "#0f766e",
        chalk: "#f0fdf9",
        slateink: "#134e4a",
        highlight: "#fbbf24",
      },
      fontFamily: {
        display: ["Literata", "Georgia", "serif"],
        ui: ["Atkinson Hyperlegible", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -18px rgba(15, 118, 110, 0.45)",
      },
    },
  },
  plugins: [typography],
};
