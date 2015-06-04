#!/usr/bin/env nodemon
var argv = require('minimist')(process.argv.slice(2));
var miniharp = require('mini-harp');

var hasPort = argv.port ? argv.port : false;
var port = parseInt(argv._) ? parseInt(argv._) : 4000;


console.log('argv is : ');
for(var key in argv){
	console.log(key + ' : ' + argv[key]);
}
console.log('HasPort : ' + hasPort);
console.log('Port is : ' + port);
miniharp(hasPort, port);