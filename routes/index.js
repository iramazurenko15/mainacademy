var moviesJSON = require('../movies.json');


exports.home = function(req, res) {
var movies = moviesJSON.movies;
	res.render('home', {
		movies : movies
	});
};

exports.movies = function(req, res) {
var movies = moviesJSON.movies;
  res.render('movies', {
  	movies : movies
  });
};

exports.movie_single = function(req, res ) {
  	var id = req.params.id;
	var movies = moviesJSON.movies;

	if (id >= 1 && id <= movies.length) {
		var movie = movies[id - 1];		
		res.render('movie_single', {
			movies : movies,
			movie : movie
		});

	} else {
		res.render('notFound');
	}
};

exports.notFound = function(req, res) {
  res.render('notFound');
};