var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var sassPaths = [
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/scss'));
});

/**
* Check JS syntax, compress and concat.
* /External Files first then /Custom, both in the same order then they apear
* in the Folder
*/
gulp.task('js', function() {
gulp.src(['js/*.js'])
.pipe(sourcemaps.init())
.pipe(uglify())
.pipe(concat('app.js'))
.pipe(sourcemaps.write())
.pipe(gulp.dest('dist/js/'));
});

gulp.task('build', ['sass', 'js']);


gulp.task('default', function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/**/*.js'], ['js']);
});