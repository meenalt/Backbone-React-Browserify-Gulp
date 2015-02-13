var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require("vinyl-source-stream");
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

// Connect
gulp.task('connect', function() {
    connect.server({
        root: ['app', 'dist'],
        livereload: true
    });
});

// Browserify
gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./app/main.js'])
        .pipe(browserified)
        // skip uglify when debugging
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

// HTML
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

// Watch
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/**/*.js', './app/**/*.jsx'], ['browserify']);
});

gulp.task('default', ['browserify', 'connect', 'watch']);
