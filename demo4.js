//task4 =>MY FIRST ASYNC I/O!
/**
题目：使用nodejs的fs模块异步的读一个文件，输出其中的换行数，文件路径会以命令行第一个参数形式给出
hint：使用API：fs.readFile（'/path/to/file'，[encode],callback）
第二个参数为可选的编码方式，当不设置时，回调函数可以拿到Buffer对象表示的文件内容，设置编码方式为“utf-8”,
回调函数中拿到的就是String对象
API:fs.readFileSync(filename, [encoding])
**/
var fs  = require('fs');
fs.readFile(process.argv[2],function(err,data){
	if(err){
		console.log(err)
	}
	var newlines = data.toString().split('\n').length - 1;
	console.log(newlines);
})

//设置编码方式，data为String对象
// fs.readFile(process.argv[2],'utf-8',function(err,data){
// 	if(err){
// 		console.log(err)
// 	}
// 	var newlines = data.split('\n').length - 1;
// 	console.log(newlines);
// })