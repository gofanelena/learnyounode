//模块输出一个函数，含有三个参数，分别为目录路径、过滤的后缀、一个回调函数
//不可以在模块中直接打印查找的文件，需要在主函数中打印
var fs = require ('fs');

module.exports = function(path,ext,callback){
	var extension = "."+ ext;
	var data=[];
	fs.readdir(path,function(err,list){
		if(err){
			return callback(err)  //early return 
		}
		//no error
		data = list.filter(cur=>{
			return cur.indexOf(extension)>-1
		})
		//all went well,call callback with "null" for the error argument
		return callback(null,data)
	})
}