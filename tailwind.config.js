const { url } = require('@vee-validate/rules')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mob: '320px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      deskL: '1440px'
    },
    extend: {
      // ##--- MAX WIDTH ---##
      maxWidth: {
        desk_max: '1200px'
      },

      // ##--- grid template ---##
      gridTemplateRows: {
        'content-grid': 'repeat(4, minmax(0, auto))'
      },

      // FONT FAMILY
      fontFamily: {
        josefsans: ['Josefin Sans']
      },

      //BACKGROUND IMAGE
      backgroundImage: {
        'banner-bg': "url('../assets/img/banner_sale.svg')",
        'main-bg': "url('../assets/image/home/mobile_back.svg')"
      },

      // KEY FRAME
      keyframes: {
        ping_sale: {
          '0, 80%': {
            opacity: '1'
            // animationTimingFunction: 'cubic-bezier(1,0.9,0.8,0.1)'
          },
          '85%, 100%': {
            opacity: '0.7'
            // animationTimingFunction: 'cubic-bezier(1,0.9,0.8,0.1)'
          }
        }
      },

      // ANIMATION
      animation: {
        ping_sale: 'ping_sale 1s cubic-bezier(0, 0, 0.9, 1) infinite;'
        // cubic-bezier(0, 0, 0.2, 1)
        // cubic-bezier(0,0.9,0.8,0.1)
      }
    }
  },
  plugins: []
}
