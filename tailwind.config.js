/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/component/**/*.{js,jsx,ts,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      backgroundImage: (theme) => ({
        'image-one':
          "url('https://images.unsplash.com/photo-1629651480694-edb8451b31aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80')",
        'image-two':
          "url('https://images.unsplash.com/photo-1629651726230-6430554a8890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80')",
      }),

      fontSize: {
        'X':['64px','80px'],
        'T1':['32px','34px'],
        'T2':['24px','22px'],
        'T3':['18px','22px'],
        'R1':['16px','19px'],
        'R2':['16px','19px'],
        'R3':['14px','18px'],
      },
      colors: {
        base: {
          'light': '#B172A5;',
          'medium': '#A178A4;',
          'dark': '#847A9F;',
        },
        light: {
          'light20': '#E3E5E5;',
          'light40': '#F2F4F5;',
          'light60': '#F7F9FA;',
          'light80': '#FBFBFB;',
          'light100': '#FFFFFF;',
        },
        dark: {
          'dark20': '#E3E5E5;',
          'dark40': '#F2F4F5;',
          'dark60': '#F7F9FA;',
          'dark80': '#FBFBFB;',
          'dark100': '#FFFFFF;',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
