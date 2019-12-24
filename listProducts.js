var faker = require('faker');

function generate() {
	var randomProduct = faker.commerce.productName();
	var randomPrice = faker.commerce.price();
	var entry = randomProduct + ' - $' + randomPrice;
	console.log(entry);
}

for (var i = 0; i < 10; i++) {
	console.log(generate());
}
