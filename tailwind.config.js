module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
       letterSpacing: {
       tightest: '-.075em',
        tighter: '-.05em',
       tight: '-.025em',
        normal: '0',
       wide: '.025em',
        wider: '.05em',
       widest: '.1em',
       widest: '1.5rem',
       },
       extend:{
         colors:{
          blue: {
            dark: '#1f2447',
          },
         }
       }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
