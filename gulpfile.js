var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

gulp.task('connect', function() {
    connect.server({
        root: ['app', 'dist'],
        livereload: true
    });
});


gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./app/main.js'])
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/**/*.js'], ['browserify']);
});

gulp.task('default', ['browserify', 'connect', 'watch']);