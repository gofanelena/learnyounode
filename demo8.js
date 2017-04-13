//task8 => HTTP COLLECT
/**
题目：执行http GET请求 ，url作为命令行第一个参数提供，收集每次触发data事件时所有从服务端返回的响应里的内容
输出为两行，第一行为从服务器收到的响应的字符数，第二行为从服务器收到的所有的字节的String内容
**/
var http = require ('http');
var content ='';
http.get(process.argv[2],function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		content += data;
	})
	.on('end',function(){
		console.log(content.length); //包括空格字符
		console.log(content);
	})
})