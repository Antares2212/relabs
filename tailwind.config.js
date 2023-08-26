/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    theme: {
      screens: {
        lg: "1024px",
        md: "640px",
        sm: "375px",
        xs: "320px"
      },
      colors: {
        "lihgt": "#FFFFFF",
        "fade-1": "#F5F5F8",
        "fade-2": "#666666",
        "disabled": "#999999",
        "primary": "#316FEE",
        "stroke": "#DCDCDC"
      },
      extend: {},
    },
  },
  plugins: [],
}

