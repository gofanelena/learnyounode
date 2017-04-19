//task10 => TIME SERVER
/**
题目：写一个tcp的time 服务器，监听以命令行第一个参数给出的端口，每建立一个连接，输出
   “YYYY-MM-DD HH:mm”格式的时间加换行，并主动关闭该连接
hint:需要用到net模块写一个raw tcp server,使用API： net.createServer(function listener(socket){...})
	返回的是一个server的实例
	socket.write(data)向socket中写入数据，socket.end()关闭这个socket,也可是使用socket.end(data)代替
**/

var net = require('net')
var server = net.createServer(function(socket){
	//socket handling logic
	var date = new Date();
	var month = date.getMonth()+1;
	month=month>10?month:'0'+month;
	var day = date.getDate()>9?date.getDate():'0'+date.getDate();
	var hour = date.getHours()>9?date.getHours():'0'+date.getHours();
	var mins= date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
	var str = date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+mins+'\n';
	socket.write(str);
	socket.end()
})
server.listen(process.argv[2])