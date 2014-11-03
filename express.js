var express = require('express')
var app = express();
var port = 3000;
var location = __dirname;

app.use(express.static(location));
app.listen(port);