var net =  require('net');
var server = net.createServer(function (socket) {
	var date = new Date();

	var data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ' ' + date.getMinutes();

	console.log(data);

	socket.write(data);

	socket.close(data);
});

server.listen(process.argv[2]);
