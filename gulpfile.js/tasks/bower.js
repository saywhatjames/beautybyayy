/**
 * Created by james.magpantay on 12/24/2015.
 */


var gulp    = require('gulp');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');

gulp.task('main-bower-files-js', function() {
    var filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('app/scripts/vendor'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('main-bower-files-css', function() {
   /* var filterCSS = gulpFilter('**!/!*.css', { restore: true });*/
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        /*.pipe(filterCSS)
        .pipe(concat('vendor.css'))*/
        .pipe(gulp.dest('app/styles/vendor'));
});

gulp.task('bower', ['main-bower-files-css','main-bower-files-js']);