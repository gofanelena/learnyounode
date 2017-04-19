//task13 => HTTP JSON API SERVER
/**
题目：实现一个http服务器，当接收到'/api/parsetime'的get请求时，返回json格式data,监听端口是命令行第一个参数
	请求含有key为'iso'的ISO格式时间的query string;返回json数据只包含"hour"、"minute"、"second"属性
	eg： /api/parsetime?iso=2013-08-10T12:10:15.474z  =>{"hour":14,"minute":23,"second":15}

**/

var http = require('http');
var url = require('url');
http.createServer(function(req,res){
	////url.parse(req.url).query拿到的是"iso=2013-08-10T12:10:15.474z"这段
	var isoTime = url.parse(req.url).query.split("=")[1]; 
	var date = new Date(isoTime);
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var unixtime = date.getTime(); //获得unix时间戳
	var jsonObj;
	if(req.url.indexOf('api/parsetime')>0){
		jsonObj={hour:hour,minute:minute,second:second}
	}else {
		jsonObj = {unixtime:unixtime}
	}
	res.writeHead(200,{'Content-Type':'application/json'});
	res.write(JSON.stringify(jsonObj));
	res.end();
}).listen(Number(process.argv[2]))