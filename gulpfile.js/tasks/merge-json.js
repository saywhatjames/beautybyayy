var gulp    = require('gulp');
var merge   = require('gulp-merge-json');
var extend   = require('gulp-extend');
var replace = require('gulp-replace');


//merge JSON files to one file for the dist environment
gulp.task('merge-json-en', function(){
    return gulp.src('app/resources/lang/en/*.json')
        .pipe(merge('en.json'))
        .pipe(gulp.dest('app/resources/lang'));
});

gulp.task('merge-json-fr', function(){
    return gulp.src('app/resources/lang/fr/*.json')
        .pipe(merge('fr.json'))
        .pipe(gulp.dest('app/resources/lang'));
});

gulp.task('merge-json', ['merge-json-en','merge-json-fr']);

