var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('search');
});

app.get('/results', function(req, res) {
	var searchString = req.query.search;
	request('http://www.omdbapi.com/?s=' + searchString + '&apikey=thewdb', function(error, response, body) {
		if (!error && res.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('results.ejs', { data: data });
		}
	});
});

app.listen(3000, (req, res) => {
	console.log('Server started on localhost:3000');
});
