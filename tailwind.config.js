/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        cloud: "#F8FAFC",
        platinum: "#E5E7EB",
        stripe: "#635BFF",
      },
      fontFamily: {
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
