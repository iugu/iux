var gulp = require('gulp');
var concat = require('gulp-concat');

var jsFiles = ['./src/js/libs/jquery.min.js',
               './src/js/libs/moment.min.js',
               './src/js/libs/daterangepicker.min.js',
               './src/js/main.js',
              ],
    jsDest = 'build/js';

gulp.task('build', function() {
    return gulp.src(jsFiles)
        .pipe(concat('iux.min.js'))
        .pipe(gulp.dest(jsDest));
});