/** @type {import('tailwindcss').Config} */
module.exports = {
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
        navy: "var(--my-navy)",
        grass: "var(--my-green)",
        silk: "var(--my-silk)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
