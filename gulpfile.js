const gulp = require('gulp');
const concat = require('gulp-concat');

function js() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/js/'));
}

exports.default = gulp.series(
  js,
  () => {
    gulp.watch('./src/js/*.js', js);
  },
);
