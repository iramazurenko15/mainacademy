var gulp = require('gulp'),
    less = require('gulp-less'),
    ejs = require('gulp-ejs'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    express = require('express'),
    path = require('path'),
    app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(3000, function() {
  console.log('Server started on port 3000');
});


var routes = require('./routes');

//home page
app.get('/', routes.home);

//movies page
app.get('/movies', routes.movies);


//movies single page
app.get('/movie/:id?', routes.movieSingle);

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
    gulp.watch('./views/**/*.ejs', ['ejs']);
});

gulp.task('default', ['less','watch']);