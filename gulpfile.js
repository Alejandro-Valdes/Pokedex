var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var js_src = 'app/scripts/**/*.js';

var sass_src = 'app/sass/**/*.scss';
var sass_main = 'app/sass/main.scss';

gulp.task('sass', function(){
	return gulp.src(sass_main)
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('app.css'))
		.pipe(gulp.dest('./app/styles'));
});

gulp.task('lint', function(){
	return gulp.src(js_src)
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

gulp.task('watch', function (){
	gulp.watch(sass_src, ['sass']);
	gulp.watch(js_src, ['lint']);
	 
}); 

gulp.task('default', ['watch']);