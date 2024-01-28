import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'input-border-pulse': {
          '0%': { 'border-color': '#176FC1' },
          '50%': { 'border-color': '#ADADAD' },
          '100%': { 'border-color': '#176FC1' },
        },
      },
      animation: {
        'border-pulse': 'input-border-pulse 2s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
