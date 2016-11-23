/**
 * Created by Administrator on 2016-11-23.
 */
var http=require('http');

http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}).listen(1337,'127.0.0.1');