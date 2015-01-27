var express = require('express')
var app = express();
// var port = 3000;
var location = __dirname;

app.use(express.static(location));

exports.run = function(port){
    app.listen(port);
}

exports.close = function(){
    app.close()
}