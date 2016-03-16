/**
 * Created by james.magpantay on 12/24/2015.
 */
var gulp   = require('gulp')
var del    = require('del')
var config = require('../config')

var cleanTask = function (cb) {
    del([config.root.dest]).then(function (paths) {
        cb()
    })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
