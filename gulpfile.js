var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const log = require('fancy-log');
const babel = require('gulp-babel');


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


gulp.task('scripts', function() {
    log('Processing JavaScript...');
    return gulp.src('js/main.js', { allowEmpty: true })
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('dist/js'))
        .on('end', function() {
            log('JavaScript processed and copied to dist/js.');
        });
});


gulp.task('watch', function() {
    gulp.watch('app/scss/styles.scss', gulp.series('sass'));
    gulp.watch('js/main.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('sass', 'scripts', 'watch'));




