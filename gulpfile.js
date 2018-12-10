var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var notify = require('gulp-notify');

gulp.task('less', function(){ 
    return gulp.src('app/less/**/*.less') 
        .pipe(plumber())
        .pipe(less()) 
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function() {
  return gulp.src('app/pug/pages/*.pug')
      .pipe(plumber())
      .pipe(pug({
            pretty: true
        }))
      .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
      .pipe(gulp.dest('app'))
      .pipe(browserSync.stream());
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync', 'less', 'pug'], function() {
    gulp.watch('app/less/**/*.less', ['less']); 
    gulp.watch('app/pug/**/*.pug', ['pug']);
});

