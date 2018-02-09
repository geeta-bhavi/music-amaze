const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const del = require('del');

// image compression
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

// Handlebars plugins
const handlebars = require('gulp-handlebars');
const handlebarsLib = require('handlebars');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');

// File Paths
const DIST_PATH = 'public/dist';
const LOGS_PATH = 'logs/*.log';
const SCRIPTS_PATH = 'public/js/**/*.js';
const  CSS_PATH = 'public/css/**/*.css';
const IMAGES_PATH = 'public/assets/**/*.{png,jpeg,jpg,svg,gif}';
const TEMPLATES_PATH = 'views/**/*.hbs';


// Styles
gulp.task('styles', function() {
  console.log('Starting styles task');
  return gulp.src(['public/css/main.css'])
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function() {
  console.log('Starting scripts task');
  return gulp.src(['public/js/main.js'])
    .pipe(plumber(function(err) {
      console.log('Scripts Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Images
gulp.task('images', function() {
  console.log('Starting images task');
  return gulp.src(IMAGES_PATH)
    .pipe(imagemin(
      [
        imagemin.gifsicle(),
        imagemin.jpegtran(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminPngquant(),
        imageminJpegRecompress()
      ]
    ))
    .pipe(gulp.dest(DIST_PATH + '/assets'));
});

gulp.task('templates', function() {
  console.log('Starting templates task');
  return gulp.src([TEMPLATES_PATH])
    .pipe(handlebars({
      handlebars: handlebarsLib
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'templates',
      noRedeclare: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());

});

gulp.task('clean', function() {
  return del.sync([
    DIST_PATH,
    LOGS_PATH
  ])
});

gulp.task('default', ['clean', 'images', 'templates', 'styles', 'scripts'], () => {
  console.log('Starting default task');
});

gulp.task('watch', ['default'], () => {
  console.log('Starting watch task');
  require('./app.js');
  livereload.listen();
  gulp.watch(TEMPLATES_PATH, ['templates']);
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(CSS_PATH, ['styles']);
});
