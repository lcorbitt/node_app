var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('This is the home page');
});

app.get('/posts', function(req, res) {
	var posts = [
		{ title: 'Post 1', author: 'Suzy' },
		{ title: 'Post 2', author: 'Lukas' },
		{ title: 'Post 3', author: 'Taylor' }
	];

	res.render('posts.ejs', { posts: posts });
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
