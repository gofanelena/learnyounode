//task 7 =>HTTP CLIENT
/**
题目：写一个程序实现http GET请求 ，url作为命令行第一个参数提供，输出每次触发data事件时响应里的内容
hint:使用nodejs的http模块，http.get(url,function(response){...}),response是一个node的Stream对象,
这个对象有三个监听事件:"data","error","end"
response.on('data',function(data){...})事件，data是一段一段的输出，为Buffer对象，
可以使用response.setEncoding()设置编码为"utf-8"后，data事件的输出就是String对象
**/

var http = require('http')
http.get(process.argv[2],function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		//每次data事件响应的内容都是以新的行输出的，所以不需要在console里加换行
		console.log(data);
	})
})