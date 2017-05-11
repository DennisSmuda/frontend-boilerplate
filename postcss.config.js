module.exports = {
  plugins: {
    'postcss-import': {}, // Import files first before running css-next
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};