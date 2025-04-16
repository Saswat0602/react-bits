// tailwind.config.js or tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind will scan your TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
