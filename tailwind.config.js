module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "manuale": "Manuale",
        "codystar": "Codystar"

        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },

      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "base": "1.3125rem",
        "lg": "1.8125rem",
        "xl": "2rem",
        "2xl": "2.125rem",
        "3xl": "2.375rem",
        "4xl": "3.8125rem"
      },

    },

  },
  plugins: [],
}
