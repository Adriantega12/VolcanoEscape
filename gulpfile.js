const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', () => {
  console.log('Hey');
});
