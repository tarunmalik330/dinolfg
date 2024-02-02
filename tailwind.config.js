/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'BgHeader': "url('./assets/images/web.p/BgHeader.webp')",
        'BgButton': "url('./assets/images/web.p/bgButton.webp')",
        'BgAbout': "url('./assets/images/web.p/BgAbout.webp')",
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      }
    },
  },
  plugins: [],
}

