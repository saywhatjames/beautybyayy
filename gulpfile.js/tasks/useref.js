/**
 * Created by james.magpantay on 12/30/2015.
 */
var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify    = require('gulp-uglify');
var gulpif    = require('gulp-if');

gulp.task('useref', function () {

    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'))

});