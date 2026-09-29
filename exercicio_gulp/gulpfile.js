import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

const { src, dest, series } = gulp;

function styles() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function images() {
    return src('images/**/*.{jpg,jpeg,png}', { encoding: false })
        .pipe(imagemin())
        .pipe(dest('dist/images'));
}

function scripts() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

const build = series(styles, images, scripts);

export {
    styles,
    images,
    scripts,
    build,
};

export default build;
