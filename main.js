var express = require('express');
var app = express();
var server = app.listen(3000);

app.get('/', (req, res) =>
{
    var style = 'style="padding:25px; font-family:sans-serif"';
    res.send(`<h1 ${style}>Hello, World!</h1>`)
});

console.log("\nExample app listening on port 3000...\n")