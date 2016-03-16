/**
 * Created by james.magpantay on 3/3/2016.
 */
var gulp        = require('gulp')
var angularTranslate = require('gulp-angular-translate');

gulp.task('translate', function() {
    return gulp.src('app/scripts/**/**/locale-*.json')
        .pipe(angularTranslate())
        .pipe(gulp.dest('app/scripts/config'));
});