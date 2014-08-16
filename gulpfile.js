var gulp = require("gulp"),
	jshint = require("gulp-jshint");

gulp.task("jshint", function () {
	return gulp.src([
			"./App/**/*.js",
			"./Data/**/*.js",
			"./Domain/**/*.js",
			"./Utils/**.*.js"
		])
		.pipe(jshint())
		.pipe(jshint.reporter("default"))
		.pipe(jshint.reporter("fail"));
});