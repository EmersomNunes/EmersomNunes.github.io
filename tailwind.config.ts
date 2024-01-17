import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      display: ["group-hover"],

      fontFamily: {
        'DM-mono': 'DM Mono, monospace'
      },
      colors: {
        'salmon': '#E7C192',
        'transparent': 'rgb(0,0,0,0)',
        'half-transparent': 'rgb(202, 138, 4,0.7)',
        'blackburguer': 'rgb(0,0,0,0.8)',
        'blackHoverburguer': 'rgb(0,0,0,0.8)',
        "backgroundPage": 'rgb(255,255,255,0.5)'
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"),
  ]


}
export default config
