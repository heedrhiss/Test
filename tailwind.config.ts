import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "560px",
      lg: "720px",
      xl: "1080px",
    },
    extend: {
      
    },
  },
  plugins: [],
} satisfies Config;
