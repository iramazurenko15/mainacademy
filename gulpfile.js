var gulp = require('gulp'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    notify = require('gulp-notify'),
    express = require('express'),
    path = require('path'),
    app = express(),
    fs = require('fs'),
    data = require('gulp-data'),
    merge = require('gulp-merge-json');


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
  return gulp.src('/views/**/*.pug')
      .pipe(plumber())
      .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('/data/data.json'))
        }))
      .pipe(pug({
            pretty: true
        }))
      .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
      .pipe(gulp.dest(__dirname))
});


gulp.task('pug:data', function() {
    return gulp.src('/data/**/*.json')
        .pipe(merge({
            fileName: 'data.json',
            edit: (json, file) => {
                // Extract the filename and strip the extension
                var filename = path.basename(file.path),
                    primaryKey = filename.replace(path.extname(filename), '');

                // Set the filename as the primary key for our JSON data
                var data = {};
                data[primaryKey.toUpperCase()] = json;

                return data;
            }
        }))
        .pipe(gulp.dest('/temp'));
});

gulp.task('pug', ['pug:data'], function() {
    return gulp.src('/views/**/*.pug')
        .pipe(data(function() {
            return JSON.parse(fs.readFileSync('/temp/data.json'))
        }))
        .pipe(pug({
            pretty: true,
            basedir: './'
        }))
        .pipe(gulp.dest(__dirname));
});

gulp.task('watch', ['less', 'pug'], function() {
    gulp.watch('public/less/style.less', ['less']); 
    gulp.watch('views/**/*.pug', ['pug']);
});

