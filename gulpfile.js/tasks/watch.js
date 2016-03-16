/**
 * Created by james.magpantay on 12/24/2015.
 */

var gulp    = require('gulp');
var watch    = require('gulp-watch');

// global watcher task to do all the magical stuff
gulp.task('watch',function(){
    watch('app/bower_components/**/*.js', function() {
        gulp.start('main-bower-files-js');
    });
    watch('app/resources/lang/fr/*.json', function() {
    gulp.start('merge-json-fr');
    });
    watch('app/resources/lang/en/*.json', function() {
    gulp.start('merge-json-en');
    });
});
