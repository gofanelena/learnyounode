//task9 => JUGGLING ASYNC
//题目：给定3个url作为命令行参数传入,使用http.get()，按url顺序输出返回的String内容，每个url的响应一行

var http = require('http')
var result=[];
var count=0;
function getData(i){
	http.get(process.argv[i],function(res){
		var content='';
		res.setEncoding('utf-8');
		res.on('data',function(data){
			content+=data;
		}).on('end',function(){
			result[i-2] = content;
			count++;
			if(count==3){
				console.log(result.join('\n'))
			}
		})
	})
}

for(var i=2;i<5;i++){
	getData(i);
}
