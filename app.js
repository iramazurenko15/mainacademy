var express = require('express'),
    path = require('path'),
    app = express(),
    pug = require('pug'),
    less = require('less-middleware');




app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views/pages'));
app.use(less(__dirname + '/public'));
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
app.get('/movie/:id?', routes.movie_single);

//404 page
app.get('*', routes.notFound);



