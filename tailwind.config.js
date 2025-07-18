/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
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
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              h1: { color: '#000000' },
              h2: {
                color: '#000000',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              },
              p: {
                fontSize: '0.875rem',
                lineHeight: '1.7',
                marginTop: '0.75rem',
                marginBottom: '0.75rem',
              },
            },
          },
          dark: {
            css: {
              h1: { color: '#ffffff' },
              h2: { color: '#ffffff' },
            },
          },
        }
      },
    },
  },
  plugins: [typography],
}
