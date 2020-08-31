var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer'); //补全浏览器前缀

// less -> css
gulp.task('less', function () {
  return gulp.src(['less/*.less'])
    .pipe(less())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 20 versions']
    }))
    .pipe(gulp.dest('./css'))
});


gulp.task('watch', function () {

  livereload.listen();
  gulp.watch("./less/*.less", gulp.series(['less']));

  gulp.watch([
    './css/*.css',
    './*.html',
  ], async () => livereload.reload())
});





// 默认任务
gulp.task('default', gulp.series(['watch']));


