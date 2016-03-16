/**
 * Created by james.magpantay on 3/3/2016.
 */
var gulp        = require('gulp')
var config = require('gulp-ng-config');

gulp.task('config', function() {
    return gulp.src('app/scripts/config/setup.json')
        .pipe(config('app',{
            createModule: false,
            wrap: true}))
        .pipe(gulp.dest('app/scripts/config'));
});

gulp.task('config:mock', function() {
    return gulp.src('app/scripts/config/setup.json')
        .pipe(config('app',{
            createModule: false,
            wrap: true,
                constants:{
                    setup:{
                        useMockData:true
                    }
                }}
           ))
        .pipe(gulp.dest('app/scripts/config'));
});

gulp.task('config:bypassApache', function() {
    return gulp.src('app/scripts/config/setup.json')
        .pipe(config('app',{
                createModule: false,
                wrap: true,
                constants:{
                    setup:{
                        bypassApache:true
                    }
                }}
        ))
        .pipe(gulp.dest('app/scripts/config'));
});

gulp.task('config:mock bypassApache', function() {
    return gulp.src('app/scripts/config/setup.json')
        .pipe(config('app',{
                createModule: false,
                wrap: true,
                constants:{
                    setup:{
                        useMockData:true,
                        bypassApache:true
                    }
                }}
        ))
        .pipe(gulp.dest('app/scripts/config'));
});