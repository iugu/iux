"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purge = require('gulp-css-purge');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('default', watch);
gulp.task('compile-sass', compileSass);
gulp.task('compile-js', compileJs);

const jsFiles = [
               './src/js/libs/jquery-3.6.0.js',
               './src/js/libs/moment.min.js',
               './src/js/libs/moment.pt-br.min.js',
               './src/js/libs/daterangepicker.min.js',
               './src/js/filters.js',
              ],
    jsDest = 'build/js';

function compileJs() {
  return gulp.src(jsFiles)
  .pipe(concat('iux.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
}

function compileSass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(purge())
    .pipe(gulp.dest("build/css"));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", compileSass);
}