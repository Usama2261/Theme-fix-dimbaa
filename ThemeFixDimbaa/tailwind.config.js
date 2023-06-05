/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#F07023",
          "secondary": "#dc97fc",
          "accent": "#e894bc",
          "neutral": "#2B313B",
          "base-100": "#F4F0F4",
          "info": "#407BBF",
          "success": "#2DC8A6",
          "warning": "#F7D869",
          "error": "#FB6A7D",
        },
        mydarktheme  : {
            "primary": "#FF8E00",
            "secondary": "#B469FF",
            "accent": "#E594C9",
            "neutral": "#D2D6DB",
            "base-100": "#111111",
            "info": "#3382D3",
            "success": "#1CA58B",
            "warning": "#FFD75E",
            "error": "#FF5C6F"
         }
      },
      "dark"
    ],
  },

  plugins: [require("daisyui")],
}
