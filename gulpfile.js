const gulp = require('gulp');
const git = require('gulp-git');
const shell = require('gulp-shell');

/* for dev */
gulp.task('dev:server', shell.task('npm run server ./'));
gulp.task('dev:webpack', shell.task('npm run webpackDev'));
gulp.task('dev', ['dev:server', 'dev:webpack']);

/* for git */
gulp.task('gh:add', function() {
  return gulp.src('./').pipe(git.add());
});
gulp.task('gh:commit', ['gh:add'], function() {
  return gulp.src('./').pipe(git.commit("Update by gulp script."));
});
gulp.task('gh', ['gh:commit'], function() {
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('default', ['dev']);
