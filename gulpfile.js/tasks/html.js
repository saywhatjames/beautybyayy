/**
 * Created by james.magpantay on 12/24/2015.
 */

var gulp    = require('gulp');
var minifyHTML = require('gulp-minify-html');


gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };
    return gulp.src(['app/**/**/**/**/**/**/*.html',
        '!app/bower_components/**/**/**/*.html',
        '!app/index.html'])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist'));
});
