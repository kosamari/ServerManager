var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var contentTypes = {
        "html": "text/html",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "png": "image/png",
        "js": "text/javascript",
        "css": "text/css"
    };

http.createServer(function(req, res) {
    var uri = url.parse(req.url).pathname==='/' ? 'index.html' : url.parse(req.url).pathname;
    console.log(uri)
    var filename = path.join(process.cwd(), uri);
    fs.exists(filename, function(exists,err) {
        console.log(exists)
        console.log(filename)
        if(!exists) {
            console.log("not exists: " + filename);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
            return;
        }
        var mimeType = contentTypes[path.extname(filename).split(".")[1]];
        res.writeHead(200, {'Content-Type': mimeType});

        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);

    });
}).listen(3000);