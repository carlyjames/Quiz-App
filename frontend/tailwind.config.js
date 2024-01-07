/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        top: "top",
        left: "left",
        height: "height",
        
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
