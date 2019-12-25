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

// "/posts"
app.get('/posts', function(req, res) {
	res.send('Welcome to the Posts Page');
});

// "/posts/:categoryName"
app.get('/posts/:categoryName', function(req, res) {
	console.log(req.params.categoryName);
	var categoryName = req.params.categoryName;
	res.send('Welcome to the ' + categoryName + ' Page');
});

// 400 error
app.get('*', function(req, res) {
	res.send('400 Error');
});

app.listen(3000, function() {
	console.log('localhost:3000 server is running successfully!');
});
