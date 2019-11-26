const gulp=require("gulp");
const babel=require("gulp-babel");
const ren=require("gulp-rename");
const cat=require("gulp-concat");
const targetfolder="bin";
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const ufy=require("gulp-uglify");
gulp.task('scripts',()=>{
	return gulp
	.src("src/*.js")
	.pipe(babel())
	.pipe(ufy())
	.pipe(gulp.dest(targetfolder));
});
gulp.task('cssmi',()=>{
	return gulp
	.src("src/*.css")
	.pipe(cssmin())
	.pipe(gulp.dest(targetfolder));
});
gulp.task('htmlmi', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(targetfolder));
});
gulp.task('default',["scripts","cssmi","htmlmin"]);