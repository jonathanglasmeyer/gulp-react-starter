var gulp = require('gulp');

gulp.task('build', ['browserify', 'images', 'markup', 'move-less']);
