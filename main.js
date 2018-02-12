var express = require('express');
var app = express();
var server = app.listen(3000);
// var io = require('socket.io').listen(server);

app.get('/', (req, res) =>
{
    var style = 'style="padding:25px; font-family:sans-serif"';
    res.send(`<h1 ${style}>Hello, World!</h1>`)
});
