import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "stamp-bg": "#160C35",
        "stamp-green": "#2cd1b4"
      }
    },

    screens: {
      "lg-max": {max: "980px"},
      // => @media (max-width: 980px) { ... }

      "md-max": {max: "767px"},
      // => @media (max-width: 767px) { ... }

      "sm-max": { max: "550px" },
       // => @media (max-width: 550px) { ... }

      //  "xs-max": {max: "450px"},

      //  "md-min": {min: "768px"},

      //  "sm-min": {min: "640px"},

      //  "lg-min": {min: "1024px"}
    },
  },
  plugins: [],
}
export default config
