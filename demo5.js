//task5 => FILTERED LS
/**
题目：给定一个目录，按后缀名过滤出目录下的文件,输出格式一行一个文件；目录为命令行第一个参数，后缀为第二个参数,不含“.”前缀
hint:使用fs模块的readdir('/path/to/dir/',function(err,lists){})方法
lists是包含文件名字符串的一个数组
**/
var fs = require ('fs');
var extension = "."+process.argv[3];
fs.readdir(process.argv[2],function(err,lists){
	if(err){
		console.log(err);
	}
	//采用了数组的filter方法，返回值是一个数组，也可以遍历逐行打印出满足条件的文件名
	var out = lists.filter(cur=>{
		return cur.indexOf(extension)>-1;
	})
	console.log(out.join('\n'));
})