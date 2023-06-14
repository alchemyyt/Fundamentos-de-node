const gulp = require('gulp');
gulp.task('build',(callback)=>{
  console.log('Construyendo el sitio')
  setTimeout(callback,1200)
  callback()
});