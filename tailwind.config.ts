import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: {
          50: '#fff9eb',
          100: '#ffeec6',
          200: '#ffda88',
          300: '#ffc046',
          400: '#ffa920',
          500: '#f98507',
          600: '#dd6002',
          700: '#b74006',
          800: '#94310c',
          900: '#7a290d',
          950: '#461302'
        },
        base: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1f1f1f',
          950: '#000000'
        }
      }
    },
  },
  plugins: [],
};
export default config;
