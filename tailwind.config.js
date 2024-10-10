/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ced4da",
        background2: "#f8f9fa",
        text: "#f8f9fa",
        text2: "#0c0f0a",
        border: "rgb(0 0 0 / 0.2)",
        hoverBg: "rgb(0 0 0 / 0.2)",
        menu: "#0c0f0a",
        offMenu: "#333533",
        borderb: "#0c0f0a",
        play: "#0c0f0a",
      },
      backgroundImage: {
        website: "url('/images/website.jpg')",
        mobile: "url('/images/mobile3.jpg')",
        profile: "url('/profile/profile.jpg')",
        capstone: "url('/thumbnail/capstone.png')",
      },
      boxShadow: {
        "inner-bottom": "inset 0 -5px 10px rgba(0, 0, 0, .3)",
      },
    },
  },
  plugins: [],
};
