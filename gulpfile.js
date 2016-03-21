const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const Server = require('karma').Server;
const cssnano = require('gulp-cssnano');
const runSequence = require('run-sequence');
const karmaConfig = require('./karmaConfig');
const Config = require('karma/lib/config').Config;

const paths = {
  test: __dirname + '/test/**/*.js',
  js: __dirname + '/src/js/**/*.js',
  jsEntry: __dirname + '/src/js/MaterialSmartBanner.js',
};

function runKarmaTests(configObj, done, singleRun) {
  var config = new Config();
  config.set(configObj);

  if (singleRun !== null) {
    config.singleRun = singleRun;
  }

  new Server(config, function(exitCode) {
    if (exitCode !== 0) {
      throw new gutil.PluginError({plugin: 'karma', message: 'Karma tests failed'});
    }

    done();
  }).start();
}

gulp.task('default', ['build', 'test-headless']);

gulp.task('build', ['build-js']);

gulp.task('build-ci', function() {
  runSequence(['build', 'test-headless']);
});

gulp.task('test-headless', function(done) {
  runKarmaTests(karmaConfig.headless, done, false);
});


gulp.task('build-js', function() {
  var b = browserify({
    standalone: 'materialSmartBanner',
    entries: paths.jsEntry,
    transform: [babelify]
  }).bundle();

  return b.pipe(source('materialSmartBanner.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch([paths.js, paths.test], function() {
    runSequence(['build-js', 'test-headless']);
  });
});
