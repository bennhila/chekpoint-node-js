var generator = require('generate-password');

var password = generator.generate({
	length: 20,
	numbers: true,
    symbols: true,
    lowercase : true,
});
console.log(password)