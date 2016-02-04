var http = require('http');
var urlmod =  require('url');
var urls = process.argv;

urls.forEach(function (url) {
var string = '';
	http.get(url, function (res) {
		res.setEncoding('utf8');

		res.on('data', function (data) {
			string += data;
		});

		res.on('end', function () {
			console.log(string);
		});
	});
});

