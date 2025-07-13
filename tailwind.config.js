/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "sans-serif": [
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Sans-Serif",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            h2 : {
              marginTop: '1rem',
              marginBottom: '0.75rem',
            },
            p : {
              fontSize: '0.875rem',
              lineHeight: '1.7',
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography
  ],
}

