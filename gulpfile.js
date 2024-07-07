const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const ignore = require('gulp-ignore');
// Путь до исходных и скомпилированных файлов
const paths = {
    styles: {
        src: 'styles/*.less', // путь до less файла
        srcMain: 'styles/style.less',
        dest: 'styles/'       // путь где будет min.css
    },
    scripts: {
        src: 'scripts/*.js',  // путь до JS файлов
        dest: 'minified-scripts/'  // путь где будут минифицированные JS файлы
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

// Минификация JS файлов
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(ignore.exclude('*.min.js')) // игнорировать файлы с окончанием .min.js
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest));
}


function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

exports.default = gulp.series(gulp.parallel(styles, scripts), watch);