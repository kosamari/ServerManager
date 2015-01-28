var express = require('express')
var app = express();
// var port = 3000;
var location = __dirname;

exports.run = function(port, path){
    app.use(express.static(path));
    app.listen(port);
}

exports.close = function(){
    app.close()
}