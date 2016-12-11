const gulp = require('gulp');
const git = require('gulp-git');

gulp.task('gh:add', function() {
  return gulp.src('./').pipe(git.add());
});

gulp.task('gh:commit', ['gh:add'], function() {
  return gulp.src('./').pipe(git.commit("Update by gulp script."));
});

gulp.task('gh:push', ['gh:commit'], function() {
  git.push('gh', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('default', ['gh:push']);
