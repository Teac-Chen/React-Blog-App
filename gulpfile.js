const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const compileFile = ['./src/server/**/*.js'];

gulp.task('compile', () => {
  gulp.src(compileFile)
    .pipe($.babel({
      presets: ['env'],
      plugins: ['transform-runtime']
    }))
    .pipe(gulp.dest('./bin/server'))
});

gulp.task('server', ['compile'], () => {
  let stream = $.nodemon({
    script: 'bin/server/app.js',
    watch: ["bin/server"],
    delay: 1000
  });

  return stream
})

gulp.task('default', ['server']);

const watcher = gulp.watch(compileFile, ['compile']);

watcher.on('change', e => {
  console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
})