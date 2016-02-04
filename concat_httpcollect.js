var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function (res) {
	var write = concat(function (data) {
		console.log(data.length);
		console.log(data.toString());
	});
	res.pipe(write);
});
