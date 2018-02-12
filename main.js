var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);
// const IP = require('external-ip')();

app.get('/', (req, res) =>
{
    var style = 'style="padding:25px; font-family:sans-serif"';
    res.send(`<h1 ${style}>Hello, World!</h1>`)
});

// IP((err, ip) =>
// {
//     console.log(`\nExample app listening at http://${ip}:3000\n`);

//     app.get('/', (req, res) =>
//     {
//         var style = 'style="padding:25px;font-family:sans-serif"';
//         res.send(`<h1 ${style}>Hello, World!<br/><br/>[ ${ip} ]</h1>`);
//     });
// });
