/**
 * Created by james.magpantay on 12/24/2015.
 */
var gulp    = require('gulp');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

// compiles less files to single main.css then minifies to main.min.css
gulp.task('concat-css', function(){
    return gulp.src('./app/styles/css/*.css')
        .pipe(concat('main.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/styles'))
});

// concat files
gulp.task('concat-js', function(){
    return gulp.src(['./dist/scripts/main.min.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('concat', ['concat-js','concat-css']);

