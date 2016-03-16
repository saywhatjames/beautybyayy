var gulp = require('gulp');
var compass = require('compass');
var fs = require('fs');



gulp.task('compass', function (cb) {
    compass.compile(cb)

});

