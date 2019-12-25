var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal/', function(req, res) {
	var sounds = {
		pig: 'Oink',
		cow: 'Moo',
		dog: 'Woof'
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send('The ' + animal + ' says ' + sound);
});

app.get('/repeat/:word/:times', function(req, res) {
	var word = req.params.word;
	var number = Number(req.params.times);
	var result = '';

	for (var i = 0; i < number; i++) {
		result += word + ' ';
	}
	res.send(result);
});

// 400 error
app.get('*', function(req, res) {
	res.send('Sorry, page not found... Please try again.');
});

// Server listener
app.listen(3000, function() {
	console.log('localhost:3000 server is running successfully!');
});
