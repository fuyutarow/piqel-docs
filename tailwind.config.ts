import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: false,
  theme: {
    extend: {
      colors: {
        sea: {
          300: '#8ECAE6',
          500: '#219EBC',
          700: '#023047',
        },
        moon: {
          500: '#FFB703',
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
