var connect = require('connect');

function miniHarp(harPort, port){
	var app = connect();
	console.log('Starting http server on http://localhost:' + port);
	return app.listen(port);
}


module.exports = miniHarp;

