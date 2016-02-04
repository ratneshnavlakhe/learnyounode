var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	var string = '';
	response.on('data', function (data){
		string += data;
	});

	response.on('end', function (){
		console.log(string.length);
		console.log(string);
	});
});
