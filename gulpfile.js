const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browsersync = require('browser-sync');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps')
const gulpIf = require('gulp-if')
const uncss = require('gulp-uncss')
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));

const isDev = process.argv.indexOf('--dev') !== -1;
const isProd = !isDev;
const isSync = process.argv.indexOf('--sync') !== -1;;


// let cssFiles = [
//     './src/css/base.css',
//     './src/css/grid.css',
//     './src/css/humans.css'
// ]

let = htmlFiles = [
    './src/*.html'
]

function clear() {
    return del('build/*')
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .on('error', console.error.bind(console))
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        // .pipe(concat('style.css'))
        .pipe(gcmq())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulpIf(isProd, cleanCss({
            level: 2
        })))
        .pipe(gulpIf(isDev, sourcemaps.write()))
        .pipe(gulp.dest('./build/css'))
        .pipe(gulpIf(isSync, browsersync.stream()))
}

function img() {
    return gulp.src('./src/img/**/**/*')
        .pipe(gulp.dest('./build/img'))
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'))
        .pipe(gulpIf(isSync, browsersync.stream()))
}

function js() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build/js'))
        .pipe(gulpIf(isSync, browsersync.stream()))
}

function fonts() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'))
}

function watch() {
    if (isSync) {
        browsersync.init({
            server: {
                baseDir: "./build/",
            },
            host: "192.168.1.1"
        })
    }

    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/*.html', html)
    gulp.watch('./src/js/*.js', js)
}


const build = gulp.series(clear,
    gulp.parallel(styles, img, fonts, html, js))

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch))