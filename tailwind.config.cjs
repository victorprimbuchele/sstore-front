/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "extra-dark-blue": "#051346",
        "dark-blue-sky": "#0F427C",
        "pastel-blue": "#5983B2",
        "dark-pastel-blue" : "#4A6F98"
      },
      spacing: {
        "200": "50rem",
        "160": "45rem",
        "120": "40rem",
        "100": "28rem"
      },
      padding: {
        "18": "4.5rem"
      },
      borderWidth: {
        "1": "1px"
      },
      height: {
        "22": "5.5rem",
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "98": "26rem",
        "110": "35rem",
      },
      fontSize: {
        inherit: "inherit"
      }
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      brand: ["Cinzel"],
      body: ["Montserrat"],
      inherit: "inherit"
    },
    
  },
  plugins: [],
};
