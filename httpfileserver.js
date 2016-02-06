var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	//console.log(req);

	res.writeHead(200, { 'content-type': 'text/plain' });

	fs.createReadStream(process.argv[3]).pipe(res);

	//var fdata = '';

	//readable.on('readable', function (data) {
	//	fdata += data;
	//});

	//readable.on('end', function () {
	//	console.log(fdata);
	//});

});
server.listen(Number(process.argv[2]));
