var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('less', function (){
	return gulp.src('less/style.less')
		.pipe(less().on('error', function(err) {
	        gutil.log(err);
	        this.emit('end');
	    }))
		.pipe(gulp.dest('css'));
});

gulp.task('lint', function(){
	return gulp.src(['js/*.js','*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

gulp.task('watch', function (){
	gulp.watch('less/*.less', ['less']);
	gulp.watch(['js/*.js','*.js'], ['lint']);
	 
}); 

gulp.task('default', ['watch']);