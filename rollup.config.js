const { babel } = require('@rollup/plugin-babel');
import scss from 'rollup-plugin-scss'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

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
    scss({
      output: "build/css/iux.css",
      failOnError: true,
    }),
  ],
};