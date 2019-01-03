var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var notify = require('gulp-notify');
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/movies', function (req, res) {
  res.render('movies');
});



app.listen(3000, function() {
  console.log('Server started on port 3000');
});


gulp.task('less', function(){ 
    return gulp.src('public/less/style.less') 
        .pipe(plumber())
        .pipe(less()) 
        .pipe(gulp.dest('public/css'))
        
});

gulp.task('pug', function() {
  return gulp.src('views/pages/*.pug')
      .pipe(plumber())
      .pipe(pug({
            pretty: true
        }))
      .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
      .pipe(gulp.dest(__dirname))
});

gulp.task('watch', ['less', 'pug'], function() {
    gulp.watch('public/less/style.less', ['less']); 
    gulp.watch('views/**/*.pug', ['pug']);
});

