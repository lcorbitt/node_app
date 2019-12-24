var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get('/', function(req, res) {
	res.send('Hi there!');
});

// "/about"
app.get('/about', function(req, res) {
	res.send('About Us Page');
});

// "/contact"
app.get('/contact', function(req, res) {
	res.send('Contact Us Page');
});

app.listen(3000, function() {
	console.log('localhost:3000 server is running successfully!');
});
