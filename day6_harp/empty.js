var miniharp = require('./index.js');
var argv = require('minimist')(process.argv.slice(2))
var port = argv.port ? argv.port : false;
var 

var app = miniharp();

console.log('Starting http server on http://localhost:4000');
app.listen(4500);