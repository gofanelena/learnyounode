//task12 => HTTP UPPERCASERER
/**
题目：实现一个http server,只接受post请求，并将请求的body部分的字符都大写响应给客户端，监听端口以第一个参数给出
hint:使用第三方包through2-map可以很好的将Stream的chunk数据进行处理
**/

var http = require('http')
var map = require('through2-map')
http.createServer(function(req,res){
	//答案似乎并没有判断请求是否为post方法
	// if(req.method!=='post'){
	// 	return res.end('please send a post request')
	// }
	req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(res);
}).listen(Number(process.argv[2]))