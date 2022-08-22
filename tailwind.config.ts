import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // https://coolors.co/palette/8ecae6-219ebc-126782-023047-ffb703-fd9e02-fb8500
        sea: {
          300: '#8ECAE6',
          500: '#219EBC',
          700: '#126782',
          900: '#023047',
        },
        moon: {
          300: '#FFB703',
          500: "#fd9e02",
          700: '#FB8500',
        }
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
});
