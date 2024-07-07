const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
// Путь до исходных и скомпилированных файлов
const paths = {
    styles: {
        src: 'styles/*.less', // путь до less файла
        srcMain: 'styles/style.less',
        dest: 'styles/'       // путь где будет min.css
    }
};

// преобразуем less в css
function styles() {
    return gulp.src(paths.styles.srcMain)
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest));
}
function watch() {
    gulp.watch(paths.styles.src, styles);
}
exports.default = gulp.series(styles, watch);