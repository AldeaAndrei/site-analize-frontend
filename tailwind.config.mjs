/** @type {import('tailwindcss').Config} */
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
      fontSize: {
        big: ["32px", { fontWeight: "600", color: "#000000" }], // Medium bold (semi-bold)
        medium: ["18px", { fontWeight: "400", color: "#000000" }], // Normal
        small: ["14px", { fontWeight: "400", color: "#000000" }], // Normal
      },
    },
  },
  plugins: [],
};
