const gulp = require("gulp");
const stylus = require("gulp-stylus");
const nib = require("nib");

gulp.task("gulp-stylus", function () {
  return gulp
    .src("./css/base.styl")
    .pipe(
      stylus({
        compress: true,
        use: nib(),
      })
    )
    .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function () {
  gulp.watch("./css/*.styl", gulp.parallel(["gulp-stylus"]));
});
