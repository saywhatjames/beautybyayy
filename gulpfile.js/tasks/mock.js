
/**
 * Created by james.magpantay on 1/12/2016.
 */
var config      = require('../config')
if(!config.tasks.mock) return

var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')
var jsonminify  = require('gulp-jsonminify')

var paths = {
    src: path.join(config.root.src, config.tasks.mock.src, '/*.json'),
    dest: path.join(config.root.dest, config.tasks.mock.dest)
}


var mockTask = function() {
    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(jsonminify())
        .pipe(gulp.dest(paths.dest))
}

gulp.task('mock-data', mockTask)
module.export