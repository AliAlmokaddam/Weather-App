/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1100px",
        xl: "1500px",
        "2xl": "1600px",
      },
    },
    letterSpacing: {
      widest: '4px',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
