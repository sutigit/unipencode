import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1A181B',
        'lightblack': '#2A262B',
        'gray': '#343036',
        'white': '#FFFFFB',
        'pink': '#FFC2DE',
        'coral': '#F38153',
        'darkcoral': '#F0652D',
        'green': '#3A7D44',
        'beige': '#FDF7D9',
        'red': '#C20114',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        // light: {
        //   colors: {
        //     primary: {
        //       //... 50 to 900
        //       foreground: "#FFFFFF",
        //       DEFAULT: "#2A262B",
        //     },
        //     // ... rest of the colors
        //   },
        // },
        dark: {
          colors: {
            primary: {
              //... 50 to 900
              foreground: "#000000", // black
              DEFAULT: "#FFFFFB", // white
            },
            secondary: {
              //... 50 to 900
              foreground: "#000000", // black
              DEFAULT: "#FFADD3", // pink
            },
            success: {
              //... 50 to 900
              foreground: "#FFFFFF", // white
              DEFAULT: "#3A7D44", // green
            },
            danger: {
              //... 50 to 900
              foreground: "#1A181B", // black
              DEFAULT: "#C20114", // red
            },
            warning: {
              //... 50 to 900
              foreground: "#1A181B", // black
              DEFAULT: "#F38153", // coral
            },
          },
          
        },
      },
    }),
  ],
};
export default config;

