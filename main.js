var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res)
{
    res.send('<h1 style="padding:25px; font-family:sans-serif">Hello, World!</h1>');
});

var server = app.listen(8000, 'localhost', function()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
