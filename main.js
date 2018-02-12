var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

app.get('/', function(req, res)
{
    res.send('<h1 style="padding:25px; font-family:sans-serif">Hello, World!</h1>');
});

console.log('\nExample application listening on port 3000\n');