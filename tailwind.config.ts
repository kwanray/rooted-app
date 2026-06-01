import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:      '#FFFFFF',
        surface: '#F7F7F9',
        border:  '#E0E0E8',
        navy:    '#1A1A2A',
        gold:    '#D4A847',
      },
    },
  },
  plugins: [],
}

export default config
