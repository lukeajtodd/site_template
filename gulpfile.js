var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function () {
  gulp.src('./src/stylesheets/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('ts', function () {
  gulp.src('./src/scripts/**/*.ts')
    .pipe(plugins.typescript())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('bump', function () {
  gulp.src('./package.json')
    .pipe(plugins.bump({ type: 'minor' }))
    .pipe(gulp.dest('./'))
});

gulp.task('tag', function () {
  return gulp.src([ './package.json' ])
    .pipe(plugins.tagVersion())
});

gulp.task('build', [ 'sass', 'ts', 'bump', 'tag' ]);