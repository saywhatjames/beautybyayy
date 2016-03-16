var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('webpack', function() {
    return gulp.src('app/scripts/app.js')
        .pipe(webpack({
            output: {
                filename: 'bundle.js',
            }
        }))
        .pipe(gulp.dest('app/scripts/'));
});