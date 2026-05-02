module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        void:     '#09090b',
        obsidian: '#0f0f0f',
        onyx:     '#141414',
        carbon:   '#1c1c1c',
        iron:     '#262626',
        steel:    '#3d3d3d',
        ash:      '#888888',
        silver:   '#b0b0b0',
        ivory:    '#f5f5f0',
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e2c97e',
          dim:     '#8a6e2f',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}
