var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS, compress css, add prefixes and iject to browser
gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
    	.pipe(sourcemaps.init())
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    	.pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// Default task
gulp.task('default', ['serve']);