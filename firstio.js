var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
//console.log(file.toString());

var arr = file.toString().split('\n');

console.log(arr.length - 1);


//file.on('data', function (data) {
//	console.log(data);
//});

//file.on('error', function (err) {
//console.log(err);
//});
