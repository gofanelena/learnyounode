//task6 => MAKE IT MODULAR
/**
题目：同task5一样，但是引入了模块的概念，需要创建两个文件来完成,将打印文件的函数封装成一个模块引入
主函数异步读取目录，第一个参数为目录路径，第二个参数为过滤的后缀
模块输出一个函数，含有三个参数，分别为目录路径、过滤的后缀、一个回调函数，格式node(error,data),data是一个数组,
不可以在模块中直接打印查找的文件，需要在主函数中打印,但可以在模块中提前处理部分错误
hint:模块文件可以这样写 module.exports = function(args){}
引入模块：var myModule = require('./6module.js')
**/

var myModule = require('./6module.js')
myModule(process.argv[2],process.argv[3],function(error,data){
	if(error){
		console.log(error);
		// return
	}
	//no error,console the result,data is Array
	console.log(data.join('\n'))
})