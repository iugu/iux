const { babel } = require('@rollup/plugin-babel');
import scss from 'rollup-plugin-scss'
import merge from 'rollup-plugin-merge';

module.exports = {
  input: 'src/js/main.js',
  output: {
    file: 'build/js/iux.min.js',
    format: 'cjs'
  },
  plugins: [
    // babel({
    //   babelHelpers: 'bundled',
    // }),
    scss({
      output: 'build/css/iux.css',
      outputStyle: 'compressed',
      failOnError: true,
    })
  ],
};