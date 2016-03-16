/**
 * Created by james.magpantay on 12/30/2015.
 */
var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('mock', function () {
    gulp.src(['app/index.html'])
        .pipe(replace('connector', 'mockConnector'))
        .pipe(gulp.dest('app'));
});

gulp.task('real', function () {
    gulp.src(['app/index.html'])
        .pipe(replace('mockConnector', 'connector'))
        .pipe(gulp.dest('app'));
});