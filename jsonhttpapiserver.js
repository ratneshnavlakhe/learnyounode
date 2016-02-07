var http = require('http');
var url =  require('url');

var server =  http.createServer(function (req, res) {
	if ( req.method === 'GET' ) {

		var parsedurl =  url.parse(req.url, true);
		function parsedTime(date) {
			var data = {
				'hour': date.getHour(),
				'minute': date.getMinutes(),
				'seconds': date.getSeconds()
			};
			return data;
		}

		function unixtime(date) {
			var data =  {
				'unix': date.getTime()
			};
			return data;
		}
		//console.log(parsedurl.query);
		//console.log(parsedurl.pathname);

		var date, result;

		if(url.pathname === '/api/parsetime') {
			result = parsedTime(parsedurl.query.iso);
			
			
		} else if(url.pathname === '/api/unixtime') {
			result = parseunix(parsedurl.query.iso);
		}
	
		if(result) {
			res.writeHead(200, { 'content-type': 'json/application'});
			res.end(JSON.stringify(result));
		} else {
			res.writeHead(404);
			res.end();
		}

	}
});
server.listen(Number(process.argv[2]));
