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
        "codystar": "Codystar",
        "luckiest": "Luckiest Guy",

      },

      "fontSize": {
        "sm": "0.625rem",
        "base": "0.75rem",
        "lg": "1.3125rem",
        "xl": "1.8125rem",
        "2xl": "2rem",
        "3xl": "2.125rem",
        "4xl": "2.375rem",
        "5xl": "3.8125rem"
      },

      // Ici vos familles de polices exportées de Figma
      // Ne pas oublier de les charger dans '/index.html' !
    },

    screens: {
      'ipad_mini': '744px',
      'ipad_pro': '1024px',
      'desktop': '1440px',
    },




  },

}
