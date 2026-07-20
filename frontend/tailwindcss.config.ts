import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: undefined, // there is no light/dark switching — dark is the only mode
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [], // line-clamp is built into Tailwind 3.3+ natively, no plugin needed
};

export default config;
