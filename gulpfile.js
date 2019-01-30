var gulp = require('gulp'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    express = require('express'),
    path = require('path'),
    app = express();



app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views/pages'));
app.use(express.static(path.join(__dirname, './public')));


app.listen(3000, function() {
  console.log('Server started on port 3000');
});


var routes = require('./routes');

//home page
app.get('/', routes.home);

//movies page
app.get('/movies', routes.movies);


//movies single page
app.get('/movie/:id?', routes.movie_single);

//404 page
app.get('*', routes.notFound);



gulp.task('less', function() {
    return gulp.src('./public/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css'))

});


gulp.task('watch', ['less'], function() {
    gulp.watch('./public/less/style.less', ['less']);
});

gulp.task('default', ['less','watch']);