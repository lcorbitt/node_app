const request = require('request');
request('https://jsonplaceholder.typicode.com/users/2', (error, response, body) => {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	// console.log('body:', body); // Print the HTML for the Google homepage.
	const parsedData = JSON.parse(body);
	console.log(parsedData.name + 'lives in ' + parsedData.address.city);
});
