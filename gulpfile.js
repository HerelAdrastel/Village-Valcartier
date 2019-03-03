// Import
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const header = require('gulp-header');
const less = require('gulp-less');

// Less variables
const autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
const lessHeader = "/*\nCode généré, toute modification sera suppimée. Utiliser Gulp pour modifier et compiler le .less associé\n*/\n";

gulp.task('less', function () {
    console.log('Reload CSS');
    return gulp.src('public/css/*.less')
        .pipe(less())
        .pipe(autoprefixer({browsers: autoprefixBrowsers}))
        .pipe(header(lessHeader))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('public/css/*.less', gulp.series('less'));
});