"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compileSass);

// compileSass
function compileSass() {
	return gulp
		.src("scss/**/*.scss")
		.pipe(sass()) // simple
		// compressed
		//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest("./css"));
};

// watch
function watch() {
	gulp.watch("scss/**/*.scss", compileSass);
}
