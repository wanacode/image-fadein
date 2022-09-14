module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: { config: './css/tailwind.config.js' },
    autoprefixer: {},
    cssnano: {
      preset: "default",
      autoprefixer: { add: false },
    },
  },
 }
