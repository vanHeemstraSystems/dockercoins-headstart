var express = require('express');
var app = express();
var redis = require('redis');

var client = redis.createClient(6379, 'redis');
client.on("error", function (err) {
    console.error("Redis error", err);
});

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.use(express.static('static'));

var server = app.listen(80, function () {
    console.log('Server running on port 80');
});
