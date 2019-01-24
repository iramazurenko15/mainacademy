var moviesJSON = require('../movies.json');


exports.home = function(req, res) {
var movies = moviesJSON.movies;
console.log(movies);
	res.render('index', {
		movies : movies
	});
};

exports.movies = function(req, res) {


var movies = moviesJSON.movies;
  res.render('movies', {
  	movies : movies
  });
};

exports.movieSingle = function(req, res ) {
  var movieId = req.params.id;
  res.send(movieId);
};

exports.notFound = function(req, res) {
  res.send('Page not found')
};