//task11 => HTTP FILE SERVER
/**
题目：实现一个http文件服务器，监听第一个参数的端口，使用fs.createReadStream()返回第二个参数代表的url的文件流,
	req和res都是Stream对象
hint:使用http内置模块，API：http.createServer(function(req,res){...})返回一个http server的实例
	fs模块，API：fs.createReadStream(url)返回一个stream对象，可以使用src.pipe(dst)来将一个可读流直接输出到可写流
**/
var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
	fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2])