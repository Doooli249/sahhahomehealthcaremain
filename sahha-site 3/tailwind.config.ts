import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Sahha brand palette (pulled from logo)
          primary: '#00BADC',
          primaryDark: '#0098B5',
          accent: '#A392E6',
          accentDark: '#8A74DD',
          soft: '#EAFBFF',
          soft2: '#F5F2FF',
          text: '#0F172A',
          muted: '#475569'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
