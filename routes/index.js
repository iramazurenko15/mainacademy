var moviesJSON = require('../movies.json');
var request = require('request');

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


exports.results = function(req, res) {
	var query = req.query.search;
	console.log(query);
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=51e470d0';
    console.log(url);
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
        	console.log("bla");
            var data = JSON.parse(body)
            res.render('results', {
            	data: data
            });
        } 
    });
};

exports.notFound = function(req, res) {
  res.render('notFound');
};