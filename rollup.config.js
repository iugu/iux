const { babel } = require('@rollup/plugin-babel');
module.exports = {
  input: 'src/js/main.js',
  output: {
    file: 'build/js/iux.min.js',
    format: 'iife'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};