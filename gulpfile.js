"use strict";
var gulp = require('gulp'),
browserSync = require('browser-sync').create();
gulp.watch("app/*.html").on('change', browserSync.reload);
gulp.task('default', function () {
browserSync.init({
server: {
baseDir: "./app"
}

 });
});