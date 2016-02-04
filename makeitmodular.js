var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function (err, data) {
	if(err) console.log('An error occured! please try again.');

	data.forEach(function (file) {
		console.log(file);
	});
})
