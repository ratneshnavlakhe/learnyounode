var http = require('http');

var urlmod =  require('url');

//var urls = process.argv[2]; /url-2,url-3,url-4

var urllist = [], strings = [];

for(var i = 2; i < process.argv.length; i++) {
	urllist[urllist.length] = process.argv[i];
}

//console.log(process.argv.length);

//console.log(urllist);
var i = 0;

urllist.forEach(function (url) { 
var string = '';
	http.get(url, function (res) {
		res.setEncoding('utf8');

		res.on('data', function (data) {
			string += data;
		});

		res.on('end', function () {

			strings[i++] = string;

			if(i === 3) {
				//console.log(strings.length);
				printdata(strings);
			}
		});
	});
});

function printdata(data) {
//console.log('here');
	for(var j = 0; j < data.length; j++ ) console.log(data[j]);

}

