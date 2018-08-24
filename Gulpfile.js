/**
 * File: gulpfile.js
 *
 *
 */

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    plumber      = require('gulp-plumber');


// TASK: scripts
gulp.task('scripts', function (){
    gulp.src('./app/js/src/*.js')
        .pipe(uglify())
        .pipe(rename({
          extname: '.min.js'
        }))
        .pipe(gulp.dest('./app/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});


// TASK: styles
gulp.task('styles', function () {
    return gulp.src('./app/sass/*.scss')
        .pipe(plumber())
        .pipe(sass({
            css: 'css',
            sass: 'sass',
            output: 'compressed'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        },
        port: 8080
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['styles', 'scripts', 'browser-sync'], function () {
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/js/src/**/*.js', ['scripts']);
  gulp.watch("app/*.html", ['bs-reload']);
});
