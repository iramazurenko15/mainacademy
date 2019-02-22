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

//search results page
exports.results = function(req, res) {
	var query = req.query.search;

    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=51e470d0';
    
    request(url, function(error, response, body) {
    	console.log(url);
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log(data.totalResults);
            console.log(data.page);
            res.render('results', {
            	data: data
            });
        }     
    });
};

exports.notFound = function(req, res) {
  res.render('notFound');
};