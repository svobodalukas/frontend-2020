/* 
Gulp plugins
 - Source Maps: https://www.npmjs.com/package/gulp-sourcemaps
 - Autoprefixer: https://www.npmjs.com/package/autoprefixer
 - Imagemin: https://www.npmjs.com/package/gulp-imagemin
 - Responsive: https://github.com/mahnunchik/gulp-responsive

 - Rev All: https://www.npmjs.com/package/gulp-rev-all, https://www.npmjs.com/package/gulp-hash-filename
 - PurgeCss: https://www.npmjs.com/package/gulp-purgecss

Zdroje:
https://gist.github.com/renarsvilnis/ab8581049a3efe4d03d8

*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

gulp.task('styles', function () {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('> 1%'))
        .pipe(uglifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
        ;
});

gulp.task('images', function () {
    return gulp.src('assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/dist'))
});

gulp.task('default', gulp.series('styles', function () {
    gulp.watch('scss/**/*.scss', gulp.series('styles'));
}));


/*
Gulp 3.x

gulp.task('watch', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);

*/