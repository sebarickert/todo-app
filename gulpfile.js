// Plugins
var browserSync = require('browser-sync').create();
var gulp = require('gulp-v4');
var noop = require('gulp-noop');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefix = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');


var path = {
    src: 'scss/',
    assets: 'src/css/',
    node_modules: 'node_modules/',
  };

// BrowserSync.
function browserSyncInit () {
  browserSync.init({
    files: [ path.src + '**/*.scss' ],
    proxy: 'http://localhost:3000/',
    browser: 'chrome'
  });
}

// Compile SASS.
function compileSASS () {
  return gulp
    .src(path.src + '**/*.scss')
    .pipe(sassGlob())
    .pipe(
      path.env === 'development'
        ? sass({
            includePaths: [ path.node_modules, './' ],
            outputStyle: 'expanded'
          })
        : sass({
            includePaths: [ path.node_modules, './' ],
            outputStyle: 'compressed'
          })
    )
    .pipe(
      autoprefix({
        browsers: [ 'last 2 versions' ]
      })
    )
    .pipe(path.env === 'production' ? cleanCss() : noop())
    .pipe(gulp.dest(path.assets));
}

// Watch task.
gulp.task('watch', gulp.series(runWatch));

function runWatch () {
  gulp.watch(path.src + '**/*.scss', compileSASS);
}

// Build tasks.
gulp.task('dev', gulp.series(compileSASS), function (done) {
  environment('development');
  done();
});
gulp.task('default', gulp.series('dev', gulp.parallel('watch', browserSyncInit)), function (done) {
  done();
});
gulp.task('prod', gulp.series(compileSASS), function (done) {
  environment('production');
  done();
});

// Helper function for selecting environment.
function environment (env) {
    console.log('Running tasks in ' + env + ' mode.');
    return (path.env = env);
  }