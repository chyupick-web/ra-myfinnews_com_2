// database
var http = require ('http');        	// For serving a basic web page.


var theport = process.env.PORT || 5000;


var http = require('http')
	, express = require('express')
	, app = express()
	, port = process.env.PORT || 5000;



app.get("/", function(req, res){

	res.writeHead(301, {'Location': 'https://plus.google.com/+GDGSPorg'});

	res.end();

	//res.send("redirecting...");
	//res.sendfile(__dirname + '/index.html');

});




var server = http.createServer(app);
	server.listen(port);

console.log('http server listening on %d', port);
