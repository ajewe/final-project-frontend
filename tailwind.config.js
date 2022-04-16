module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-pattern":
          "repeating-linear-gradient(white 0px, white 24px, teal 25px)",
      },
      width: {
        half: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
