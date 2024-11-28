/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef, no-unused-vars
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        primary: "var(--background-primary-color)",
        bullet: "var(--bullet-color)",
        border_primary: "var(--border-primary-color)",
        border_light: "var(--border-light-color)",
        primary_text: "var(--primary-text-color)",
        selected_menu_icon: "var(--selected-menu-color)",
        selected_menu_bg: "var(--selected-menu-background)",
        submenu_hover_bg: "var(--submenu-hover-background)",
        map_point: "var(--map-point-color)",
        primary_light: "var(--primary-light)",
        checked_bg: "var(--checkbox-checked-color)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "480px", // Custom breakpoint for very small devices
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
