/**
 * Created by james.magpantay on 12/30/2015.
 */
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('dev', gulpSequence('build:real'));


gulp.task('build:mock', gulpSequence('clean','config:mock','compass','bower','useref','html','concat','fonts','images','rev','mock-data'));
gulp.task('build:real', gulpSequence('clean','config','compass','bower','useref','html','concat','fonts','images','rev'));

gulp.task('build', gulpSequence('build:real'));

gulp.task('default', gulpSequence('build:real'));