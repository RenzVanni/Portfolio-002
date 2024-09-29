/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ced4da",
        background2: "#f8f9fa",
        text: "#f8f9fa",
        text2: "#212529",
        border: "rgb(0 0 0 / 0.2)",
        hoverBg: "rgb(0 0 0 / 0.2)",
      },
      backgroundImage: {
        website: "url('/images/website.jpg')",
        mobile: "url('/images/mobile3.jpg')",
        profile: "url('/profile/profile.jpg')",
        capstone: "url('/thumbnail/capstone.png')",
      },
    },
  },
  plugins: [],
};
