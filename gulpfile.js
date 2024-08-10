var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const log = require('fancy-log');


gulp.task('sass', function() {
    log('Compiling SCSS...');
    return gulp.src('app/scss/styles.scss', { allowEmpty: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dist/css'))
        .on('end', function() {
            log('SCSS compiled and CSS written.');
        });
});




gulp.task('watch', function() {
    gulp.watch('app/scss/styles.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass',  'watch'));